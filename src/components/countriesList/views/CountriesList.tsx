import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

// MATERIAL
import List from '@mui/material/List';

import ListSubheader from '@mui/material/ListSubheader';

// MODELS
import { possibleCountries } from 'src/redux/slices/news/models';

import { routes } from 'src/routes/routes';

// COMPONENTS
import { CountryListItem } from 'src/components/countriesList/sections';

export const CountriesList = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const translatedCountries = useMemo(
		() =>
			possibleCountries.map((country) => ({
				country,
			})),
		[],
	);

	return (
		<List>
			<ListSubheader sx={{ lineHeight: '1.1rem' }}>{t('general.browseNewsForSpecificCountry')}</ListSubheader>
			{translatedCountries?.map(({ country }) => (
				<CountryListItem
					key={country}
					country={country}
					onClick={() => navigate(generatePath(routes.country.short, { id: country }))}
					selected={country === id}
				/>
			))}
		</List>
	);
};
