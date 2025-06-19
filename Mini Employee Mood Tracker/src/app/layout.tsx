import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './providers';

export const metadata: Metadata = {
  title: 'Employee Mood Tracker',
  description: 'Track and analyze employee moods',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}