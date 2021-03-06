import '../styles/globals.css'
import Layout from '../components/layout'
import { WindowSizeProvider } from '../utils/context'

function MyApp({ Component, pageProps }) {
  return (
    <WindowSizeProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </WindowSizeProvider>
  )
}

export default MyApp
