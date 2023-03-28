// HOOKS
import { useFetch } from 'src/utils/hooks/fetch/useFetch';
import { useAppDispatch } from 'src/redux/hooks';
import { setInitialNewsData } from 'src/redux/slices/news';

// MODELS
import { InitialStatePayloadInterface } from 'src/redux/slices/news/models';

export const useNews = () => {
	const { fetchFn, loading } = useFetch<InitialStatePayloadInterface>();
	const dispatch = useAppDispatch();

	const fetchNews = () => {
		const onError = (e: any) => console.log(e.status);

		const onFinish = (data: InitialStatePayloadInterface) => dispatch(setInitialNewsData(data));

		// q is required
		fetchFn({ options: { method: 'GET', params: { q: 'e' } }, onFinish, onError });
	};

	return { fetchNews, loading };
};
