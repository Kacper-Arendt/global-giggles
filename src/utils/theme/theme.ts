import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#5f5cff',
		},
		secondary: {
			main: '#ff69b4',
		},
		background: {
			default: '#1A202C',
			paper: '#364153',
		},
	},
});

declare module '@mui/material/styles' {
	interface Theme {
		palette: {
			mode: 'dark';
			primary: {
				main: string;
			};
			secondary: {
				main: string;
			};
			background: {
				default: string;
				paper: string;
			};
		};
	}
}

declare module '@emotion/react' {
	export interface Theme {
		palette: {
			mode: 'dark';
			primary: {
				main: string;
			};
			secondary: {
				main: string;
			};
			background: {
				default: string;
				paper: string;
			};
		};
	}
}
