"use client"

import { useEffect, useRef } from "react"
import getConfig from "next/config"

interface AudioPlayerProps {
  src: string
}

const config = getConfig()

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.autoplay = true
    }
  }, [])

  return <audio ref={audioRef} src={src} className="hidden" />
}
