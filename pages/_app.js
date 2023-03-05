import '@/styles/globals.css'
import MenuBar from '../components/MenuBar'

export default function App({ Component, pageProps }) {
  return (
    <>
   <MenuBar/>
    <Component {...pageProps} />
  </>
  )
}
