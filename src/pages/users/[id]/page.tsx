import { useQuery } from '@tanstack/react-query';
import ErrorDisplay from '../../../components/error';
import LoadingDisplay from '../../../components/loading';
import { fetchUserById } from '../../../lib/utils';
import { useParams } from 'react-router';

const User = () => {
	const { id } = useParams();
	const {
		data: user,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['users', id],
		queryFn: async () => {
			if (!id || Number.isNaN(Number(id))) throw new Error('Invalid user ID');
			return await fetchUserById(id);
		},
		staleTime: 60 * 1000,
		refetchInterval: 5 * 60 * 1000,
	});

	if (isLoading) {
		return <LoadingDisplay />;
	}
	if (error) {
		return <ErrorDisplay message={error.message} />;
	}

	return (
		<section className='w-100 d-flex justify-content-center align-items-center flex-column gap-4 p-4'>
			<h1 className='h3'>User Details</h1>
			<div
				className='card fs-5 p-3'
				style={{ maxWidth: '500px', width: '100%' }}
			>
				<div className='card-body'>
					<h5 className='card-title'>{user!.name}</h5>
					<h6 className='card-subtitle mb-4 text-muted'>{user!.email}</h6>
					<p className='card-text'>
						<strong>ID:</strong> {user!.id}
					</p>
					<p className='card-text'>
						<strong>Phone number:</strong> {user!.phone}
					</p>
					<p className='card-text'>
						<strong>City:</strong> {user!.city}
					</p>
					<p className='card-text'>
						<strong>Registered at:</strong>{' '}
						{new Intl.DateTimeFormat('en-US', {
							year: 'numeric',
							month: '2-digit',
							day: '2-digit',
							hour: '2-digit',
							minute: '2-digit',
							second: '2-digit',
						}).format(new Date(user!.registered_at))}
					</p>
				</div>
			</div>
		</section>
	);
};

export default User;
