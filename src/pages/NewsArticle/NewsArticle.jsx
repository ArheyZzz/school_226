import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './NewsArticle.css';

// Ті самі тимчасові дані для заглушки (потім видалиш, коли підключиш MockAPI)
const fallbackNews = [
	{
		id: '1',
		title: 'День відкритих дверей 2026',
		summary: 'Запрошуємо майбутніх першокласників та їхніх батьків...',
		fullText:
			'Тут буде довгий текст новини. Шановні батьки, 15 травня наша школа відчиняє двері для всіх бажаючих! Ви зможете поспілкуватися з вчителями, оглянути класи, укриття та їдальню. Чекаємо на вас о 10:00 в актовій залі.',
		imageUrl:
			'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
		date: '15 Травня, 2026',
	},
	{
		id: '2',
		title: 'Перемога у міській олімпіаді з математики',
		summary: 'Учні 10-Б класу посіли перше місце...',
		fullText:
			'Наші учні знову довели, що вони найкращі! Команда 10-Б класу здобула беззаперечну перемогу на міській олімпіаді з математики. Вітаємо переможців та їхнього керівника Ірину Василівну!',
		imageUrl:
			'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
		date: '10 Травня, 2026',
	},
	{
		id: '3',
		title: 'Нове обладнання для кабінету інформатики',
		summary:
			"Завдяки грантовій програмі школа отримала 15 нових комп'ютерів...",
		fullText:
			'Чудові новини для наших юних програмістів. Кабінет інформатики №305 повністю оновлено. Встановлено 15 сучасних ПК, нову інтерактивну дошку та 3D-принтер для уроків з моделювання.',
		imageUrl:
			'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
		date: '02 Травня, 2026',
	},
];

export default function NewsArticle() {
	const { id } = useParams(); // Дістаємо ID з URL
	const API_URL = '';

	// Одразу шукаємо потрібну заглушку, якщо немає API
	const initialArticle = API_URL
		? null
		: fallbackNews.find(item => item.id === id);

	const [article, setArticle] = useState(initialArticle);
	const [loading, setLoading] = useState(API_URL ? true : false);

	useEffect(() => {
		// Якщо API немає, effect просто завершує роботу, бо дані вже в стейті
		if (!API_URL) return;

		// Якщо є API, робимо запит конкретної новини (додаємо /id в кінець)
		fetch(`${API_URL}/${id}`)
			.then(res => res.json())
			.then(data => {
				setArticle(data);
				setLoading(false);
			})
			.catch(err => {
				console.error('Помилка завантаження новини:', err);
				setLoading(false);
			});
	}, [id, API_URL]);

	if (loading) {
		return <div className='loading-spinner'>Завантаження статті...</div>;
	}

	if (!article) {
		return (
			<div className='article-wrapper'>
				<div className='article-container text-center'>
					<h2>Новину не знайдено 😕</h2>
					<Link to='/news' className='btn-text'>
						⬅ Повернутися до новин
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='article-wrapper'>
			<div className='article-container'>
				<Link to='/news' className='back-link'>
					<span className='arrow'>⬅</span> Всі новини
				</Link>

				<article className='article-content-box'>
					<div className='article-header'>
						<div className='article-date'>{article.date}</div>
						<h1 className='article-title'>{article.title}</h1>
					</div>

					<div className='article-hero-image'>
						<img src={article.imageUrl} alt={article.title} />
					</div>

					<div className='article-body'>
						{/* Якщо текст з MockAPI буде з абзацами, краще замінити на вивід HTML, 
                але поки що просто виводимо текст */}
						<p>{article.fullText || article.summary}</p>
					</div>
				</article>
			</div>
		</div>
	);
}
