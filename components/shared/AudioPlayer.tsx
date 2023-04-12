interface AudioPlayerProps {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <>
      <iframe
        className="hidden"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&autohide=1&controls=0&mute=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=dQw4w9WgXcQ"
        title="YouTube video player"
        allow="autoplay;"
      ></iframe>
    </>
  )
}
