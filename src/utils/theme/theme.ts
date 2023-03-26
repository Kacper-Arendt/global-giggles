import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: 'hsl(241,100%,68%)',
		},
		secondary: {
			main: 'hsl(330,100%,71%)',
		},
		text: {
			primary: 'hsl(0,0%,100%)',
			secondary: 'hsl(207,28%,69%)',
		},
		background: {
			default: 'hsl(220,26%,14%)',
			paper: 'hsl(217,21%,27%)',
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
			text: {
				primary: string;
				secondary: string;
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
			text: {
				primary: string;
				secondary: string;
			};
			background: {
				default: string;
				paper: string;
			};
		};
	}
}
