import "server-only"
import { HomePage, Settings, SubPage } from "@/types/typings"
import { homePageQuery, pageQuery, settingsQuery } from "lib/sanity.queries"
import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "@/lib/sanity.api"

interface IToken {
  token?: string
  slug?: string
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

export async function getPage({ token, slug }: IToken): Promise<SubPage> {
  return await sanityClient(token).fetch(pageQuery, { slug })
}
