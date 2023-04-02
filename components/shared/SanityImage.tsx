import { cn } from '@/lib/utils'
import { ExtendedImage } from '@/types/typings'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import { Image as IImage } from 'sanity'

interface ISanityImage {
  image: ExtendedImage | (IImage & { alt?: string; caption?: string })
  alt: string
  width?: number
  height?: number
}

export default function SanityImage({
  image,
  alt,
  width = 1000,
  height = 1000,
}: ISanityImage) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <>
      {imageUrl && (
        <Image
          className="object-cover object-center"
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={imageUrl}
        />
      )}
    </>
  )
}
