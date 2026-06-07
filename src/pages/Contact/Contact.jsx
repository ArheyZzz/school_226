import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
	const formRef = useRef();
	const [status, setStatus] = useState('');

	const sendEmail = e => {
		e.preventDefault();
		setStatus('sending');

		// Сюди вставляй свої реальні ключі з кабінету EmailJS
		const SERVICE_ID = 'YOUR_SERVICE_ID';
		const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
		const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
			.then(() => {
				setStatus('success');
				formRef.current.reset();
				setTimeout(() => setStatus(''), 4000);
			})
			.catch(err => {
				console.error('EmailJS Error:', err);
				setStatus('error');
				setTimeout(() => setStatus(''), 4000);
			});
	};

	return (
		<div className='contact-wrapper'>
			<div className='contact-container'>
				<div className='contact-header'>
					<h1 className='page-title'>
						Зв'яжіться з <span className='highlight'>нами</span>
					</h1>
					<p className='page-subtitle'>
						Маєте питання щодо вступу, документів чи навчального процесу? Ми
						завжди відкриті до діалогу.
					</p>
				</div>

				<div className='contact-grid'>
					{/* Ліва колонка: Інформація */}
					<div className='contact-info-panel'>
						<h2>Контактна інформація</h2>

						<div className='info-item'>
							<span className='info-icon'>📍</span>
							<div>
								<h3>Адреса</h3>
								<p>вул. Прирічна, 19Е , Київ, Україна</p>
								<span className='sub-text'>5 хвилин від ст. м. "Мінська"</span>
							</div>
						</div>

						<div className='info-item'>
							<span className='info-icon'>📞</span>
							<div>
								<h3>Телефони</h3>
								<p>+38 (044) 412-34-56 (Приймальня)</p>
								<p>+38 (044) 412-34-57 (Вчительська)</p>
							</div>
						</div>

						<div className='info-item'>
							<span className='info-icon'>🕒</span>
							<div>
								<h3>Графік роботи</h3>
								<p>Пн - Пт: 08:30 - 17:00</p>
								<span className='sub-text'>Сб - Нд: Вихідні</span>
							</div>
						</div>

						<div className='info-item'>
							<span className='info-icon'>✉️</span>
							<div>
								<h3>Email</h3>
								<p>school226@kyiv.edu.ua</p>
							</div>
						</div>

						{/* Соцмережі */}
						<div className='social-links'>
							<h3>Ми в соцмережах:</h3>
							<div className='social-icons-wrapper'>
								<a
									href='https://www.facebook.com/groups/2971131236499506/?locale=uk_UA'
									target='_blank'
									rel='noopener noreferrer'
									className='social-icon facebook'
									aria-label='Facebook школи'
								>
									<svg
										viewBox='0 0 24 24'
										fill='currentColor'
										height='24'
										width='24'
									>
										<path d='M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.45-9.9c0-5.53-4.5-10.02-10-10.02z' />
									</svg>
								</a>

								<a
									href='https://www.instagram.com/selfgoverment_account/'
									target='_blank'
									rel='noopener noreferrer'
									className='social-icon instagram'
									aria-label='Instagram школи'
								>
									<svg
										viewBox='0 0 24 24'
										fill='currentColor'
										height='24'
										width='24'
									>
										<path d='M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.92 2.31 7.15 2.16c1.27-.06 1.64-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-4.27.2-6.78 2.71-6.98 6.98C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.27 2.71 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.27-.2 6.78-2.71 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.2-4.27-2.71-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' />
									</svg>
								</a>

								<a
									href='https://www.youtube.com/@%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0226/videos'
									target='_blank'
									rel='noopener noreferrer'
									className='social-icon youtube'
									aria-label='YouTube школи'
								>
									<svg
										viewBox='0 0 24 24'
										fill='currentColor'
										height='24'
										width='24'
									>
										<path d='M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3z' />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Права колонка: Форма */}
					<div className='contact-form-panel'>
						<h2>Написати нам</h2>
						<form ref={formRef} className='contact-form' onSubmit={sendEmail}>
							{/* Атрибути name обов'язкові для EmailJS! */}
							<div className='form-group'>
								<label htmlFor='name'>Ваше ім'я</label>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Іванов Іван'
									required
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='email'>Email або Телефон</label>
								<input
									type='text'
									id='email'
									name='email'
									placeholder='Для зворотного зв’язку'
									required
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='subject'>Тема звернення</label>
								<div className='select-wrapper'>
									<select id='subject' name='subject' required defaultValue=''>
										<option value='' disabled>
											Оберіть тему...
										</option>
										<option value='Вступ до школи / 1 клас'>
											Вступ до школи / 1 клас
										</option>
										<option value='Довідки та документи'>
											Довідки та документи
										</option>
										<option value='Питання до адміністрації'>
											Питання до адміністрації
										</option>
										<option value='Технічна проблема з сайтом'>
											Технічна проблема з сайтом
										</option>
										<option value='Інше'>Інше</option>
									</select>
								</div>
							</div>

							<div className='form-group'>
								<label htmlFor='message'>Повідомлення</label>
								<textarea
									id='message'
									name='message'
									rows='4'
									placeholder='Опишіть ваше питання детальніше...'
									required
								></textarea>
							</div>

							<button
								className='btn-3d btn-primary submit-btn'
								type='submit'
								disabled={status === 'sending'}
							>
								{status === 'sending'
									? 'Відправка...'
									: 'Відправити повідомлення'}
							</button>

							<div className='form-status'>
								{status === 'success' && (
									<p
										style={{
											color: '#22c55e',
											marginTop: '15px',
											fontWeight: 'bold',
											textAlign: 'center',
										}}
									>
										Повідомлення успішно відправлено!
									</p>
								)}
								{status === 'error' && (
									<p
										style={{
											color: '#ef4444',
											marginTop: '15px',
											fontWeight: 'bold',
											textAlign: 'center',
										}}
									>
										Помилка відправки. Спробуйте ще раз пізніше.
									</p>
								)}
							</div>
						</form>
					</div>
				</div>

				{/* Карта */}
				<div className='map-section'>
					<h2>Як нас знайти</h2>
					<div className='map-container'>
						<iframe
							title='Карта проїзду до школи №226'
							src='https://maps.google.com/maps?q=Київ,+вул.+Прирічна,+19Є&t=&z=16&ie=UTF8&iwloc=&output=embed'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
