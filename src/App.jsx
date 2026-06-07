import './App.css';
import { useState, useEffect } from 'react';
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
import NewsArticle from './pages/NewsArticle/NewsArticle';
import AntiBullying from './pages/InfoPages/AntiBullying/AntiBullying';
import Parents from './pages/InfoPages/Parents/Parents';
import PublicInfo from './pages/InfoPages/PublicInfo/PublicInfo';
import Schedule from './pages/InfoPages/Schedule/Schedule';
import Preloader from './components/Preloader/Preloader';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Имитация загрузки ресурсов (например, шрифтов или изображений)
		const timer = setTimeout(() => setLoading(false), 3000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Preloader />;
	}
	return (
		<BrowserRouter basename='/school_226'>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/news' element={<News />} />
					<Route path='/news/:id' element={<NewsArticle />} />
					<Route path='/life' element={<Life />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />

					<Route path='/museum' element={<Museum />} />
					<Route path='/gpd' element={<Gpd />} />
					<Route path='/Gallery' element={<Gallery />} />

					<Route path='/anti-bullying' element={<AntiBullying />} />
					<Route path='/parents' element={<Parents />} />
					<Route path='/public-info' element={<PublicInfo />} />
					<Route path='/schedule' element={<Schedule />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
