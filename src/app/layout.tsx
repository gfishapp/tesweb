import './globals.css'
import NavbarWrapper from './components/NavbarWrapper';
import LenisProvider from './components/LenisProvider' 
export const metadata = {
  title: 'Fortitude Genius Indonesia',
  description: 'Animated Portfolio',
  icons: {
    icon: '/images/favicon.jpg', 
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        <LenisProvider>

          {children}
        </LenisProvider>
      </body>
    </html>
  )
}