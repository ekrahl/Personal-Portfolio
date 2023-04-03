import { Navbar, Footer } from './components';
import { Home, About, Portfolio, Contact } from './pages';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
