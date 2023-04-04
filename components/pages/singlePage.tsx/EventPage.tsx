import { Event } from "@/types/typings"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { CustomPortableText } from "@/components/shared/CustomPortableText"
import SanityImage from "@/components/shared/Sanity/SanityImage"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"
import { TypographyP } from "@/components/ui/Typography/TypographyP"

export const EventPage = ({ event }: { event: Event }) => {
  const { _type, name, image, events, content, duration } = event
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
        <div className="mx-auto w-3/4 space-y-5 font-sans">
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
  )
}
