import Link from "next/link"
import { NavigationLink, Social, Sponsor } from "@/types/typings"

interface IFooter {
  items: NavigationLink[]
  socials: Social[]
  sponsors: Sponsor[]
}

export function Footer({ items, socials, sponsors }: IFooter) {
  return (
    <footer className="container mx-auto px-8 sm:px-0">
      <section className="grid grid-cols-2 font-bold">
        <div className="flex flex-col">
          {Object.entries(socials).map(([key, value], index) => (
            <p className="bg-gray-950 p-3 uppercase decoration-2 hover:underline" key={index}>
              <Link href={value} target="_blank">
                {key}
              </Link>
            </p>
          ))}
        </div>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <p className="bg-gray-950 p-3 uppercase decoration-2 hover:underline" key={index}>
              <Link href={`/${item.slug}`}>{item.slug}</Link>
            </p>
          ))}
        </div>
      </section>
    </footer>
  )
}
