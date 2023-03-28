import { useMemo } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

// MATERIAL
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

// MODELS
import { possibleCountries } from 'src/redux/slices/news/models';
import { routes } from 'src/routes/routes';

// COMPONENTS
import { CountryListItem } from 'src/components/countries/sections/CountryListItem';
import { useTranslation } from 'react-i18next';

export const CountriesList = () => {
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
					selected={country === 'en'}
				/>
			))}
		</List>
	);
};
