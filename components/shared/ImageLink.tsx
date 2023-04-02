import { Url } from "url"
import Link, { LinkProps } from "next/link"
import { ExtendedImage } from "@/types/typings"

import { cn } from "@/lib/utils"
import SanityImage from "./SanityImage"

interface IImageLink {
  image: ExtendedImage
  href: string
  className?: string
}

const ImageLink = ({ image, href, className }: IImageLink) => {
  return (
    <Link href={href == "/" ? "/" : `/${href}`} className={cn("relative", className)}>
      <SanityImage image={image} alt={image.beschreibung} />
    </Link>
  )
}

export default ImageLink
