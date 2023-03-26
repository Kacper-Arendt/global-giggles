import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledMainWrapper = styled(Box)`
	grid-area: main;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;

const StyledMain = styled(Box)`
	flex: 1;
`;

export const Main = () => (
	<StyledMainWrapper>
		<StyledMain>
			<Outlet />
		</StyledMain>
	</StyledMainWrapper>
);
