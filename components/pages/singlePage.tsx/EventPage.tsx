import { Event } from "@/types/typings"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { CustomPortableText } from "@/components/shared/CustomPortableText"
import SanityImage from "@/components/shared/Sanity/SanityImage"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"
import { TypographyP } from "@/components/ui/Typography/TypographyP"

export const EventPage = ({ event }: { event: Event }) => {
  const { name, image, events, content, duration } = event

  return (
    <div className="space-y-10">
      <div className={cn("relative mx-auto aspect-square w-full max-w-[500px]")}>
        <SanityImage image={image} alt={name} width={500} height={500} priority />
      </div>
      <div className="mt-3 flex w-full flex-col items-center justify-center space-y-3 px-5 md:mt-5 md:space-y-5 lg:mt-10 lg:space-y-10">
        <TypographyH1 center highlight>
          {name}
        </TypographyH1>
        {content && (
          <div className="font-sans">
            {duration && (
              <div className="flex flex-col justify-start">
                <TypographyP className="[&:not(:first-child)]:mt-0">
                  <span className="inline-block w-[85px]">Beginn: </span>
                  {format(new Date(duration.start), "dd.MM.yyy H:mm")}
                </TypographyP>
                <TypographyP className="[&:not(:first-child)]:mt-0">
                  <span className="inline-block w-[85px]">Ende: </span>
                  {format(new Date(duration.end), "dd.MM.yyy H:mm")}
                </TypographyP>
                <TypographyP className="[&:not(:first-child)]:mt-0">
                  <span className="inline-block w-[85px]">Location: </span>
                  {"Frapé Aalen"}
                </TypographyP>
              </div>
            )}
            <CustomPortableText value={content}></CustomPortableText>
          </div>
        )}
      </div>
    </div>
  )
}
