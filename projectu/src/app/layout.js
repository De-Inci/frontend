export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
} 

import 'bootstrap/dist/css/bootstrap.min.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}