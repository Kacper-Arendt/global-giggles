import { Dashboard } from 'src/components/dashboard';
import { MainLayout } from 'src/coreUi/layouts';

export const publicRoutes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
		],
	},
];
