import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
	const { data: user, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: getCurrentUser,
	});

	// console.log('useUser', user);
	// console.log(user?.role === 'authenticated');

	return { user, isLoading, isAuthenticated: user?.role === 'authenticated' };
}
