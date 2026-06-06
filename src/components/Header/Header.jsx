import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import Burger from '../Burger/Burger';
import logoImg from '../../assets/site-logo.png'; // Наш 3D котик

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className='header-wrapper'>
			{/* Сама синя плаваюча капсула */}
			<div className='header-pill'>
				{/* Логотип та Назва (у два рядки) */}
				<Link to='/' className='logo-zone'>
					<div className='logo-avatar'>
						<img src={logoImg} alt='Логотип Школи' className='logo-img' />
					</div>
					<div className='school-title'>
						<span>ШКОЛА</span>
						<span>№226</span>
					</div>
				</Link>

				{/* Оновлена навігація */}
				<nav className='nav-menu'>
					<NavLink to='/' className='nav-link' end>
						Головна
					</NavLink>
					<NavLink to='/news' className='nav-link'>
						Новини
					</NavLink>
					<NavLink to='/life' className='nav-link'>
						Життя школи
					</NavLink>
					<NavLink to='/about' className='nav-link'>
						Про школу
					</NavLink>
				</nav>

				{/* Права частина: Кнопка дії та Бургер */}
				<div className='header-actions'>
					<Link to='/contact' className='btn-header-enroll'>
						ЗВ'ЯЗАТИСЯ
					</Link>
					<div className='burger-wrapper' onClick={toggleMenu}>
						<Burger isOpen={isMenuOpen} />
					</div>
				</div>
			</div>
		</header>
	);
}
