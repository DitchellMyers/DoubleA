import { redirect } from "next/navigation"
import { Page } from "components/pages/page/Page"
import { PagePreview } from "components/pages/page/PagePreview"
import { PreviewSuspense } from "components/preview/PreviewSuspense"
import { PreviewWrapper } from "components/preview/PreviewWrapper"
import { getPreviewToken } from "lib/sanity.server.preview"

import { getPage, sanityClient } from "@/lib/sanity.client"
import { sluqQueryCategory } from "@/lib/sanity.queries"

export const revalidate = 360

export async function generateStaticParams() {
  const slugs: [{ _type: string; slug: string }] = await sanityClient().fetch(sluqQueryCategory)
  return slugs.map((slug) => {
    return {
      category: slug.slug,
    }
  })
}

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
