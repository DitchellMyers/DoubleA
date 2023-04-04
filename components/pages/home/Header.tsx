import dynamic from "next/dynamic"
import { format } from "date-fns"
import { de } from "date-fns/locale"

import { Countdown } from "@/components/shared/Countdown"
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1"
import { TypographyH2 } from "@/components/ui/Typography/TypographyH2"
import { TypographyP } from "@/components/ui/Typography/TypographyP"

interface HeaderProps {
  title: string
  subtitle: string
  eventDate: string
}

export const Header = ({ title, subtitle, eventDate }: HeaderProps) => {
  const Titles = () => {
    return (
      <div className="text-center drop-shadow-glow2">
        <TypographyP className="text-3xl font-bold">
          {format(new Date(eventDate), "dd MMMM yyyy", { locale: de })}
        </TypographyP>
        <TypographyH1 className="text-5xl font-bold md:text-6xl lg:text-8xl">{title}</TypographyH1>
        <hr className="mx-auto w-3/5 border-t border-gray-300" />
        <TypographyH2 className="m-0 mt-2 text-4xl md:text-5xl lg:text-7xl">{subtitle}</TypographyH2>
      </div>
    )
  }

  return (
    <>
      <Titles />
      <Countdown date={eventDate} title="Festival Countdown"></Countdown>
    </>
  )
}
