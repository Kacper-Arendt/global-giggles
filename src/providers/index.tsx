import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

// REDUX
import { store } from 'src/redux/store';

// STYLES
import { theme } from 'src/utils/theme/theme';

export const Providers = ({ children }: { children: ReactNode }) => (
	<>
		<CssBaseline enableColorScheme />
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</MuiThemeProvider>
		</Provider>
	</>
);
