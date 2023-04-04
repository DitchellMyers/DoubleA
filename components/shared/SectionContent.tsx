import Link from "next/link"
import { Artist, Event, Gallery, Workshop } from "@/types/typings"

import SanityImage from "./SanityImage"

interface SectionContentProps {
  items: Artist[] | Workshop[] | Event[] | Gallery[]
  category: string
}

export const SectionContent = ({ items, category }: SectionContentProps) => {
  const currentDate = new Date()
  return (
    <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item: Artist | Workshop | Event | Gallery, index) => (
        <>
          {new Date(item.publishedAt) < currentDate && (
            <div
              className="group w-full rounded-lg border border-gray-950 md:brightness-50 md:hover:brightness-110"
              key={index}
            >
              <Link
                className={
                  "relative mx-auto flex aspect-video h-full w-full items-center justify-center text-center text-4xl/7 uppercase text-white"
                }
                href={`/${item._type}/${item.slug}`}
              >
                <SanityImage
                  className={"-z-10 rounded-lg border border-gray-950"}
                  image={item.image}
                  alt={item.name}
                  height={320}
                  width={640}
                />
                <span className="flex h-1/3 w-full items-center justify-center self-end group-hover:drop-shadow-glow2">
                  {item.name}
                </span>
              </Link>
            </div>
          )}
        </>
      ))}
    </div>
  )
}
