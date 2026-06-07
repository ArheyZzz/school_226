import { Link } from 'react-router-dom';
import './AntiBullying.css';

export default function AntiBullying() {
	return (
		<div className='bullying-wrapper'>
			<div className='bullying-container'>
				<Link to='/' className='back-link'>
					<span className='arrow'>⬅</span> На головну
				</Link>

				<div className='bullying-header'>
					<h1 className='page-title'>
						Протидія <span className='highlight-red'>булінгу</span>
					</h1>
					<p className='page-subtitle'>
						Школа №226 — це територія безпеки та взаємоповаги. Ми маємо нульову
						толерантність до будь-яких проявів насильства, цькування чи
						дискримінації.
					</p>
				</div>

				{/* Що таке булінг (картки) */}
				<div className='bullying-types-section'>
					<h2 className='section-title'>Яким буває булінг?</h2>
					<div className='bullying-grid'>
						<div className='bullying-card'>
							<div className='card-icon shadow-red'>👊</div>
							<h3>Фізичний</h3>
							<p>
								Поштовхи, підніжки, побиття, пошкодження або відбирання
								особистих речей.
							</p>
						</div>
						<div className='bullying-card'>
							<div className='card-icon shadow-orange'>🗣️</div>
							<h3>Психологічний</h3>
							<p>
								Образи, поширення чуток, ігнорування, погрози, маніпуляції та
								бойкот.
							</p>
						</div>
						<div className='bullying-card'>
							<div className='card-icon shadow-purple'>📱</div>
							<h3>Кібербулінг</h3>
							<p>
								Цькування в інтернеті: образливі коментарі, створення фейкових
								сторінок, шантаж фотографіями.
							</p>
						</div>
					</div>
				</div>

				{/* Алгоритм дій */}
				<div className='action-plan-section'>
					<div className='action-content'>
						<h2>Що робити, якщо ти став жертвою або свідком?</h2>
						<ul className='action-steps'>
							<li>
								<span className='step-number'>1</span>
								<div>
									<strong>Не мовчи!</strong> Розкажи про це дорослому, якому
									довіряєш: батькам, класному керівнику або шкільному психологу.
								</div>
							</li>
							<li>
								<span className='step-number'>2</span>
								<div>
									<strong>Збережи докази.</strong> Якщо це кібербулінг — роби
									скріншоти повідомлень чи коментарів.
								</div>
							</li>
							<li>
								<span className='step-number'>3</span>
								<div>
									<strong>Звернися до адміністрації.</strong> Директор школи
									зобов'язаний прийняти заяву та скликати спеціальну комісію для
									розслідування.
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Екстренні контакти */}
				<div className='hotlines-section'>
					<h2>Гарячі лінії та допомога</h2>
					<div className='hotlines-grid'>
						<div className='hotline-card'>
							<div className='hotline-number'>116 111</div>
							<div className='hotline-desc'>
								Національна дитяча гаряча лінія (безкоштовно, анонімно)
							</div>
						</div>
						<div className='hotline-card'>
							<div className='hotline-number'>116 123</div>
							<div className='hotline-desc'>
								Національна гаряча лінія з попередження домашнього насильства
							</div>
						</div>
						<div className='hotline-card'>
							<div className='hotline-number'>102</div>
							<div className='hotline-desc'>
								Національна поліція України (ювенальна превенція)
							</div>
						</div>
					</div>
				</div>

				{/* Документи (посилання) */}
				<div className='bullying-docs'>
					<h3>Нормативно-правова база школи</h3>
					<p>
						<a href='#' className='doc-link'>
							📄 План заходів, спрямованих на запобігання та протидію булінгу
							(PDF)
						</a>
					</p>
					<p>
						<a href='#' className='doc-link'>
							📄 Порядок подання та розгляду заяв про випадки булінгу (PDF)
						</a>
					</p>
					<p className='doc-note'>
						* Файли будуть доступні для завантаження після затвердження
						адміністрацією.
					</p>
				</div>
			</div>
		</div>
	);
}
