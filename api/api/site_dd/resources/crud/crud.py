class SiteCrud:
    import json
    import sqlite3
    import asyncio
    from pathlib import Path

    BASE_DIR = Path(__file__).parent
    DB_PATH = BASE_DIR / "site.db"
    SQL_FILE = BASE_DIR / "main.sql"

    @classmethod
    async def _ensure_db(cls):
        # If DB file missing or doesn't contain required tables, initialize it.
        def _has_projects_table():
            if not cls.DB_PATH.exists():
                return False
            try:
                conn = cls.sqlite3.connect(str(cls.DB_PATH))
                cur = conn.cursor()
                cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='projects';")
                exists = cur.fetchone() is not None
                conn.close()
                return exists
            except Exception:
                return False

        has_table = await cls.asyncio.to_thread(_has_projects_table)
        if has_table:
            return

        # initialize DB from SQL file if present, otherwise create minimal schema
        if cls.SQL_FILE.exists():
            sql = cls.SQL_FILE.read_text(encoding="utf-8")

            def _init():
                conn = cls.sqlite3.connect(str(cls.DB_PATH))
                try:
                    cur = conn.cursor()
                    cur.executescript(sql)
                    conn.commit()
                finally:
                    conn.close()

            await cls.asyncio.to_thread(_init)
        else:
            def _init_min():
                conn = cls.sqlite3.connect(str(cls.DB_PATH))
                try:
                    cur = conn.cursor()
                    cur.executescript(
                        """
                        CREATE TABLE IF NOT EXISTS projects (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            title TEXT NOT NULL,
                            description TEXT NOT NULL,
                            tags TEXT,
                            image TEXT NOT NULL,
                            link TEXT
                        );
                        CREATE TABLE IF NOT EXISTS applications (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT NOT NULL,
                            phone TEXT NOT NULL,
                            email TEXT NOT NULL,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                        );
                        """
                    )
                    conn.commit()
                finally:
                    conn.close()

            await cls.asyncio.to_thread(_init_min)

    @classmethod
    async def _run_query(cls, query: str, params: tuple = (), fetch: bool = False):
        await cls._ensure_db()

        def _run():
            conn = cls.sqlite3.connect(str(cls.DB_PATH))
            conn.row_factory = cls.sqlite3.Row
            try:
                cur = conn.cursor()
                cur.execute(query, params)
                if fetch:
                    rows = cur.fetchall()
                    return [dict(row) for row in rows]
                else:
                    conn.commit()
                    return cur.lastrowid
            finally:
                conn.close()

        return await cls.asyncio.to_thread(_run)

    @classmethod
    async def create(cls, **data):
        # expects Project fields: title, description, tags (list), image, link
        tags = data.get("tags") or []
        tags_json = cls.json.dumps(tags, ensure_ascii=False)
        query = "INSERT INTO projects (title, description, tags, image, link) VALUES (?, ?, ?, ?, ?)"
        params = (data.get("title"), data.get("description"), tags_json, data.get("image"), data.get("link"))
        last_id = await cls._run_query(query, params, fetch=False)
        return {"status": 200, "message": f"Project created with id {last_id}"}

    @classmethod
    async def create_application(cls, **data):
        # expects Application fields: name, phone, email
        query = "INSERT INTO applications (name, phone, email) VALUES (?, ?, ?)"
        params = (data.get("name"), data.get("phone"), data.get("email"))
        last_id = await cls._run_query(query, params, fetch=False)
        return {"status": 200, "message": f"Application created with id {last_id}"}

    @classmethod
    async def get_project_all(cls):
        rows = await cls._run_query("SELECT * FROM projects ORDER BY id DESC", fetch=True)
        # parse tags
        for r in rows:
            try:
                r["tags"] = cls.json.loads(r.get("tags") or "[]")
            except Exception:
                r["tags"] = []
        return rows

    @classmethod
    async def get_application_all(cls):
        rows = await cls._run_query("SELECT * FROM applications ORDER BY created_at DESC", fetch=True)
        return rows