import { Workshop } from "@/types/typings"

import { cn } from "@/lib/utils"
import { CustomPortableText } from "@/components/shared/CustomPortableText"
import SanityImage from "@/components/shared/Sanity/SanityImage"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"

export const WorkshopPage = ({ workshop }: { workshop: Workshop }) => {
  const { name, image, content } = workshop

  return (
    <div className="flex flex-col lg:space-y-10">
      <div className={cn("relative mx-auto aspect-video w-full max-w-[1200px]")}>
        <SanityImage image={image} alt={name} width={1200} height={675} priority />
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
