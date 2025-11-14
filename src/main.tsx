import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './components/root-layout';
import Home from './pages/page';
import Support from './pages/support/page';
import User from './pages/users/[id]/page';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';

document.documentElement.setAttribute('data-bs-theme', 'dark');

const router = createBrowserRouter([
	{
		Component: RootLayout,
		children: [
			{
				path: '/',
				children: [
					{ index: true, Component: Home },
					{
						path: 'support',
						Component: Support,
					},
					{
						path: 'users',
						children: [
							{
								path: ':id',
								Component: User,
							},
						],
					},
				],
			},
		],
	},
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
