import { useMemo } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

// MODELS
import { possibleCountries } from 'src/redux/slices/news/models';
import { routes } from 'src/routes/routes';

// COMPONENTS
import { CountryListItem } from 'src/components/countries/sections/CountryListItem';

export const CountriesList = () => {
	const navigate = useNavigate();

	const translatedCountries = useMemo(
		() =>
			possibleCountries.map((country) => ({
				country,
			})),
		[],
	);

	return (
		<List>
			<ListSubheader sx={{ lineHeight: '1.1rem' }}>{t('browseNewsForSpecificCountry')}</ListSubheader>
			{translatedCountries?.map(({ country }) => (
				<CountryListItem
					country={country}
					onClick={() => navigate(generatePath(routes.country.short, { id: country }))}
					selected={country === 'en'}
				/>
			))}
		</List>
	);
};
