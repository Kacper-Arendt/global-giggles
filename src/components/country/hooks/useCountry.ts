import { useParams } from 'react-router-dom';

// HOOKS
import { useFetch } from 'src/utils/hooks/fetch/useFetch';
import { useAppDispatch } from 'src/redux/hooks';
import { setCountryNewsData } from 'src/redux/slices/news';

// MODELS
import { InitialStatePayloadInterface, PossibleCountriesType } from 'src/redux/slices/news/models';

export const useCountry = () => {
	const { id } = useParams();
	const { fetchFn, loading, setLoading, controller } = useFetch<InitialStatePayloadInterface>();
	const dispatch = useAppDispatch();

	const fetchCountryNews = () => {
		if (id) {
			const onError = (e: any) => console.log(e.status);

			const onFinish = (data: InitialStatePayloadInterface) =>
				dispatch(setCountryNewsData({ country: id as PossibleCountriesType, articles: data.articles }));

			fetchFn({ options: { method: 'GET', params: { q: 'e', language: id } }, onFinish, onError });
		}
	};

	return { loading, fetchCountryNews, setLoading, controller };
};
