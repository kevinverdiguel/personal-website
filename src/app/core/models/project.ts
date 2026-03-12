export interface Project {
  name: string;
  stack: { iconClasses: string; name: string };
  description: string;
  sourceUrl: string;
  previewUrl: string;
  imageUrl: string;
  featured?: boolean;
}
