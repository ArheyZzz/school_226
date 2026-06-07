import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

// Тимчасові дані, поки ти не підключиш свій MockAPI
const fallbackNews = [
	{
		id: '1',
		title: 'День відкритих дверей 2026',
		summary:
			'Запрошуємо майбутніх першокласників та їхніх батьків познайомитися зі школою.',
		imageUrl:
			'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
		date: '15 Травня, 2026',
	},
	{
		id: '2',
		title: 'Перемога у міській олімпіаді з математики',
		summary:
			'Учні 10-Б класу посіли перше місце у командному заліку серед шкіл Оболонського району.',
		imageUrl:
			'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
		date: '10 Травня, 2026',
	},
	{
		id: '3',
		title: 'Нове обладнання для кабінету інформатики',
		summary:
			"Завдяки грантовій програмі школа отримала 15 нових комп'ютерів для вивчення програмування.",
		imageUrl:
			'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
		date: '02 Травня, 2026',
	},
];

export default function News() {
	// ТУТ БУДЕ ТВОЄ ПОСИЛАННЯ НА MOCKAPI (наприклад: 'https://65...mockapi.io/news')
	const API_URL = '';

	// Одразу перевіряємо: якщо API немає, кладемо заглушки, інакше - пустий масив
	const [news, setNews] = useState(API_URL ? [] : fallbackNews);
	// Якщо API немає, то й завантаження не потрібне
	const [loading, setLoading] = useState(API_URL ? true : false);

	useEffect(() => {
		// Якщо API немає, effect просто завершує роботу, не викликаючи зайвих рендерів
		if (!API_URL) return;

		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				// Якщо API повертає пустий масив, показуємо заглушки для краси
				setNews(data.length > 0 ? data : fallbackNews);
				setLoading(false);
			})
			.catch(err => {
				console.error('Помилка завантаження новин:', err);
				setNews(fallbackNews);
				setLoading(false);
			});
	}, [API_URL]);

	return (
		<div className='news-wrapper'>
			<div className='news-container'>
				<div className='news-header'>
					<h1 className='page-title'>
						Останні <span className='highlight'>новини</span>
					</h1>
					<p className='page-subtitle'>
						Життя школи №226 у подіях, перемогах та щоденних відкриттях.
						Слідкуйте за нашими оновленнями!
					</p>
				</div>

				{loading ? (
					<div className='loading-spinner'>Завантаження новин...</div>
				) : (
					<div className='news-grid'>
						{news.map(item => (
							<div key={item.id} className='news-card'>
								<div className='news-image-wrapper'>
									<img src={item.imageUrl} alt={item.title} />
									<div className='news-date'>{item.date}</div>
								</div>
								<div className='news-content'>
									<h2>{item.title}</h2>
									<p>{item.summary}</p>
									<Link to={`/news/${item.id}`} className='btn-text'>
										Читати далі ➔
									</Link>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
