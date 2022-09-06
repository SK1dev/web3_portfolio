// Import Components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import './App.css'

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Skills />
			<Projects />
			<Social />
			<Footer />
		</div>
	);
}

export default App;