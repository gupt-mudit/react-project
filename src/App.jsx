import Navbar from '~/components/Navbar';
import Hero from '~/components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import Blogs from './components/Blogs';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';
import ScrollToAnchor from './utils/ScrollToAnchor';

function App() {
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <Blogs />
      <LetsConnect />
      <Footer />
    </>
  );
}

export default App;
