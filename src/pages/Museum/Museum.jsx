import { Link } from 'react-router-dom';
import './Museum.css';

// Тимчасова картинка-заглушка
import museumPhoto from '../../assets/main-background.png';

export default function Museum() {
	return (
		<div className='museum-wrapper'>
			<div className='museum-container'>
				{/* Кнопка повернення */}
				<Link to='/life' className='back-link'>
					<span className='arrow'>⬅</span> Назад до Життя школи
				</Link>

				{/* Заголовок */}
				<div className='museum-header'>
					<h1 className='page-title'>
						Музей української <span className='highlight'>діаспори</span>
					</h1>
					<p className='page-subtitle'>
						Унікальний простір нашої школи, де історія оживає. Ми збираємо,
						зберігаємо та досліджуємо спадщину українців у всьому світі.
					</p>
				</div>

				{/* Контентна частина */}
				<div className='museum-content'>
					<div className='museum-text'>
						<h2>Наша гордість та історія</h2>
						<p>
							Шкільний музей — це не просто кімната з експонатами. Це справжній
							дослідницький центр для наших учнів. Тут проходять відкриті уроки
							історії, зустрічі з цікавими людьми та інтерактивні лекції.
						</p>
						<p>
							Експозиція постійно поповнюється завдяки зусиллям вчителів, учнів
							та їхніх батьків. Ми пишаємося тим, що можемо доторкнутися до
							живої історії нашого народу.
						</p>

						{/* Оновлена кнопка-посилання на сторінку контактів */}
						<Link to='/contact' className='btn-3d btn-primary museum-btn'>
							Записатися на екскурсію
						</Link>
					</div>

					<div className='museum-visual'>
						<div className='photo-frame'>
							<img src={museumPhoto} alt='Експозиція музею' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
