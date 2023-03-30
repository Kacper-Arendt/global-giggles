import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack } from '@mui/material';

// COMPONENTS
import { ListStyle } from 'src/layouts/items';
import { LangChange } from 'src/coreUi/utils';

export const Header = () => (
	<Stack
		sx={{
			p: 2,
			borderBottom: 1,
			borderColor: 'background.paper',
			gridArea: 'header',
		}}
		direction="row"
		alignItems="center"
		spacing={1.5}
	>
		<Link component={RouterLink} to="/" underline="none" variant="h5" color="secondary.main" sx={{ marginRight: 'auto' }}>
			Global Giggles
		</Link>
		<LangChange />
		<ListStyle />
	</Stack>
);
