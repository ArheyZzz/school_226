import { Link } from 'react-router-dom';
import './Gallery.css';

// Тимчасові заглушки для фотографій
import artImg from '../../assets/main-background.png';
import sportImg from '../../assets/main-background.png';
import techImg from '../../assets/main-background.png';
import tripImg from '../../assets/main-background.png';

export default function Gallery() {
	return (
		<div className='gallery-wrapper'>
			<div className='gallery-container'>
				{/* Кнопка повернення */}
				<Link to='/life' className='back-link'>
					<span className='arrow'>⬅</span> Назад до Життя школи
				</Link>

				{/* Заголовок */}
				<div className='gallery-header'>
					<h1 className='page-title'>
						Гуртки та <span className='highlight'>екскурсії</span>
					</h1>
					<p className='page-subtitle'>
						Розвиваємо таланти, подорожуємо та відкриваємо нові горизонти! Наші
						позакласні активності допомагають кожному учню знайти себе.
					</p>
				</div>

				{/* Сітка карток з активностями */}
				<div className='gallery-grid'>
					{/* Картка 1: Творчість */}
					<div className='activity-card'>
						<div className='activity-img-wrapper'>
							<img src={artImg} alt='Арт-студія' />
							<div className='activity-tag tag-purple'>Творчість</div>
						</div>
						<div className='activity-info'>
							<h3>Арт-студія та Дизайн</h3>
							<p>
								Малювання, ліплення, основи графічного дизайну. Вчимося бачити
								красу та створювати її власноруч у колі однодумців.
							</p>
						</div>
					</div>

					{/* Картка 2: Спорт */}
					<div className='activity-card'>
						<div className='activity-img-wrapper'>
							<img src={sportImg} alt='Спортивні секції' />
							<div className='activity-tag tag-orange'>Спорт</div>
						</div>
						<div className='activity-info'>
							<h3>Спортивні секції</h3>
							<p>
								Футбол, волейбол, баскетбол та легка атлетика. Виховуємо
								командний дух, витривалість та підтримуємо здоров'я.
							</p>
						</div>
					</div>

					{/* Картка 3: Технології */}
					<div className='activity-card'>
						<div className='activity-img-wrapper'>
							<img src={techImg} alt='IT та Робототехніка' />
							<div className='activity-tag tag-blue'>IT-Клуб</div>
						</div>
						<div className='activity-info'>
							<h3>IT та Робототехніка</h3>
							<p>
								Основи програмування, конструювання роботів та 3D-моделювання
								для майбутніх інноваторів та інженерів.
							</p>
						</div>
					</div>

					{/* Картка 4: Екскурсії */}
					<div className='activity-card'>
						<div className='activity-img-wrapper'>
							<img src={tripImg} alt='Екскурсії' />
							<div className='activity-tag tag-green'>Подорожі</div>
						</div>
						<div className='activity-info'>
							<h3>Шкільні екскурсії</h3>
							<p>
								Регулярні поїздки до музеїв, театрів, виставок та найцікавіших
								історичних місць Києва й усієї України.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
