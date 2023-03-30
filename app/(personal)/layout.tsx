import 'styles/index.css'

import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { getSettings } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'

interface IIndexRoute {
  children: React.ReactNode
}

export default async function IndexRoute({ children }: IIndexRoute) {
  const token = getPreviewToken()
  const settings = await getSettings({ token })

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-gray-300">
      {token && <PreviewBanner />}
      <Navbar items={settings.navItems} logo={settings.navImage} />
      {/* <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div> */}
      {/* <Footer footer={settings.footer} /> */}
    </div>
  )
}
