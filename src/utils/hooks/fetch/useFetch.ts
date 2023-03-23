import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';

export type OptionsInterface = AxiosRequestConfig;

export const useFetch = <T = unknown>() => {
	const [loading, setLoading] = useState(false);
	const { signal } = new AbortController();

	const fetchFn = async ({
		options,
		onFinish,
		onError,
	}: {
		options: OptionsInterface;
		onFinish?: (resp: T) => void;
		onError?: (err: any) => void;
	}) => {
		try {
			setLoading(true);
			const res: AxiosResponse<T> = await axios({
				...options,
				signal,
			});

			if (onFinish) onFinish(res.data);
		} catch (error: any) {
			if (onError) onError(error);
		} finally {
			setLoading(false);
		}
	};

	return { signal, loading, fetchFn };
};
