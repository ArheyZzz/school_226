import './ProgressBar.css';
import bgImage from '../../assets/main-background.png';

export default function ProgressBar({ isVisible }) {
	return (
		<div
			className={`loader_wrapper ${isVisible ? 'visible' : ''}`}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<span className='loader'></span>
		</div>
	);
}
