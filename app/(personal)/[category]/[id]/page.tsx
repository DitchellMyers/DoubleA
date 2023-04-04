import { Artist, Event, Gallery, Sponsor, Workshop } from "@/types/typings"

import { getContent } from "@/lib/sanity.client"
import { getPreviewToken } from "@/lib/sanity.server.preview"
import { ArtistPage } from "@/components/pages/singlePage.tsx/ArtistPage"
import { EventPage } from "@/components/pages/singlePage.tsx/EventPage"
import { GalleryPage } from "@/components/pages/singlePage.tsx/GalleryPage"
import { WorkshopPage } from "@/components/pages/singlePage.tsx/WorkshopPage"

export default async function PageSlugId({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params
  const token = getPreviewToken()
  const data = await getContent({
    token: token,
    category: category,
    id: id,
  })

  if (data._type === "artist") {
    return <ArtistPage artist={data as Artist} />
  }

  if (data._type === "workshop") {
    return <WorkshopPage workshop={data as Workshop} />
  }

  if (data._type === "event") {
    return <EventPage event={data as Event} />
  }

  if (data._type === "gallery") {
    return <GalleryPage gallery={data as Gallery} />
  }

  return null
}
