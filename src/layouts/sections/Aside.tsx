// MATERIAL
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// COMPONENTS
import { CountriesList } from 'src/components/countriesList';
import { LangChange } from 'src/coreUi/utils';

const StyledAside = styled(Box)`
	grid-area: aside;

	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	background-color: ${({ theme }) => theme.palette.background.paper};
	padding: 0.5rem;
	overflow: auto;

	:last-child {
		margin-top: auto;
	}
`;

export const Aside = () => (
	<StyledAside>
		<CountriesList />
		<LangChange />
	</StyledAside>
);
