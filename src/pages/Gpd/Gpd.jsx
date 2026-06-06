import { Link } from 'react-router-dom';
import './Gpd.css';

export default function Gpd() {
	return (
		<div className='gpd-wrapper'>
			<div className='gpd-container'>
				{/* Кнопка повернення (притиснута праворуч) */}
				<Link to='/life' className='back-link'>
					<span className='arrow'>⬅</span> Назад до Життя школи
				</Link>

				{/* Заголовок */}
				<div className='gpd-header'>
					<h1 className='page-title'>
						Група продовженого <span className='highlight'>дня</span>
					</h1>
					<p className='page-subtitle'>
						Безпечний, корисний та веселий простір для вашої дитини після
						завершення основних уроків. Ми дбаємо про те, щоб час у школі минав
						із користю!
					</p>
				</div>

				{/* Блок з інформацією */}
				<div className='gpd-info-panel'>
					<h2>Чому дітям подобається наша ГПД?</h2>
					<p>
						Після уроків дітям потрібне перезавантаження. У нашій групі
						продовженого дня ми балансуємо між відпочинком, навчанням та
						творчістю. Вчителі допомагають із домашніми завданнями, щоб ввечері
						вдома ви могли просто насолоджуватися спілкуванням у родинному колі.
					</p>
				</div>

				{/* Розклад у вигляді 3D-карток */}
				<h2 className='schedule-title'>Режим дня</h2>
				<div className='schedule-grid'>
					{/* Картка 1 */}
					<div className='schedule-card card-yellow'>
						<div className='card-time'>13:00 - 14:00</div>
						<h3>Смачний обід та відпочинок</h3>
						<p>
							Відновлюємо сили після уроків, обідаємо в шкільній їдальні та
							ділимося враженнями за день.
						</p>
					</div>

					{/* Картка 2 */}
					<div className='schedule-card card-blue'>
						<div className='card-time'>14:00 - 15:30</div>
						<h3>Домашні завдання</h3>
						<p>
							Виконуємо завдання під наглядом педагога, який завжди підкаже та
							допоможе зі складними темами.
						</p>
					</div>

					{/* Картка 3 */}
					<div className='schedule-card card-green'>
						<div className='card-time'>15:30 - 16:30</div>
						<h3>Активні ігри на вулиці</h3>
						<p>
							Гуляємо на свіжому повітрі, граємо в рухливі ігри на спортивному
							майданчику школи.
						</p>
					</div>

					{/* Картка 4 */}
					<div className='schedule-card card-orange'>
						<div className='card-time'>16:30 - 18:00</div>
						<h3>Творчість та розвиток</h3>
						<p>
							Малюємо, ліпимо, збираємо конструктори, граємо в настільні ігри
							або відвідуємо гуртки.
						</p>
					</div>
				</div>

				{/* Заклик до дії */}
				<div className='gpd-cta'>
					<p>Залишилися питання або хочете записати дитину?</p>
					<Link to='/contact' className='btn-3d btn-primary'>
						Зв'язатися з куратором
					</Link>
				</div>
			</div>
		</div>
	);
}
