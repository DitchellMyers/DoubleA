import { notFound } from "next/navigation"
import { Footer } from "components/global/Footer"
import { PreviewBanner } from "components/preview/PreviewBanner"
import { getSettings } from "lib/sanity.client"
import { getPreviewToken } from "lib/sanity.server.preview"

import { Navbar } from "@/components/global/Navbar/Navbar"

interface IIndexRoute {
  children: React.ReactNode
}

export default async function IndexRoute({ children }: IIndexRoute) {
  const token = getPreviewToken()
  const settings = await getSettings({ token })

  if (!settings) {
    notFound()
  }

  return (
    <div className="container mx-auto mb-20 space-y-20 px-5 md:px-0">
      {token && <PreviewBanner />}
      <Navbar items={settings.navItems} logo={settings.navImage} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer items={settings.footerItems} socials={settings.socials} sponsors={settings.sponsors} />
    </div>
  )
}
