// MATERIAL
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// COMPONENTS
import { CountriesList } from 'src/components/countriesList';

const StyledAside = styled(Box)`
	grid-area: aside;
	background-color: ${({ theme }) => theme.palette.background.paper};
	padding: 0.5rem;
	overflow: auto;
`;

export const Aside = () => (
	<StyledAside>
		<CountriesList />
	</StyledAside>
);
