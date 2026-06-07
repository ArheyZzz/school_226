import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import Burger from '../Burger/Burger';
import logoImg from '../../assets/site-logo.png';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	return (
		<header className='header-wrapper'>
			<div className='header-pill'>
				<Link to='/' className='logo-zone' onClick={closeMenu}>
					<div className='logo-avatar'>
						<img src={logoImg} alt='Логотип Школи' className='logo-img' />
					</div>
					<div className='school-title'>
						<span>ШКОЛА</span>
						<span>№226</span>
					</div>
				</Link>

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

				<div className='header-actions'>
					<Link to='/contact' className='btn-header-enroll' onClick={closeMenu}>
						ЗВ'ЯЗАТИСЯ
					</Link>
					<div className='burger-wrapper' onClick={toggleMenu}>
						<Burger isActive={isMenuOpen} />
					</div>
				</div>
			</div>

			<div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
				<div className='mobile-menu-content'>
					<nav className='mobile-nav'>
						<NavLink to='/' className='mobile-link' end onClick={closeMenu}>
							Головна
						</NavLink>
						<NavLink to='/news' className='mobile-link' onClick={closeMenu}>
							Новини
						</NavLink>
						<NavLink to='/life' className='mobile-link' onClick={closeMenu}>
							Життя школи
						</NavLink>
						<NavLink to='/about' className='mobile-link' onClick={closeMenu}>
							Про школу
						</NavLink>
					</nav>

					<Link to='/contact' className='btn-mobile-enroll' onClick={closeMenu}>
						ЗВ'ЯЗАТИСЯ З НАМИ
					</Link>
				</div>
			</div>

			<div
				className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
				onClick={closeMenu}
			/>
		</header>
	);
}
