import { Metadata } from "next"
import getConfig from "next/config"
import { notFound } from "next/navigation"
import { Footer } from "components/global/Footer"
import { PreviewBanner } from "components/preview/PreviewBanner"
import { getSettings } from "lib/sanity.client"
import { getPreviewToken } from "lib/sanity.server.preview"

import { Navbar } from "@/components/global/Navbar/Navbar"
import { AudioPlayer } from "@/components/shared/AudioPlayer"
import { Container } from "@/components/ui/Container"

interface IIndexRoute {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: "Double A Festival",
  description:
    "DOUBLE A FESTIVAL - 23.07.2023 - Freier Eintritt - Das Double A Festival ist das größte nichtkommerziellste Musik-Polit-Kultur-Festival in Aalen.",
  openGraph: {
    title: "Double A Festival",
    description:
      "DOUBLE A FESTIVAL - 23.07.2023 - Freier Eintritt - Das Double A Festival ist das größte nichtkommerziellste Musik-Polit-Kultur-Festival in Aalen.",
    url: "https://www.double-a-festival.de",
    siteName: "Double A Festival",
    images: [
      {
        url: "https://www.double-a-festival.de/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon/favicon.ico",
  },
}

export default async function IndexRoute({ children }: IIndexRoute) {
  const token = getPreviewToken()
  const settings = await getSettings({ token })

  if (!settings) {
    notFound()
  }

  return (
    <>
      <AudioPlayer src={"/audio.mp3"} />
      <Container className="mb-20 space-y-20">
        {token && <PreviewBanner />}
        <Navbar items={settings.navItems} logo={settings.navImage} />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer items={settings.footerItems} socials={settings.socials} sponsors={settings.sponsors} />
      </Container>
    </>
  )
}
