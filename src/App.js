// Import Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import './App.css'
import BackToTop from './components/BackToTop';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Projects />
			<Social />
			<BackToTop />
			<Footer />
		</div>
	);
}

export default App;