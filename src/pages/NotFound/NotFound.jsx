import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './NotFound.css';

export default function NotFound() {
	const [count, setCount] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		if (count === 0) {
			navigate('/');
			return;
		}

		const timer = setTimeout(() => {
			setCount(prev => prev - 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, [count, navigate]);

	return (
		<div className='notfound-wrapper'>
			<div className='notfound-container'>
				<div className='notfound-card'>
					<div className='notfound-icon'>🎒</div>

					<h1 className='notfound-code'>404</h1>
					<h2 className='notfound-title'>Ой! Схоже, ви заблукали...</h2>

					<p className='notfound-text'>
						Такої сторінки в нашій школі не існує. Можливо, вона переїхала в
						інший кабінет або ви помилилися адресою.
					</p>

					<div className='notfound-timer-box'>
						Автоматичне повернення на головну через
						<span className='notfound-count'> {count} </span> сек.
					</div>

					<button className='notfound-btn' onClick={() => navigate('/')}>
						На головну прямо зараз
					</button>
				</div>
			</div>
		</div>
	);
}
