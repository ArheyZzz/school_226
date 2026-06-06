import { Link } from 'react-router-dom';
import './Life.css';

// Можешь пока использовать те же заглушки из assets или любые картинки с Unsplash
import museumImg from '../../assets/main-background.png';
import gpdImg from '../../assets/main-background.png';
import activityImg from '../../assets/main-background.png';

export default function Life() {
	return (
		<div className='life-wrapper'>
			<div className='life-container'>
				{/* Заголовок страницы */}
				<div className='life-header'>
					<h1 className='page-title'>
						Більше, ніж просто <span className='highlight'>уроки!</span>
					</h1>
					<p className='page-subtitle'>
						Школа №226 — це активна спільнота. Ми пізнаємо світ, зберігаємо
						історію та весело проводимо час разом.
					</p>
				</div>

				{/* Сетка секций (Реальные фишки из старого сайта) */}
				<div className='life-grid'>
					{/* Блок 1: Музей */}
					<div className='life-card'>
						<div className='life-card-image'>
							<img src={museumImg} alt='Музей української діаспори' />
							<div className='life-badge badge-orange'>Унікально</div>
						</div>
						<div className='life-card-content'>
							<h2>Музей української діаспори</h2>
							<p>
								Наша гордість! Унікальний шкільний музей, де учні досліджують
								історію та культуру українців у світі. Проводимо відкриті лекції
								та екскурсії.
							</p>
							<Link to='/museum' className='btn-text'>
								Дізнатися більше ➔
							</Link>
						</div>
					</div>

					{/* Блок 2: ГПД */}
					<div className='life-card'>
						<div className='life-card-image'>
							<img src={gpdImg} alt='Група продовженого дня' />
							<div className='life-badge badge-blue'>Для молодших</div>
						</div>
						<div className='life-card-content'>
							<h2>Група продовженого дня (ГПД)</h2>
							<p>
								Безпечний та цікавий простір після уроків. Допомагаємо з
								домашнім завданням, граємо в розвивальні ігри та гуляємо на
								свіжому повітрі.
							</p>
							<Link to='/gpd' className='btn-text'>
								Розклад та запис ➔
							</Link>
						</div>
					</div>

					{/* Блок 3: Активности */}
					<div className='life-card'>
						<div className='life-card-image'>
							<img src={activityImg} alt='Гуртки та екскурсії' />
							<div className='life-badge badge-green'>Активність</div>
						</div>
						<div className='life-card-content'>
							<h2>Гуртки та екскурсії</h2>
							<p>
								Від спортивних змагань до поїздок музеями Києва. Розвиваємо
								творчість, командний дух та любов до рідного міста.
							</p>
							<Link to='/gallery' className='btn-text'>
								Галерея подій ➔
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
