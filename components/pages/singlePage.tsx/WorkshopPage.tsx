import { Workshop } from "@/types/typings"

import { cn } from "@/lib/utils"
import { CustomPortableText } from "@/components/shared/CustomPortableText"
import SanityImage from "@/components/shared/Sanity/SanityImage"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"

export const WorkshopPage = ({ workshop }: { workshop: Workshop }) => {
  const { _type, name, image, content } = workshop
  const square = ["event", "gallery"].some((x) => x === _type) ? true : false

  return (
    <div className="flex flex-col lg:space-y-10">
      <div className={cn("relative mx-auto w-full max-w-[1000px]", square ? "aspect-square" : "aspect-video")}>
        <SanityImage image={image} alt={name} width={square ? 1000 : 960} height={square ? 1000 : 540} />
      </div>
      <div className="mt-3 flex w-full flex-col items-center justify-center space-y-3 px-5 md:mt-5 md:space-y-5 lg:mt-10 lg:space-y-10">
        <TypographyH1 center highlight>
          {name}
        </TypographyH1>
        {content && (
          <div className="font-sans">
            <CustomPortableText value={content}></CustomPortableText>
          </div>
        )}
      </div>
    </div>
  )
}
