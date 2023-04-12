import "server-only"
import { Artist, Event, Gallery, HomePage, Settings, Sponsor, SubPage, Workshop } from "@/types/typings"
import { contentQuery, homePageQuery, pageQuery, settingsQuery } from "lib/sanity.queries"
import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "@/lib/sanity.api"

interface IToken {
  token?: string
  category?: string
  id?: string
}

export const sanityClient = (token?: string) => {
  return createClient({ projectId, dataset, apiVersion, useCdn, token })
}

export async function getHomePage({ token }: IToken): Promise<HomePage> {
  return await sanityClient(token).fetch(homePageQuery)
}

export async function getSettings({ token }: IToken): Promise<Settings> {
  return await sanityClient(token).fetch(settingsQuery)
}

export async function getPage({ token, category }: IToken): Promise<SubPage> {
  return await sanityClient(token).fetch(pageQuery, { category })
}

export async function getContent({
  token,
  category,
  id,
}: IToken): Promise<Artist | Workshop | Event | Sponsor | Gallery> {
  return await sanityClient(token).fetch(contentQuery, { category, id })
}
