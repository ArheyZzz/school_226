import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Life from './pages/Life/Life';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Museum from './pages/Museum/Museum';
import Gpd from './pages/Gpd/Gpd';
import Gallery from './pages/Gallery/Gallery';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/news' element={<News />} />
					<Route path='/life' element={<Life />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />

					<Route path='/museum' element={<Museum />} />
					<Route path='/gpd' element={<Gpd />} />
					<Route path='/Gallery' element={<Gallery />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
