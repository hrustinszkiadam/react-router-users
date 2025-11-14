import { API_BASE_URL } from './constants';
import type { User } from './types';

export const fetchUsers = async () => {
	const controller = new AbortController();
	const timeoutId = setTimeout(
		() => controller.abort('Request timed out'),
		5000
	);

	const response = await fetch(API_BASE_URL, {
		signal: controller.signal,
	});
	clearTimeout(timeoutId);

	if (!response.ok) {
		throw new Error('Failed to fetch users');
	}
	return (await response.json()) as User[];
};

export const fetchUserById = async (id: string) => {
	const controller = new AbortController();
	const timeoutId = setTimeout(
		() => controller.abort('Request timed out'),
		5000
	);

	const response = await fetch(`${API_BASE_URL}/${id}`, {
		signal: controller.signal,
	});
	clearTimeout(timeoutId);

	if (response.status === 404) {
		throw new Error('User not found');
	}
	if (!response.ok) {
		throw new Error('Failed to fetch user');
	}
	return (await response.json()) as User;
};
