import Link from "next/link"
import { Artist } from "@/types/typings"

import { cn } from "@/lib/utils"
import { CustomPortableText } from "@/components/shared/CustomPortableText"
import SanityImage from "@/components/shared/Sanity/SanityImage"
import { SpotifyIFrame } from "@/components/shared/SpotifyIFrame"
import { YoutubeIFrame } from "@/components/shared/YoutubeIFrame"
import { getIcon } from "@/components/shared/getIcon"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"

export const ArtistPage = ({ artist }: { artist: Artist }) => {
  const { _type, name, image, socials, content, iframeSpotify, iframeYoutube } = artist
  const square = ["event", "gallery"].some((x) => x === _type) ? true : false
  return (
    <div className="space-y-10">
      <div className="flex w-full flex-col items-center justify-center space-y-5">
        <div className={cn("relative w-3/4 lg:w-1/3", square ? "aspect-square" : "aspect-video")}>
          <SanityImage image={image} alt={name} width={square ? 1000 : 960} height={square ? 1000 : 540} />
        </div>
        <TypographyH1 highlight>{name}</TypographyH1>
        {socials && (
          <div className="flex flex-row gap-5 pt-2">
            {Object.entries(socials).map(
              ([key, value], index) =>
                value && (
                  <Link className="uppercase" href={value} target="_blank" key={index}>
                    {getIcon(key)}
                  </Link>
                )
            )}
          </div>
        )}
      </div>
      {content && (
        <div className="font-sans">
          <CustomPortableText value={content}></CustomPortableText>
        </div>
      )}
      {(socials.youtube || socials.spotify) && (
        <div className="grid grid-cols-1 gap-10 font-sans md:grid-cols-2">
          {iframeYoutube && <YoutubeIFrame link={iframeYoutube} />}
          {iframeSpotify && <SpotifyIFrame link={iframeSpotify} />}
        </div>
      )}
    </div>
  )
}
