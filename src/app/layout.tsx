import { FirebaseProvider } from '@/shared/context/FirebaseContext'
import type { Metadata } from 'next'

import './globals.css'

import { UserProvider } from '@/shared/context/UserContext'
import { themeOptions } from '@/theme/theme'
import { ThemeProvider } from '@mui/material'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={themeOptions}>
          <FirebaseProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
