import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useNews } from 'src/components/news/hooks/useNews';

// COMPONENTS
import { NewsList } from 'src/components/news/sections';
import { Loader } from 'src/coreUi/common';

export const News = () => {
	const { fetchNews, loading } = useNews();

	useEffect(() => {
		fetchNews();
	}, []);

	if (loading) return <Loader showInContainer />;

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<NewsList />
		</ErrorBoundary>
	);
};
