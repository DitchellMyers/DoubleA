interface AudioPlayerProps {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <>
      <iframe className="hidden" allow="autoplay" src={"/silence.mp3"} id="audio" />
      <audio autoPlay loop src={src}></audio>
    </>
  )
}
