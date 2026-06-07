import { Link } from 'react-router-dom';
import './Schedule.css';

export default function Schedule() {
	return (
		<div className='schedule-wrapper'>
			<div className='schedule-container'>
				<Link to='/' className='back-link'>
					<span className='arrow'>⬅</span> На головну
				</Link>

				<div className='schedule-header'>
					<h1 className='page-title'>
						Розклад <span className='highlight'>занять</span>
					</h1>
					<p className='page-subtitle'>
						Актуальний графік дзвінків та посилання на завантаження розкладу
						уроків для всіх класів школи №226.
					</p>
				</div>

				{/* Розклад дзвінків */}
				<div className='bells-section'>
					<h2 className='section-title'>Графік дзвінків</h2>
					<div className='bells-grid'>
						<div className='bell-card'>
							<div className='lesson-num'>1 урок</div>
							<div className='lesson-time'>08:30 – 09:15</div>
							<div className='break-time'>перерва 10 хв</div>
						</div>

						<div className='bell-card'>
							<div className='lesson-num'>2 урок</div>
							<div className='lesson-time'>09:25 – 10:10</div>
							<div className='break-time'>перерва 15 хв</div>
						</div>

						<div className='bell-card highlight-break'>
							<div className='lesson-num'>3 урок</div>
							<div className='lesson-time'>10:25 – 11:10</div>
							<div className='break-time'>перерва 20 хв 🥪 (обід)</div>
						</div>

						<div className='bell-card'>
							<div className='lesson-num'>4 урок</div>
							<div className='lesson-time'>11:30 – 12:15</div>
							<div className='break-time'>перерва 15 хв</div>
						</div>

						<div className='bell-card'>
							<div className='lesson-num'>5 урок</div>
							<div className='lesson-time'>12:30 – 13:15</div>
							<div className='break-time'>перерва 10 хв</div>
						</div>

						<div className='bell-card'>
							<div className='lesson-num'>6 урок</div>
							<div className='lesson-time'>13:25 – 14:10</div>
							<div className='break-time'>перерва 10 хв</div>
						</div>

						<div className='bell-card'>
							<div className='lesson-num'>7 урок</div>
							<div className='lesson-time'>14:20 – 15:05</div>
							<div className='break-time'>завершення занять</div>
						</div>
					</div>
				</div>

				{/* Завантаження розкладу уроків */}
				<div className='schedule-downloads'>
					<h2 className='section-title'>Розклад уроків (PDF)</h2>
					<div className='downloads-grid'>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							className='download-card'
						>
							<span className='download-icon'>🎒</span>
							<div className='download-info'>
								<h3>Початкова школа</h3>
								<p>1-4 класи</p>
							</div>
							<span className='download-arrow'>➔</span>
						</a>

						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							className='download-card'
						>
							<span className='download-icon'>🧭</span>
							<div className='download-info'>
								<h3>Середня школа</h3>
								<p>5-9 класи</p>
							</div>
							<span className='download-arrow'>➔</span>
						</a>

						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							className='download-card'
						>
							<span className='download-icon'>🎓</span>
							<div className='download-info'>
								<h3>Старша школа</h3>
								<p>10-11 класи</p>
							</div>
							<span className='download-arrow'>➔</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
