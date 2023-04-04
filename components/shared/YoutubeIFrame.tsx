"use client"

import { useState } from "react"

import { TypographyP } from "../ui/Typography/TypographyP"

export const YoutubeIFrame = ({ link }: { link: string }) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <>
      {show ? (
        <div className="relative mx-auto h-auto w-full">
          <iframe
            className="aspect-video w-full"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-start space-y-2 bg-red-700/50 p-10">
          <TypographyP className="text-center">
            Mit dem Laden des Videos akzeptieren Sie die Datenschutzerklärung von Youtube
          </TypographyP>
          <a href="https://policies.google.com/privacy" className="text-gray-500 hover:underline">
            Mehr erfahren
          </a>
          <button
            className={
              "border border-gray-950 bg-gray-300 px-10 py-4 text-gray-950 hover:border-gray-300 hover:bg-slate-950 hover:text-gray-300"
            }
            onClick={() => setShow(true)}
          >
            Video laden
          </button>
        </div>
      )}
    </>
  )
}
