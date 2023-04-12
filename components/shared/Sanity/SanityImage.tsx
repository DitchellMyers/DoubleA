import Image from "next/image"
import { ExtendedImage } from "@/types/typings"
import { urlForImage } from "lib/sanity.image"
import { Image as IImage } from "sanity"

import { cn } from "@/lib/utils"

interface ISanityImage {
  image: ExtendedImage | (IImage & { alt?: string; caption?: string })
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export default function SanityImage({
  image,
  alt,
  width = 1000,
  height = 1000,
  className,
  priority = false,
}: ISanityImage) {
  const imageUrl = image && urlForImage(image)?.size(width, height).fit("crop").url()

  return (
    <>
      {imageUrl && (
        <Image
          className={cn("object-cover object-center", className)}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
          priority={priority}
          src={imageUrl}
        />
      )}
    </>
  )
}
