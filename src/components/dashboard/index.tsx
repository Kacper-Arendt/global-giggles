// HOOKS

// MODELS

// COMPONENTS
import { Button } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

// STYLES


export const Dashboard = () => {
	console.log();
	return (
		<ErrorBoundary FallbackComponent={()=> null}>
			<Button variant="contained">Contained</Button>
		</ErrorBoundary>
	);
};