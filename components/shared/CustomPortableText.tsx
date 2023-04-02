import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock as Block, Image } from 'sanity'
import SanityImage from './SanityImage'

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
        return <div className={`${className}`}>{children}</div>
      },
      h1: ({ children }) => {
        return (
          <h1 className="py-7 text-center text-3xl font-bold underline lg:text-6xl">
            {children}
          </h1>
        )
      },
      h2: ({ children }) => {
        return (
          <h2 className="py-5 text-xl font-bold lg:text-3xl">{children}</h2>
        )
      },
      h3: ({ children }) => {
        return <h3 className={'py-5 text-2xl font-bold'}>{children}</h3>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
      strong: ({ children }) => {
        return <span className={'font-bold'}>{children}</span>
      },
      em: ({ children }) => {
        return <div className="w-full text-center italic">{children}</div>
      },
    },
    list: ({ children }) => {
      return <ul className="pl-5">{children}</ul>
    },
    listItem: {
      bullet: ({ children }) => {
        return <li className="list-disc pl-2">{children}</li>
      },
    },
    types: {
      image: ({ value }: ITypesImage) => {
        return (
          <div className="my-6 space-y-2">
            <SanityImage
              image={value}
              alt={value.alt}
              width={1000}
              height={1000}
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
