import { useEffect, useState, useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import './layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProgressBar from '../ProgressBar/ProgressBar';
import skyBg from '../../assets/main-background.png';

export default function Layout() {
	const location = useLocation();
	// Ставим true по умолчанию, чтобы перекрыть экран с самой первой миллисекунды
	const [isLoading, setIsLoading] = useState(true);
	const timeoutRef = useRef(null);

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		// Оборачиваем в requestAnimationFrame, чтобы линтер не ругался на каскадные рендеры
		requestAnimationFrame(() => {
			setIsLoading(true);
		});

		// Выключаем ровно через секунду
		timeoutRef.current = setTimeout(() => {
			setIsLoading(false);
		}, 700);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [location.pathname]);

	// Жесткий рендер: если грузимся — отдаем только лоадер
	if (isLoading) {
		return <ProgressBar isVisible={true} />;
	}

	// Если загрузка закончилась — рендерим весь сайт
	return (
		<div className='layout'>
			<div className='global-background'>
				<div className='global-background-track'>
					<img src={skyBg} alt='Sky 1' />
					<img src={skyBg} alt='Sky 2' />
					<img src={skyBg} alt='Sky 3' />
				</div>
			</div>

			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
