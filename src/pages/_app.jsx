// pages/_app.tsx ou _app.js
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
