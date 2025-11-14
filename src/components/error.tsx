const ErrorDisplay = ({ message }: { message: string }) => {
	return (
		<section className='d-flex w-100 justify-content-center align-items-center text-center'>
			<h1 className='h3 text-danger'>Error: {message}</h1>
		</section>
	);
};

export default ErrorDisplay;
