// LAYOUT
import { MainLayout } from 'src/layouts';

// ROUTES
import { routes } from 'src/routes/routes';

// COMPONENTS
import { News } from 'src/components/news';
import { Country } from 'src/components/country';

export const publicRoutes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <News />,
			},
			{
				path: routes.country.short,
				element: <Country />,
			},
		],
	},
];
