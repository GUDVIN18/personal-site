-- Main DB schema for site projects and applications
PRAGMA foreign_keys = ON;

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

-- Seed example project
INSERT INTO projects (title, description, tags, image, link)
VALUES (
  'Example Project',
  'Пример описания проекта для тестирования API',
  '["example","demo"]',
  'https://via.placeholder.com/400',
  'https://example.com'
);
