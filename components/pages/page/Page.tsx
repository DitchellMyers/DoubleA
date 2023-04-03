import Link from "next/link"
import { SubPage } from "@/types/typings"
import { ScrollUp } from "components/shared/ScrollUp"

import { CustomPortableText } from "@/components/shared/CustomPortableText"
import { SectionContent } from "@/components/shared/SectionContent"
import { Section } from "@/components/ui/Section"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"

export function Page({ data }: { data: SubPage }) {
  // Default to an empty object to allow previews on non-existent documents
  const { name, alias, content, artists, workshops, events, galleries, sponsors, slug, meta } = data
  return (
    <>
      <div className="flex flex-col space-y-12">
        <div className="drop-shadow-glow2">
          <TypographyH1 className="flex h-full items-center justify-center">{alias ? alias : name}</TypographyH1>
        </div>
        {artists && (
          <Section>
            <SectionContent items={artists} category={slug} />
          </Section>
        )}
        {workshops && (
          <Section>
            <SectionContent items={workshops} category={slug} />
          </Section>
        )}
        {events && (
          <Section>
            <SectionContent items={events} category={slug} />
          </Section>
        )}
        {galleries && (
          <Section>
            <SectionContent items={galleries} category={slug} />
          </Section>
        )}
        {content && (
          <Section>
            <CustomPortableText value={content} />
          </Section>
        )}
      </div>
      <ScrollUp />
    </>
  )
}
