import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledMain = styled(Box)`
	grid-area: main;
	padding: 1rem;
`;

export const Main = () => (
	<StyledMain>
		<Outlet />
	</StyledMain>
);
