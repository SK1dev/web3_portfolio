// Import Components
import Navbar from './components/Navbar';
import SmallNav from './components/SmallNav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css'

function App() {
	return (
		<div className="App">
			<SmallNav />
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