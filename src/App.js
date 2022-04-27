import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
