import { AuthContextProvider } from '../../context/AuthProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}