import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// COMPONENTS
import { Aside, Footer, Header, Main } from 'src/layouts/sections';

const StyledMainLayout = styled(Box)`
	display: grid;
	grid-template-areas:
		'header header'
		'aside main'
		'aside .'
		'aside footer';
	grid-template-columns: 13rem 1fr;
	grid-template-rows: 4rem 1fr 0.5rem 4rem;
	height: 100vh;
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
