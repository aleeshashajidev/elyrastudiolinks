export interface SocialLink {
  name: string;
  description: string;
  url: string;
  icon: string;
  featured?: boolean;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface CustomerReview {
  name: string;
  quote: string;
  role?: string;
}