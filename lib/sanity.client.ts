import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { homePageQuery, settingsQuery } from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import { HomePage, Settings } from '@/types/typings'

interface IToken {
  token?: string
}

const sanityClient = (token?: string) => {
  return createClient({ projectId, dataset, apiVersion, useCdn, token })
}

export async function getHomePage({ token }: IToken): Promise<HomePage> {
  return await sanityClient(token).fetch(homePageQuery)
}

export async function getSettings({ token }: IToken): Promise<Settings> {
  return await sanityClient(token).fetch(settingsQuery)
}
