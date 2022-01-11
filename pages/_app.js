import Header from './header';
import Footer from './footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
