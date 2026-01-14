import { LucideIcon } from 'lucide-react';

export interface TechItem {
  id: string;
  name: string;
  description: string;
  category: 'Backend' | 'Frontend' | 'Mobile' | 'DevOps' | 'Database';
  logo: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}