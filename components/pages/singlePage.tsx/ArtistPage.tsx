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
  const { name, image, socials, content, iframeSpotify, iframeYoutube } = artist
  return (
    <div className="flex flex-col lg:space-y-10">
      <div className={cn("relative mx-auto aspect-video w-full max-w-[1200px]")}>
        <SanityImage image={image} alt={name} width={1200} height={675} />
      </div>
      <div className="mt-3 flex w-full flex-col items-center justify-center space-y-3 px-5 md:mt-5 md:space-y-5 lg:mt-10 lg:space-y-10">
        <TypographyH1 highlight>{name}</TypographyH1>
        {socials && (
          <div className="flex flex-row gap-5 lg:mt-10">
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
        {content && (
          <div className="font-sans">
            <CustomPortableText value={content}></CustomPortableText>
          </div>
        )}
        {(socials.youtube || socials.spotify) && (
          <div className="grid w-11/12 grid-cols-1 gap-10 font-sans md:grid-cols-2">
            {iframeYoutube && <YoutubeIFrame link={iframeYoutube} />}
            {iframeSpotify && <SpotifyIFrame link={iframeSpotify} />}
          </div>
        )}
      </div>
    </div>
  )
}
