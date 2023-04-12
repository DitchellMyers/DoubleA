import { groq } from "next-sanity"

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...,
    "backgroundImage": image.asset->url,
    pages[]->{
      _id,
      name,
      "slug": slug.current
    }
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    ...,
    navItems[]->{
      _id,
      name,
      slugs != null => {
        slugs[]->{
          _id,
          name,
          "slug": slug.current,
        }
      },
      slug != null => {
        "slug": slug.current
      }
    },
    footerItems[]->{
      _id,
      _type,
      title,
      "slug": slug.current,
    },
    sponsors[]->{
      ...,
      "slug": slug.current
    }
  }
`
export const pageQuery = groq`*[_type == "page" && slug.current == $category][0] {
  ...,
  "slug": slug.current,
  "artists": artists[]->{..., "slug": slug.current},
  "workshops": workshops[]->{..., "slug": slug.current},
  "sponsors": sponsors[]->{..., "slug": slug.current},
  "events": events[]->{..., "slug": slug.current},
  "galleries": galleries[]->{..., "slug": slug.current},
}
`
export const contentQuery = groq`*[_type == $category && slug.current == $id][0]`

export const artistPageQuery = groq`*[_type == "page" && name == "Artists"][0] {
  ...,
  "slug": slug.current,
  artists[]->{
    ...,
    "slug": slug.current,
  },
}
`

export const workshopsQuery = groq`*[_type == "page" && name == "Workshops"][0] {
  ...,
  "slug": slug.current
  workshops[]->{
    ...,
    "slug": slug.current,
  }
}
`

export const sponsorsQuery = groq`*[_type == "page" && name == "Sponsoren und Partner"][0] {
  ...,
  "slug": slug.current
  sponsors[]->{
    ...,
    "slug": slug.current,
  }
}
`

export const sluqQueryIds = groq`*[_type == "artist" || _type == "workshop" || _type == "gallery" || _type == "event"] | order(_type asc) {
  _type,
  "slug": slug.current
}`

export const sluqQueryCategory = groq`*[_type == "page"] {
  "slug": slug.current
}`
