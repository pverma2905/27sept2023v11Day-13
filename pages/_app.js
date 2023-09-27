import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import CommonLAyout from '../components/layouts/CommonLAyout';
function MyApp({ Component, pageProps }) {
  return (
    <CommonLAyout>
      <Component {...pageProps} />
    </CommonLAyout>
  )
}

export default MyApp
