import dynamic from "next/dynamic"

const BackgroundLayer = dynamic(
  () => {
    return import("./BackgroundLayer")
  },
  { ssr: false }
)

export const Background = ({ image }: { image?: string }) => {
  return (
    <div
      className="absolute left-0 top-0 -z-10 h-full w-full bg-center opacity-[0.4]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <BackgroundLayer />
    </div>
  )
}
