// COMPONENTS
import { Aside, Footer, Header, Main } from 'src/layouts/sections';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledMainLayout = styled(Box)`
	display: grid;
	grid-template-areas:
		'header header'
		'aside main'
		'aside footer';
	grid-template-columns: 13rem 1fr;
	grid-template-rows: 4rem 1fr 4rem;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.palette.background.default};
`;

export const MainLayout = () => (
	<StyledMainLayout>
		<Header />
		<Aside />
		<Main />
		<Footer />
	</StyledMainLayout>
);
