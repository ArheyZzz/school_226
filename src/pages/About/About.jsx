import { Link } from 'react-router-dom';
import './About.css';

// Импортируем твои файлы из папки assets
import securityImg from '../../assets/security.png';
import lightbulbImg from '../../assets/lightbulb.png';
import communicationImg from '../../assets/communication.png';
import teamImg from '../../assets/team226.jpg';

export default function About() {
	return (
		<div className='about-wrapper'>
			<div className='about-container'>
				{/* Заголовок */}
				<div className='about-header'>
					<h1 className='page-title'>
						Про школу <span className='highlight'>№226</span>
					</h1>
					<p className='page-subtitle'>
						Ми не просто вчимо математики чи мови. Ми створюємо середовище, де
						кожна дитина може розкрити свій потенціал, знайти друзів та
						навчитися мислити.
					</p>
				</div>

				{/* Статистика */}
				<div className='stats-grid'>
					<div className='stat-card'>
						<div className='stat-number text-orange'>850+</div>
						<div className='stat-label'>Щасливих учнів</div>
					</div>
					<div className='stat-card'>
						<div className='stat-number text-blue'>60+</div>
						<div className='stat-label'>Талановитих вчителів</div>
					</div>
					<div className='stat-card'>
						<div className='stat-number text-green'>35</div>
						<div className='stat-label'>Років досвіду</div>
					</div>
					<div className='stat-card'>
						<div className='stat-number text-purple'>15+</div>
						<div className='stat-label'>Гуртків та секцій</div>
					</div>
				</div>

				{/* Ценности */}
				<div className='values-section'>
					<h2 className='section-title'>Наші головні цінності</h2>
					<div className='values-grid'>
						<div className='value-card'>
							<div className='value-img-wrapper shadow-blue'>
								<img src={securityImg} alt='Безпека' className='value-icon' />
							</div>
							<h3>Безпека та комфорт</h3>
							<p>
								Сучасне укриття, відеонагляд та психологічна підтримка для
								кожного учня.
							</p>
						</div>
						<div className='value-card'>
							<div className='value-img-wrapper shadow-orange'>
								<img
									src={lightbulbImg}
									alt='Інновації'
									className='value-icon'
								/>
							</div>
							<h3>Інновації в навчанні</h3>
							<p>
								Використовуємо інтерактивні дошки, 3D-моделювання та сучасні
								IT-програми.
							</p>
						</div>
						<div className='value-card'>
							<div className='value-img-wrapper shadow-green'>
								<img
									src={communicationImg}
									alt='Взаємоповага'
									className='value-icon'
								/>
							</div>
							<h3>Взаємоповага</h3>
							<p>
								Будуємо стосунки на довірі між вчителями, дітьми та батьками. Ні
								— булінгу!
							</p>
						</div>
					</div>
				</div>

				{/* Команда */}
				<div className='team-section'>
					<div className='team-content'>
						<h2>Наша команда</h2>
						<p>
							Школа №226 пишається своїм педагогічним колективом. Наші вчителі —
							це не лише викладачі, а й наставники, які постійно вдосконалюють
							свої навички, проходять тренінги та щиро люблять свою справу.
						</p>
						<Link to='/contact' className='btn-3d btn-primary'>
							Зв'язатися з керівництвом
						</Link>
					</div>
					<div className='team-visual'>
						<div className='team-photo-frame'>
							<img src={teamImg} alt='Колектив школи' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
