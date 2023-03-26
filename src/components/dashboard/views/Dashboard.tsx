import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useDashboard } from 'src/components/dashboard/hooks/useDashboard';

// COMPONENTS
import { NewsList } from 'src/components/dashboard/sections';
import { Loader } from 'src/coreUi/common';

export const Dashboard = () => {
	const { fetchNews, loading } = useDashboard();

	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<ErrorBoundary FallbackComponent={() => null}>{loading ? <Loader showInContainer /> : <NewsList />}</ErrorBoundary>
		</ErrorBoundary>
	);
};
