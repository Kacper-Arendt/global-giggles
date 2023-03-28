import { createContext, ReactNode } from 'react';
import axios from 'axios';

interface ConfigInterface {
	baseUrl: string;
	token?: string;
}

interface ContextProviderInterface extends ConfigInterface {
	children?: ReactNode | ReactNode[] | null;
}

const fetchContext = ({ baseUrl, token }: ConfigInterface) => {
	axios.defaults.baseURL = baseUrl;

	axios.interceptors.request.use(
		(config) => {
			config.params = { ...config.params, apiKey: token };
			return config;
		},
		(error) => Promise.reject(error),
	);

	return { baseUrl, token };
};
export const fetchContextData = createContext({} as ReturnType<typeof fetchContext>);

export const FetchContextProvider = ({ children, ...rest }: ContextProviderInterface) => (
	<fetchContextData.Provider value={fetchContext({ ...rest })}>{children}</fetchContextData.Provider>
);
