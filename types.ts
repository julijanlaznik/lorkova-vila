
export interface Room {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  capacity: number;
  area: number; // m2
  priceFrom: number; // CZK
  coverImage: string;
  videoUrl?: string; // New field for showreel
  galleryImages: string[];
  features: string[];
  availabilityFlag: boolean;
}

export interface Package {
  id: string;
  title: string;
  summary: string;
  inclusions: string[];
  price: number;
  duration: string; // e.g. "3 dny / 2 noci"
  promoImage: string;
  type: 'romantic' | 'family' | 'wellness' | 'seasonal';
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content: string; // Full text content
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'interior' | 'exterior' | 'wellness' | 'gastronomy';
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapsLink: string;
  coords: { lat: number; lng: number };
}
