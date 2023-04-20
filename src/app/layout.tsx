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
          {/* @ts-expect-error Async Server Component */}
            <Header />
            {children}
        </body>
      </html>
    </Provider>
  )
}
