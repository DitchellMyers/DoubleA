import { Gallery } from "@/types/typings"

import { cn } from "@/lib/utils"
import SanityImage from "@/components/shared/Sanity/SanityImage"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"

export const GalleryPage = ({ gallery }: { gallery: Gallery }) => {
  const { name, images } = gallery
  return (
    <div className="space-y-10">
      <div className="flex w-full flex-col items-center justify-center space-y-5">
        <TypographyH1 highlight>{name}</TypographyH1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {images.map((i, index) => (
          <div className="relative aspect-video" key={index}>
            <SanityImage image={i} alt={i.beschreibung} />
          </div>
        ))}
      </div>
    </div>
  )
}
