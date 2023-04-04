import { notFound } from "next/navigation"
import { PreviewSuspense } from "components/preview/PreviewSuspense"
import { PreviewWrapper } from "components/preview/PreviewWrapper"
import { getHomePage } from "lib/sanity.client"
import { getPreviewToken } from "lib/sanity.server.preview"

import { Home } from "@/components/pages/home/Home"
import { HomePagePreview } from "@/components/pages/home/HomePreview"

export const revalidate = 60

export default async function IndexRoute() {
  const token = getPreviewToken()
  const data = await getHomePage({ token })

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <Home data={data} />
            </PreviewWrapper>
          }
        >
          <HomePagePreview token={token} />
        </PreviewSuspense>
      ) : (
        <Home data={data} />
      )}
    </>
  )
}
