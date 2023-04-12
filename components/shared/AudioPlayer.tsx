interface AudioPlayerProps {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <>
      <iframe className="hidden" allow="autoplay" src={src} />
    </>
  )
}
