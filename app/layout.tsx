import 'tailwindcss/tailwind.css'

interface IRootLayout {
  children: React.ReactNode
}

export default async function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="de">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
