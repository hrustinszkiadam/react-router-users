import { Link, Outlet, useLocation } from 'react-router';
import { AUTHOR_GITHUB, AUTHOR_NAME, PETRIK_WEBSITE } from '../lib/constants';
import clsx from 'clsx';

const RootLayout = () => {
	const pathName = useLocation().pathname;

	return (
		<div className='d-flex flex-column min-vh-100 overflow-hidden'>
			<header className='px-2 py-4 bg-body-tertiary fs-5'>
				<nav className='navbar navbar-expand-lg bg-body-tertiary'>
					<div className='container-fluid'>
						<Link
							className='navbar-brand fs-4'
							to='/'
						>
							React Router Users
						</Link>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarNav'
						>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<Link
										className={clsx('nav-link', { active: pathName === '/' })}
										aria-current={pathName === '/' ? 'page' : undefined}
										to='/'
									>
										Home
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className={clsx('nav-link', {
											active: pathName === '/support',
										})}
										aria-current={pathName === '/support' ? 'page' : undefined}
										to='/support'
									>
										Support
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<main className='flex-grow-1 d-flex'>
				<Outlet />
			</main>
			<footer className='d-flex justify-content-center align-items-center p-4 gap-4 bg-body-tertiary fs-5'>
				<Link
					to={`https://github.com/${AUTHOR_GITHUB}`}
					target='_blank'
					className='text-decoration-none fw-light'
				>
					{AUTHOR_NAME}
				</Link>
				<span>|</span>
				<Link
					to={PETRIK_WEBSITE}
					target='_blank'
					className='text-decoration-none fw-light'
				>
					petrik.hu
				</Link>
			</footer>
		</div>
	);
};

export default RootLayout;
