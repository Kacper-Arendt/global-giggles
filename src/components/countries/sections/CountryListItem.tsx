import i18next from 'i18next';

// MATERIAL
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

// HOOKS
import { useTranslatedLang } from 'src/utils/hooks/useTranslatedLang';

// HELPERs
import { capitalize } from 'src/utils/helpers/string';

interface CountryListItemInterface {
	country: string;
	selected: boolean;
	onClick: () => void;
}

export const CountryListItem = ({ country, selected, onClick }: CountryListItemInterface) => {
	const flagUrl = `${import.meta.env.VITE_FLAG_API}/${country === 'en' ? 'gb' : country}.png`;
	const currentLang = i18next.language;
	const { getTranslatedLang } = useTranslatedLang();
	const translatedLang = getTranslatedLang({ lang: country, translateTo: currentLang });

	return (
		<ListItem key={country} disablePadding>
			<ListItemButton selected={selected} sx={{ paddingBottom: 0, paddingTop: 0 }} onClick={onClick}>
				<ListItemAvatar sx={{ minWidth: '2.25rem' }}>
					<Avatar alt={translatedLang ?? country} src={flagUrl} variant="rounded" sx={{ width: 24, height: 20 }}>
						{country}
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary={capitalize(translatedLang)} />
			</ListItemButton>
		</ListItem>
	);
};
