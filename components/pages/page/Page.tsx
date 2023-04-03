import Image from "next/image"
import Link from "next/link"
import SectionBG from "@/public/SectionBG.jpg"
import { page } from "@/schemas/documents/page"
import { SubPage } from "@/types/typings"
import { CustomPortableText } from "components/shared/CustomPortableText"
import { ScrollUp } from "components/shared/ScrollUp"

import SanityImage from "@/components/shared/SanityImage"
import { Section } from "@/components/ui/Section"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"

export function Page({ data }: { data: SubPage }) {
  // Default to an empty object to allow previews on non-existent documents
  const { name, alias, content, artists, workshops, events, galleries, sponsors, meta } = data

  return (
    <>
      <Section>
        <div className="drop-shadow-glow2">
          <TypographyH1 className="flex h-full items-center justify-center">{alias ? alias : name}</TypographyH1>
        </div>
        {artists && (
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {artists.map((artist) => (
              <div className="group relative aspect-video w-full rounded-lg border border-gray-950 md:brightness-50 md:hover:brightness-110">
                <Link
                  className={
                    "mx-auto flex h-full w-full items-center justify-center text-center text-4xl/7 uppercase text-white"
                  }
                  href={`/${artist._type}/${artist.slug}`}
                >
                  <SanityImage
                    className={"-z-10 rounded-lg border border-gray-950"}
                    image={artist.image}
                    alt={artist.name}
                    height={320}
                    width={640}
                  />
                  <span className="flex h-1/3 w-full items-center justify-center self-end group-hover:drop-shadow-glow2">
                    {artist.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </Section>
      <ScrollUp />
    </>
  )
}
