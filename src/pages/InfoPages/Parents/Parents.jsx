import { Link } from 'react-router-dom';
import './Parents.css';

export default function Parents() {
	return (
		<div className='parents-wrapper'>
			<div className='parents-container'>
				<Link to='/' className='back-link'>
					<span className='arrow'>⬅</span> На головну
				</Link>

				<div className='parents-header'>
					<h1 className='page-title'>
						Вступ до <span className='highlight'>1-го класу</span>
					</h1>
					<p className='page-subtitle'>
						Шановні батьки майбутніх першокласників! Тут ви знайдете всю
						необхідну інформацію щодо етапів зарахування та переліку документів
						на 2026 навчальний рік.
					</p>
				</div>

				{/* Картки з графіком та термінами */}
				<div className='info-cards-grid'>
					<div className='info-card shadow-blue'>
						<div className='card-icon'>📅</div>
						<h3>Терміни прийому</h3>
						<p>
							Прийом документів триватиме
							<br />
							<strong>з 1 квітня по 31 травня 2026 року</strong>.
						</p>
					</div>

					<div className='info-card shadow-orange'>
						<div className='card-icon'>⏰</div>
						<h3>Графік роботи комісії</h3>
						<ul>
							<li>
								<strong>Пн – Чт:</strong> 09:00 – 18:00
							</li>
							<li>
								<strong>Пт:</strong> 09:00 – 16:00
							</li>
						</ul>
					</div>
				</div>

				{/* Списки документів */}
				<div className='docs-section'>
					<div className='docs-block main-docs'>
						<h2>Обов'язкові документи</h2>
						<ul className='checklist'>
							<li>
								<span className='check-icon'>✅</span>
								<span>
									<strong>Заява</strong> встановленого зразка (заповнюється у
									закладі освіти).
								</span>
							</li>
							<li>
								<span className='check-icon'>✅</span>
								<span>
									<strong>Свідоцтво про народження дитини</strong> (оригінал для
									звірки + копія).
								</span>
							</li>
							<li>
								<span className='check-icon'>✅</span>
								<span>
									<strong>Паспорт одного з батьків</strong> або інший документ,
									що посвідчує особу (оригінал + копія).
								</span>
							</li>
							<li>
								<span className='check-icon'>✅</span>
								<span>
									<strong>Медична довідка № 086-1/о</strong> (про результати
									обов'язкового медичного огляду).
								</span>
							</li>
							<li>
								<span className='check-icon'>✅</span>
								<span>
									<strong>Карта профілактичних щеплень</strong> за формою №
									063/о.
								</span>
							</li>
						</ul>
					</div>

					<div className='docs-block additional-docs'>
						<h2>Додаткові документи (за потреби)</h2>
						<ul className='checklist'>
							<li>
								<span className='check-icon'>📄</span>
								<span>
									Документ, що підтверджує <strong>місце проживання</strong>{' '}
									(для першочергового зарахування на території обслуговування).
								</span>
							</li>
							<li>
								<span className='check-icon'>📄</span>
								<span>
									Довідка або документ, що підтверджує{' '}
									<strong>право на пільги</strong>.
								</span>
							</li>
							<li>
								<span className='check-icon'>📄</span>
								<span>
									Висновок ІРЦ про комплексну оцінку дитини (для зарахування до
									інклюзивного класу).
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Баннер онлайн подачі */}
				<div className='online-banner'>
					<div className='banner-content'>
						<h2>Економте свій час! 💻</h2>
						<p>
							Ви можете подати заяву на вступ дитини до 1-го класу повністю в
							електронному вигляді через офіційний портал.
						</p>
					</div>
					<a
						href='https://school.kyivcity.gov.ua/'
						target='_blank'
						rel='noopener noreferrer'
						className='btn-3d btn-primary banner-btn'
					>
						Подати заяву ОНЛАЙН
					</a>
				</div>
			</div>
		</div>
	);
}
