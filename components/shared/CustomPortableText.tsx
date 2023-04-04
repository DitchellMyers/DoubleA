import Link from "next/link"
import { PortableText, PortableTextComponents } from "@portabletext/react"
import type { PortableTextBlock as Block, Image } from "sanity"

import { cn } from "@/lib/utils"
import { TypographyH1 } from "../ui/Typography/TypographyH1"
import { TypographyH2 } from "../ui/Typography/TypographyH2"
import { TypographyH3 } from "../ui/Typography/TypographyH3"
import { TypographyH4 } from "../ui/Typography/TypographyH4"
import { TypographyList } from "../ui/Typography/TypographyList"
import { TypographyP } from "../ui/Typography/TypographyP"
import SanityImage from "./Sanity/SanityImage"

interface ICustomPortableText {
  type?: {
    h1?: string
    h2?: string
    h3?: string
    h4?: string
    normal?: string
    link?: string
    strong?: string
    em?: string
    list?: string
    bullet?: string
    image?: string
  }
  value: Block[]
}

interface ITypesImage {
  value: Image & { alt: string; caption?: string }
}

export function CustomPortableText({ type, value }: ICustomPortableText) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <TypographyP className={cn(type?.normal && `${type.normal}`)}>{children}</TypographyP>
      },
      h1: ({ children }) => {
        return (
          <TypographyH1 center highlight className={cn("hyphens-auto text-3xl", type?.h1 && `${type.h1}`)} lang="de">
            {children}
          </TypographyH1>
        )
      },
      h2: ({ children }) => {
        return <TypographyH2 className={cn(type?.h2 && `${type.h2}`)}>{children}</TypographyH2>
      },
      h3: ({ children }) => {
        return <TypographyH3 className={cn(type?.h3 && `${type.h3}`)}>{children}</TypographyH3>
      },
      h4: ({ children }) => {
        return <TypographyH4 className={cn(type?.h4 && `${type.h4}`)}>{children}</TypographyH4>
      },
      h5: ({ children }) => {
        return <TypographyP className={cn(type?.normal && `${type.normal}`)}>{children}</TypographyP>
      },
      h6: ({ children }) => {
        return <TypographyP className={cn(type?.normal && `${type.normal}`)}>{children}</TypographyP>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <Link
            className={cn("underline transition hover:opacity-50", type?.link && `${type.link}`)}
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </Link>
        )
      },
      strong: ({ children }) => {
        return <span className={cn("font-bold", type?.strong && `${type.strong}`)}>{children}</span>
      },
      em: ({ children }) => {
        return (
          <span className={cn("inline-block w-full text-center italic", type?.em && `${type.em}`)}>{children}</span>
        )
      },
    },
    list: ({ children }) => {
      return <TypographyList className={cn(type?.normal && `${type.normal}`)}>{children}</TypographyList>
    },
    listItem: {
      bullet: ({ children }) => {
        return <li className={cn(type?.normal && `${type.normal}`)}>{children}</li>
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
