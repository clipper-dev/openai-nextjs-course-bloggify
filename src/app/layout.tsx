import './globals.css'
export const metadata = {
  title: 'NextJS template with TypeScript, TailwindCSS, and MongoDB',
  description: 'NextJS template with TypeScript, TailwindCSS, and MongoDB, created by @clipper.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
