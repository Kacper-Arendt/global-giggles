import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useCountry } from 'src/components/country/hooks/useCountry';
import { useAppSelector } from 'src/redux/hooks';
import { selectNews } from 'src/redux/slices/news';
import { selectGlobal } from 'src/redux/slices/global';

// COMPONENTS
import { Loader } from 'src/coreUi/common';
import { NewsList } from 'src/coreUi/dataDisplay/news';

export const CountryNews = () => {
	const { id } = useParams();
	const { fetchCountryNews, loading, setLoading, controller } = useCountry();
	const { countryArticles } = useAppSelector(selectNews);
	const { listStyle } = useAppSelector(selectGlobal);
	const currentCountryArticles = countryArticles[id as keyof typeof countryArticles];

	useEffect(() => {
		if (!currentCountryArticles) {
			fetchCountryNews();
		} else setLoading(false);

		return () => {
			controller.abort();
		};
	}, [id]);

	if (loading) return <Loader showInContainer />;

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			{currentCountryArticles && <NewsList articles={currentCountryArticles} variant={listStyle} />}
		</ErrorBoundary>
	);
};
