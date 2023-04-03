import Link from "next/link"
import { NavigationLink, Social, Sponsor } from "@/types/typings"

interface IFooter {
  items: NavigationLink[]
  socials: Social[]
  sponsors: Sponsor[]
}

export function Footer({ items, socials, sponsors }: IFooter) {
  return (
    <footer className="container mx-auto px-3 sm:px-0">
      <section className="grid grid-cols-2 font-bold">
        <div className="flex flex-col">
          {Object.entries(socials).map(([key, value], index) => (
            <Link
              href={value}
              className="border-[0.5px] border-gray-300 bg-gray-950 p-3 uppercase hover:bg-black"
              target="_blank"
              key={index}
            >
              {key}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <Link
              href={`/${item.slug}`}
              className="border-[0.5px] border-gray-300 bg-gray-950 p-3 uppercase hover:bg-black"
              key={index}
            >
              {item.slug}
            </Link>
          ))}
        </div>
      </section>
    </footer>
  )
}
