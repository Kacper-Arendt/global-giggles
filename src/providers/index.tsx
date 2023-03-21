import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

export const Providers = ({children}:{children: ReactNode}) => (
		<>
			<Provider store={store}>
				{children}
			</Provider>
		</>
	);