interface AudioPlayerProps {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <audio className="hidden" loop autoPlay>
      <source src={src} type="audio/mp3" />
    </audio>
  )
}
