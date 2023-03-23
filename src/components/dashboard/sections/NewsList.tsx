import { ErrorBoundary } from 'react-error-boundary';
import { useAppSelector } from 'src/redux/hooks';
import { selectNews } from 'src/redux/slices/news';
// HOOKS

// MODELS

// COMPONENTS

// STYLES

export const NewsList = () => {
	const { articles } = useAppSelector(selectNews);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			{articles?.map((article) => (
				<div key={article?.url}>{article?.title}</div>
			))}
		</ErrorBoundary>
	);
};
