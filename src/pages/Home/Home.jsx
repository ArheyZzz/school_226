import { Link } from 'react-router-dom';
import './Home.css';

// Поки залишаємо старі змінні картинок, щоб не зламати збірку.
// Потім просто заміниш файли в папці assets!
import heroCat from '../../assets/hero-cat-logo.png';
import cardNewsImg from '../../assets/card-students.png'; // Тимчасова іконка для новин
import cardLifeImg from '../../assets/card-parents.png'; // Тимчасова іконка для життя школи
import cardAboutImg from '../../assets/card-teachers.png'; // Тимчасова іконка для "Про школу"

export default function Home() {
	return (
		<div className='home-wrapper'>
			<div className='home-container'>
				{/* --- ВЕРХНІЙ БЛОК: ТЕКСТ ТА МАСКОТ --- */}
				<section className='hero-section'>
					{/* Ліва частина: Текст */}
					<div className='hero-content'>
						<h1 className='hero-title'>
							Місце, де навчання стає{' '}
							<span className='highlight'>пригодою!</span>
						</h1>
						<p className='hero-subtitle'>
							Школа №226 — це сучасний простір для допитливих розумів. Ми
							розкриваємо таланти кожного учня та надихаємо на нові звершення.
						</p>
					</div>

					{/* Права частина: 3D котик */}
					<div className='hero-visual'>
						<img
							src={heroCat}
							alt='Вчений кіт маскот школи'
							className='hero-mascot'
						/>
					</div>
				</section>

				{/* --- НИЖНІЙ БЛОК: ОНОВЛЕНІ КАРТКИ --- */}
				<section className='cards-section'>
					{/* Картка 1: Новини */}
					<div className='portal-card card-blue'>
						<div className='card-avatar-wrapper shadow-blue'>
							<img
								src={cardNewsImg}
								alt='Новини школи'
								className='card-avatar-img'
							/>
						</div>
						<h2 className='card-title text-blue'>НОВИНИ</h2>
						<h3 className='card-subtitle'>Шкільний вісник</h3>
						<p className='card-text'>
							Останні події, анонси, перемоги наших учнів та важливі
							повідомлення.
						</p>
						<Link to='/news' className='btn-card btn-card-blue'>
							Читати
						</Link>
					</div>

					{/* Картка 2: Життя школи */}
					<div className='portal-card card-orange'>
						<div className='card-avatar-wrapper shadow-orange'>
							<img
								src={cardLifeImg}
								alt='Життя школи'
								className='card-avatar-img'
							/>
						</div>
						<h2 className='card-title text-orange'>ЖИТТЯ ШКОЛИ</h2>
						<h3 className='card-subtitle'>Позакласні активності</h3>
						<p className='card-text'>
							Гуртки, спортивні секції, екскурсії та творчі проєкти наших учнів.
						</p>
						<Link to='/life' className='btn-card btn-card-orange'>
							Дізнатися більше
						</Link>
					</div>

					{/* Картка 3: Про школу */}
					<div className='portal-card card-green'>
						<div className='card-avatar-wrapper shadow-green'>
							<img
								src={cardAboutImg}
								alt='Про школу'
								className='card-avatar-img'
							/>
						</div>
						<h2 className='card-title text-green'>ПРО ШКОЛУ</h2>
						<h3 className='card-subtitle'>Наша місія та історія</h3>
						<p className='card-text'>
							Дізнайтеся більше про наших вчителів, цінності та підходи до
							навчання.
						</p>
						<Link to='/about' className='btn-card btn-card-green'>
							Детальніше
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}
