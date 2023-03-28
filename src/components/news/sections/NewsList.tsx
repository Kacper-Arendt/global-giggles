import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useAppSelector } from 'src/redux/hooks';
import { selectNews } from 'src/redux/slices/news';
import { selectGlobal } from 'src/redux/slices/global';

// COMPONENTS
import { NewsList as CoreUIList } from 'src/coreUi/dataDisplay/news';

export const NewsList = () => {
	const { allArticles } = useAppSelector(selectNews);
	const { listStyle } = useAppSelector(selectGlobal);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<CoreUIList variant={listStyle} articles={allArticles} />
		</ErrorBoundary>
	);
};
