const Support = () => {
	return (
		<section className='w-100 d-flex justify-content-center align-items-center flex-column gap-4 p-4'>
			<h1 className='h3'>Contact Us</h1>
			<form
				style={{ maxWidth: '600px', width: '100%' }}
				onSubmit={(e) => {
					e.preventDefault();
					e.currentTarget.reset();
				}}
			>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='form-label'
					>
						Email address
					</label>
					<input
						type='email'
						className='form-control'
						id='email'
						name='email'
						aria-describedby='emailHelp'
						required
					/>
					<div
						id='emailHelp'
						className='form-text'
					>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='message'
						className='form-label'
					>
						Message
					</label>
					<textarea
						className='form-control'
						id='message'
						name='message'
						aria-describedby='messageHelp'
						rows={10}
						style={{
							resize: 'none',
						}}
						required
					/>
					<div
						id='messageHelp'
						className='form-text'
					>
						Write your message here.
					</div>
				</div>
				<button
					type='submit'
					className='btn btn-primary block w-50 p-2 mx-auto d-block'
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Support;
