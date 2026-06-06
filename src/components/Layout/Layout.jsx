import './layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

import skyBg from '../../assets/main-background.png';

export default function Layout() {
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
