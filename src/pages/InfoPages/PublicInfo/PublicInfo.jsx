import { Link } from 'react-router-dom';
import './PublicInfo.css';

export default function PublicInfo() {
	return (
		<div className='public-wrapper'>
			<div className='public-container'>
				<Link to='/' className='back-link'>
					<span className='arrow'>⬅</span> На головну
				</Link>

				<div className='public-header'>
					<h1 className='page-title'>
						Публічна <span className='highlight'>інформація</span>
					</h1>
					<p className='page-subtitle'>
						Ми за прозорість та відкритість! Відповідно до ст. 30 Закону України
						«Про освіту», публікуємо всі офіційні документи школи №226.
					</p>
				</div>

				{/* Сітка документів */}
				<div className='docs-grid'>
					{/* Картка 1: Статут */}
					<div className='doc-card'>
						<div className='doc-icon shadow-blue'>🏛️</div>
						<h3>Установчі документи</h3>
						<p>
							Статут закладу освіти, правила внутрішнього розпорядку та
							структура управління.
						</p>
						<div className='doc-links'>
							<a href='#' className='btn-text'>
								📄 Статут школи (PDF)
							</a>
							<a href='#' className='btn-text'>
								📄 Правила розпорядку (PDF)
							</a>
						</div>
					</div>

					{/* Картка 2: Ліцензії */}
					<div className='doc-card'>
						<div className='doc-icon shadow-orange'>📜</div>
						<h3>Ліцензії та сертифікати</h3>
						<p>
							Ліцензії на провадження освітньої діяльності та сертифікати
							акредитації.
						</p>
						<div className='doc-links'>
							<a href='#' className='btn-text'>
								📄 Виписка з реєстру (PDF)
							</a>
							<a href='#' className='btn-text'>
								📄 Ліцензія МОН (PDF)
							</a>
						</div>
					</div>

					{/* Картка 3: Фінанси */}
					<div className='doc-card'>
						<div className='doc-icon shadow-green'>📊</div>
						<h3>Фінансова звітність</h3>
						<p>
							Кошториси, фінансові звіти про надходження та використання всіх
							отриманих коштів.
						</p>
						<div className='doc-links'>
							<a href='#' className='btn-text'>
								📄 Кошторис 2026 (PDF)
							</a>
							<a href='#' className='btn-text'>
								📄 Звіт за 2025 рік (PDF)
							</a>
						</div>
					</div>

					{/* Картка 4: Навчання */}
					<div className='doc-card'>
						<div className='doc-icon shadow-purple'>📚</div>
						<h3>Освітні програми</h3>
						<p>
							Перелік навчальних програм, що реалізуються в закладі, та робочі
							навчальні плани.
						</p>
						<div className='doc-links'>
							<a href='#' className='btn-text'>
								📄 Освітня програма (PDF)
							</a>
							<a href='#' className='btn-text'>
								📄 Навчальний план (PDF)
							</a>
						</div>
					</div>
				</div>

				{/* Інформаційний блок */}
				<div className='law-block'>
					<div className='law-icon'>ℹ️</div>
					<div className='law-text'>
						<strong>Зверніть увагу:</strong> Всі документи надаються для
						ознайомлення у форматі PDF. Якщо у вас виникли питання щодо
						фінансової чи освітньої звітності, ви можете звернутися
						безпосередньо до керівництва школи через сторінку{' '}
						<Link to='/contact'>Контакти</Link>.
					</div>
				</div>
			</div>
		</div>
	);
}
