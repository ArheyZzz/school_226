import './Preloader.css';
import nyanCatGif from '../../assets/nyan-cat.gif';
import nyanSound from '../../assets/Voicy_Nyan.mp3';
import { useEffect, useRef } from 'react';

export default function Preloader() {
	const audioRef = useRef(null);

	useEffect(() => {
		const audio = audioRef.current;

		if (audio) {
			audio.volume = 0.6;

			const playPromise = audio.play();

			if (playPromise !== undefined) {
				playPromise.catch(() => {
					console.log('Автозапуск звуку заблоковано браузером');
				});
			}
		}
	}, []);

	return (
		<div className='preloader'>
			<div className='cloud cloud1'></div>
			<div className='cloud cloud2'></div>
			<div className='cloud cloud3'></div>

			<div className='cat-wrapper'>
				<div className='rainbow'></div>
				<img src={nyanCatGif} alt='Loading' className='cat' />
			</div>

			<div className='loading'>
				Завантаження
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</div>

			<audio ref={audioRef} loop>
				<source src={nyanSound} type='audio/mpeg' />
			</audio>
		</div>
	);
}
