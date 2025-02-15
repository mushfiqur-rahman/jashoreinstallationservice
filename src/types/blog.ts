
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  tags: string[];
  table_of_contents: TableOfContent[];
}

export interface TableOfContent {
  id: string;
  title: string;
  level: number;
  slug: string;
}
