import type { Metadata } from 'next';

import './globals.css';

import { themeOptions } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export const metadata: Metadata = {
  title: 'Corre Brasil | Staffs',
  description: 'Instruções para Staffs que irão trabalhar nos eventos!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
