import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

interface LoaderInterface {
	size?: number;
	showInContainer?: boolean;
}

export const Loader = ({ size, showInContainer }: LoaderInterface) => {
	if (showInContainer)
		return (
			<Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<CircularProgress size={size} />
			</Box>
		);

	return <CircularProgress size={size} />;
};
