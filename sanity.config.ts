/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision"
import { previewDocumentNode } from "plugins/previewPane"
import { productionUrl } from "plugins/productionUrl"
import { pageStructure, singletonPlugin } from "plugins/settings"
import { defineConfig } from "sanity"
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash"
import { deskTool } from "sanity/desk"
import duration from "schemas/objects/duration"
import milestone from "schemas/objects/milestone"
import { home } from "schemas/singletons/home"
import { settings } from "schemas/singletons/settings"

import { apiVersion, dataset, previewSecretId, projectId } from "@/lib/sanity.api"
import { artist } from "./schemas/documents/artist"
import { category } from "./schemas/documents/category"
import { event } from "./schemas/documents/event"
import { gallery } from "./schemas/documents/gallery"
import { page } from "./schemas/documents/page"
import { sponsor } from "./schemas/documents/sponsor"
import { workshop } from "./schemas/documents/workshop"
import { theme } from "./theme"

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Next.js Personal Website with Sanity.io"

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  category.name,
  artist.name,
  workshop.name,
  event.name,
  sponsor.name,
  gallery.name,
]

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      duration,
      page,
      category,
      artist,
      workshop,
      event,
      sponsor,
      gallery,
      // Objects
      milestone,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  theme: theme,
})
