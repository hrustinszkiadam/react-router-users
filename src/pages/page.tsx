import { useQuery } from '@tanstack/react-query';
import LoadingDisplay from '../components/loading';
import ErrorDisplay from '../components/error';
import { fetchUsers } from '../lib/utils';
import { useNavigate } from 'react-router';

const Home = () => {
	const navigate = useNavigate();
	const {
		data: users,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
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
			<h1 className='h3'>All registered users</h1>
			<div
				className='overflow-y-auto px-2'
				id='users-table'
				style={{ maxHeight: '50vh' }}
			>
				<table className='table table-striped table-hover w-100'>
					<thead className='fs-5'>
						<tr>
							<th scope='col'>Name</th>
							<th
								scope='col'
								className='text-end'
							>
								Email
							</th>
						</tr>
					</thead>
					<tbody>
						{users!.map((user) => (
							<tr
								key={user.id}
								style={{ cursor: 'pointer' }}
								onClick={() => navigate(`/users/${user.id}`)}
							>
								<td>{user.name}</td>
								<td
									scope='row'
									className='text-end'
								>
									{user.email}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Home;
