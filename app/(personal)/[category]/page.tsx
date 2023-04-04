import { redirect } from "next/navigation"
import { Page } from "components/pages/page/Page"
import { PagePreview } from "components/pages/page/PagePreview"
import { PreviewSuspense } from "components/preview/PreviewSuspense"
import { PreviewWrapper } from "components/preview/PreviewWrapper"
import { getPreviewToken } from "lib/sanity.server.preview"

import { getPage } from "@/lib/sanity.client"

export default async function PageSlugRoute({ params }: { params: { category: string } }) {
  const { category } = params
  const token = getPreviewToken()
  const data = await getPage({ token: token, category: category })

  if (!data && !token) {
    redirect("/")
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <Page data={data} />
              <div></div>
            </PreviewWrapper>
          }
        >
          <PagePreview token={token} slug={params.category} />
        </PreviewSuspense>
      ) : (
        <Page data={data} />
      )}
    </>
  )
}
