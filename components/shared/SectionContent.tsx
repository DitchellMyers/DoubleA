import Link from "next/link"
import { Artist, Event, Gallery, Workshop } from "@/types/typings"

import { cn } from "@/lib/utils"
import SanityImage from "./Sanity/SanityImage"

interface SectionContentProps {
  items: Artist[] | Workshop[] | Event[] | Gallery[]
  category: string
}

export const SectionContent = ({ items, category }: SectionContentProps) => {
  const currentDate = new Date()

  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {items.map((item: Artist | Workshop | Event | Gallery, index) => (
        <>
          {new Date(item.publishedAt) < currentDate && (
            <div
              className="group w-full rounded-lg border border-gray-950 md:brightness-50 md:hover:brightness-110"
              key={index}
            >
              <Link
                className={cn(
                  "relative mx-auto flex h-full w-full items-center justify-center text-center text-4xl/7 uppercase text-white",
                  item._type == "event" ? "aspect-square" : "aspect-video"
                )}
                href={`/${item._type}/${item.slug}`}
              >
                <SanityImage
                  className={"-z-10 rounded-lg border border-gray-950"}
                  image={item.image}
                  alt={item.name}
                  height={item._type == "event" ? 1000 : 540}
                  width={item._type == "event" ? 1000 : 960}
                />
                {item._type == "gallery" && item.name}
              </Link>
            </div>
          )}
        </>
      ))}
    </div>
  )
}
