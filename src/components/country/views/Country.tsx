import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { CountryNews } from 'src/components/country/sections';

export const Country = () => (
	<ErrorBoundary FallbackComponent={() => null}>
		<CountryNews />
	</ErrorBoundary>
);
