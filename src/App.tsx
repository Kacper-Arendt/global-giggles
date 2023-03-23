import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CONFIG
import 'src/config/i18nConfig';

// PROVIDERS
import { Providers } from 'src/providers';

// ROUTES
import { useRoutes } from 'src/routes';

const App = () => (
	<Providers>
		<RouterProvider router={createBrowserRouter(useRoutes())} />
	</Providers>
);

export default App;
