import { Workshop } from "@/types/typings"

import { cn } from "@/lib/utils"
import { CustomPortableText } from "@/components/shared/CustomPortableText"
import SanityImage from "@/components/shared/Sanity/SanityImage"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"

export const WorkshopPage = ({ workshop }: { workshop: Workshop }) => {
  const { _type, name, image, content } = workshop
  return (
    <div className="space-y-10">
      <div className="flex w-full flex-col items-center justify-center space-y-5">
        <div
          className={cn(
            "relative w-3/4 lg:w-1/3",
            ["event", "gallery"].some((x) => x === _type) ? "aspect-square" : "aspect-video"
          )}
        >
          <SanityImage image={image} alt={name} />
        </div>
        <TypographyH1 highlight>{name}</TypographyH1>
      </div>
      {content && (
        <div className="font-sans">
          <CustomPortableText value={content}></CustomPortableText>
        </div>
      )}
    </div>
  )
}
