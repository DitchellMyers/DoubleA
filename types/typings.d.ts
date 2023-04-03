import type { PortableTextBlock as Block, Image, SanityDocument } from "sanity"

interface ExtendedImage extends Image {
  beschreibung: string
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
  slug?: string
  slugs?: [
    {
      _id: string
      slug: string
      name: string
    }
  ]
}

export interface Settings extends Core {
  metaImage?: Image
  navImage: ExtendedImage
  navItems: NavigationLink[]
  footerItems: NavigationLink[]
  socials: Social[]
  sponsors: Sponsor[]
}

export interface HomePage extends Page {
  eventDate: string
  backgroundImage: string
  vorwort: Block[]
  meta: Block[]
  pages: NavigationLink[]
}

export interface SubPage extends Page {
  content: Block[]
  artists: Artist[]
  workshops: Workshop[]
  events: Event[]
  sponsors: Sponsor[]
  galleries: Gallery[]
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

export interface Social {
  [key: string]: string
}

export interface SlugProps {
  params: {
    slug: string
  }
}
