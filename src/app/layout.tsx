import './globals.css'

export const metadata = {
  title: 'Practice',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
