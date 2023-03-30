import type { Image, PortableTextBlock as Block, SanityDocument } from 'sanity'

interface ExtendedImage extends Image {
  description: string
}

export interface Core extends SanityDocument {
  slug: string
  name: string
}

export interface CoreObject extends Core {
  image: ExtendedImage
  content?: Block[]
  publishedAt: string
}

export interface Page extends Core {
  alias?: string
  meta?: Block[]
}

export interface NavigationLink {
  _id: string
  name: string
  slug: string
}

export interface Settings extends Core {
  metaImage?: Image
  navImage: ExtendedImage
  navItems: NavigationLink[]
  footerItems: NavigationLink[]
  socials: { [key: string]: string }
}

export interface HomePage extends Page {
  vorwort: Block[]
  meta: Block[]
  backgroundImage: string
  pages: SubPage[]
}

export interface SubPage extends Page {
  content: Block[]
  artist: Artist[]
}

export interface Artist extends CoreObject {
  socials: { [key: string]: string }
}

export interface Workshop extends CoreObject {}

export interface Event extends CoreObject {
  duration?: {
    start: string
    end: string
  }
  events: Event[]
}

export interface Sponsor extends CoreObject {}

export interface Gallery extends CoreObject {
  images: ExtendedImage[]
}

export interface SlugProps {
  params: {
    slug: string
  }
}
