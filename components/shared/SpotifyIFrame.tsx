"use client"

import { useState } from "react"

import { TypographyP } from "../ui/Typography/TypographyP"

export const SpotifyIFrame = ({ link }: { link: string }) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <>
      {show ? (
        <div className="relative h-auto w-full">
          <iframe className="aspect-video w-full" src={link} allow="encrypted-media" loading="lazy"></iframe>
        </div>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-start space-y-2 bg-red-700/50 p-10">
          <TypographyP className="text-center">
            Klicken Sie auf den unteren Button, um den Inhalt von open.spotify.com zu laden.
          </TypographyP>
          <button
            className={
              "border border-gray-950 bg-gray-300 px-10 py-4 text-gray-950 hover:border-gray-300 hover:bg-slate-950 hover:text-gray-300"
            }
            onClick={() => setShow(true)}
          >
            Inhalt laden
          </button>
        </div>
      )}
    </>
  )
}
