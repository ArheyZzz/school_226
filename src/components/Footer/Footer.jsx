import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer-wrapper'>
			<div className='footer-container'>
				<div className='footer-grid'>
					{/* Колонка 1: Про школу */}
					<div className='footer-col'>
						<Link to='/' className='footer-logo'>
							Школа <span className='highlight'>№226</span>
						</Link>
						<p className='footer-desc'>
							Створюємо середовище, де кожна дитина може розкрити свій
							потенціал, знайти справжніх друзів та навчитися мислити вільно.
						</p>
					</div>

					{/* Колонка 2: Навігація та Інформація */}
					<div className='footer-col'>
						<h3>Навігація</h3>
						<ul className='footer-links'>
							<li>
								<Link to='/about'>Про школу</Link>
							</li>
							<li>
								<Link to='/life'>Життя школи</Link>
							</li>
							<li>
								<Link to='/news'>Новини</Link>
							</li>
							<li>
								<Link to='/contact'>Контакти</Link>
							</li>
						</ul>

						<h3 style={{ marginTop: '25px' }}>Інформація</h3>
						<ul className='footer-links'>
							<li>
								<Link to='/parents'>Батькам (Вступ)</Link>
							</li>
							<li>
								<Link to='/schedule'>Розклад занять</Link>
							</li>
							<li>
								<Link to='/public-info'>Публічна інформація</Link>
							</li>
							<li>
								<Link to='/anti-bullying'>Протидія булінгу</Link>
							</li>
						</ul>
					</div>

					{/* Колонка 3: Освітні портали та сервіси */}
					<div className='footer-col'>
						<h3>Освітні сервіси</h3>
						<ul className='footer-links'>
							<li>
								<a
									href='https://mon.gov.ua/'
									target='_blank'
									rel='noopener noreferrer'
								>
									МОН України
								</a>
							</li>
							<li>
								<a
									href='https://testportal.gov.ua/'
									target='_blank'
									rel='noopener noreferrer'
								>
									УЦОЯО (ЗНО / НМТ)
								</a>
							</li>
							<li>
								<a
									href='https://don.kyivcity.gov.ua/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Департамент освіти Києва
								</a>
							</li>
							<li>
								<a
									href='https://lms.e-school.net.ua/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Всеукраїнська школа онлайн
								</a>
							</li>
							<li>
								<a
									href='https://eschool-ua.com/#/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Електронний журнал
								</a>
							</li>
							<li>
								<a
									href='https://scard.kyivcity.gov.ua/admin/login'
									target='_blank'
									rel='noopener noreferrer'
								>
									Електронний учнівський
								</a>
							</li>
						</ul>
					</div>

					{/* Колонка 4: Контакти та Соцмережі */}
					<div className='footer-col'>
						<h3>Контакти</h3>
						<ul className='footer-contact-info'>
							<li>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									height='18'
									width='18'
									style={{ minWidth: '18px' }}
								>
									<path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
								</svg>
								вул. Прирічна, 19Е, Київ
							</li>
							<li>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									height='18'
									width='18'
									style={{ minWidth: '18px' }}
								>
									<path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
								</svg>
								+38 (044) 412-34-56
							</li>
							<li>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									height='18'
									width='18'
									style={{ minWidth: '18px' }}
								>
									<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
								</svg>
								school226@kyiv.edu.ua
							</li>
						</ul>
						<div className='footer-socials'>
							<a
								href='https://www.facebook.com/groups/2971131236499506/?locale=uk_UA'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Facebook'
							>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									height='24'
									width='24'
								>
									<path d='M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.45-9.9c0-5.53-4.5-10.02-10-10.02z' />
								</svg>
							</a>
							<a
								href='https://www.instagram.com/selfgoverment_account/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'
							>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									height='24'
									width='24'
								>
									<path d='M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.92 2.31 7.15 2.16c1.27-.06 1.64-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-4.27.2-6.78 2.71-6.98 6.98C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.27 2.71 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.27-.2 6.78-2.71 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.2-4.27-2.71-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' />
								</svg>
							</a>
							<a
								href='https://www.youtube.com/@%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0226/videos'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='YouTube'
							>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									height='24'
									width='24'
								>
									<path d='M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className='footer-bottom'>
					<p>
						&copy; {currentYear} Спеціалізована школа №226. Всі права захищені.
					</p>
					<p className='developer-mark'>Розроблено з ❤️ Gemini & Arhey.M</p>
				</div>
			</div>
		</footer>
	);
}
