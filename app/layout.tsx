import "@/styles/globals.css"
import { Aldrich, Roboto } from "next/font/google"

const aldrich = Aldrich({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
})

interface IRootLayout {
  children: React.ReactNode
}

export default async function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="de" className={`bg-gray-950 text-gray-300 antialiased ${aldrich.className}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
