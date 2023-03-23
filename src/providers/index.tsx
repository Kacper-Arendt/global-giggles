import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

// REDUX
import { store } from 'src/redux/store';

// STYLES
import { theme } from 'src/utils/theme/theme';
import { FetchContextProvider } from 'src/utils/hooks/fetch/fetchContext';

export const Providers = ({ children }: { children: ReactNode }) => (
	<>
		<CssBaseline enableColorScheme />
		<Provider store={store}>
			<FetchContextProvider baseUrl={import.meta.env.VITE_API} token={import.meta.env.VITE_API_KEY}>
				<MuiThemeProvider theme={theme}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</MuiThemeProvider>
			</FetchContextProvider>
		</Provider>
	</>
);
