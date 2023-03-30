'use client'

import { HomePage } from '@/types/typings'
import { usePreview } from 'lib/sanity.preview'
import { homePageQuery } from 'lib/sanity.queries'

export function HomePagePreview({ token }: { token: null | string }) {
  const home: HomePage = usePreview(token, homePageQuery)

  if (!home) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  // return <HomePage data={home} />
  return <div></div>
}
