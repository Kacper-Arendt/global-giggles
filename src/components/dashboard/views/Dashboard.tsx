import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useDashboard } from 'src/components/dashboard/hooks/useDashboard';

// MODELS

// COMPONENTS
import { NewsList } from 'src/components/dashboard/sections';

// STYLES

export const Dashboard = () => {
	const { fetchNews } = useDashboard();

	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<ErrorBoundary FallbackComponent={() => null}>
				<NewsList />
			</ErrorBoundary>
		</ErrorBoundary>
	);
};
