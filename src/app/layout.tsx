import './globals.css'
import Provider from '../components/provider';
import Header from '@/components/layout/header';

export const metadata = {
  title: 'Shopiful',
  description: 'Ecommerce app created by Bastien',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <Provider>
      <html lang="en">
        <body>
            <Header />
            {children}
        </body>
      </html>
    </Provider>
  )
}
