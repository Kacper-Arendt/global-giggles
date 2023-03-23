// HOOKS
import { useFetch } from 'src/utils/hooks/fetch/useFetch';
import { useAppDispatch } from 'src/redux/hooks';
import { setInitialNewsData } from 'src/redux/slices/news';

// MODELS
import { InitialStatePayloadInterface } from 'src/redux/slices/news/models';

export const useDashboard = () => {
	const { fetchFn, loading } = useFetch<InitialStatePayloadInterface>();
	const dispatch = useAppDispatch();

	const fetchNews = () => {
		const onError = (e: any) => console.log(e.status);

		const onFinish = (data: InitialStatePayloadInterface) => dispatch(setInitialNewsData(data));

		fetchFn({ options: { method: 'GET' }, onFinish, onError });
	};

	return { fetchNews, loading };
};
