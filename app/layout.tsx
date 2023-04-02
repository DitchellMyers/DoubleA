import "@/styles/globals.css"
import { Aldrich, Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
})

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
    <html lang="de" className={`bg-slate-900 text-gray-300 antialiased ${aldrich.className}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
