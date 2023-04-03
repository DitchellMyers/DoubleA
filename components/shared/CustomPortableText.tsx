import { PortableText, PortableTextComponents } from "@portabletext/react"
import type { PortableTextBlock as Block, Image } from "sanity"

import { TypographyH1 } from "../ui/Typography/TypographyH1"
import { TypographyH2 } from "../ui/Typography/TypographyH2"
import { TypographyH3 } from "../ui/Typography/TypographyH3"
import { TypographyH4 } from "../ui/Typography/TypographyH4"
import { TypographyList } from "../ui/Typography/TypographyList"
import { TypographyP } from "../ui/Typography/TypographyP"
import SanityImage from "./SanityImage"

interface ICustomPortableText {
  className?: string
  value: Block[]
}

interface ITypesImage {
  value: Image & { alt: string; caption?: string }
}

export function CustomPortableText({ className, value }: ICustomPortableText) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <TypographyP className="flex flex-col">{children}</TypographyP>
      },
      h1: ({ children }) => {
        return (
          <TypographyH1 center highlight>
            {children}
          </TypographyH1>
        )
      },
      h2: ({ children }) => {
        return <TypographyH2>{children}</TypographyH2>
      },
      h3: ({ children }) => {
        return <TypographyH3>{children}</TypographyH3>
      },
      h4: ({ children }) => {
        return <TypographyH4>{children}</TypographyH4>
      },
      h5: ({ children }) => {
        return <TypographyP>{children}</TypographyP>
      },
      h6: ({ children }) => {
        return <TypographyP>{children}</TypographyP>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a className="underline transition hover:opacity-50" href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        )
      },
      strong: ({ children }) => {
        return <span className={"font-bold"}>{children}</span>
      },
      em: ({ children }) => {
        return <span className="w-full text-center italic">{children}</span>
      },
    },
    list: ({ children }) => {
      return <TypographyList>{children}</TypographyList>
    },
    listItem: {
      bullet: ({ children }) => {
        return <li>{children}</li>
      },
    },
    types: {
      image: ({ value }: ITypesImage) => {
        return (
          <div className="my-6 space-y-2">
            <SanityImage image={value} alt={value.alt} width={1000} height={1000} />
            {value?.caption && <div className="font-sans text-sm text-gray-600">{value.caption}</div>}
          </div>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
