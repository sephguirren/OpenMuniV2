export interface NavLink {
  label: string
  href: string
}

export interface NewsArticle {
  id: string
  category: string
  readTime: string
  title: string
  description: string
  date: string
  slug: string
}

export interface MediaItem {
  id: string
  image: string
  title: string
  date: string
  type: 'Photo' | 'Video'
  duration?: string
  description: string;
  location: string;
}

export interface LocationData {
  id: string
  icon: string
  name: string
  address: string
  phone: string
  hours: string
  tags: string[]
  mapUrl: string;
}

export interface QuickAccessCard {
  id: string
  icon: string
  title: string
  description: string
  link: string
}
