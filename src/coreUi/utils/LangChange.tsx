import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

// MATERIAL
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';

// HOOKS
import { useTranslatedLang } from 'src/utils/hooks/useTranslatedLang';

// HELPERS
import { capitalize } from 'src/utils/helpers/string';
import { findObjectInArray } from 'src/utils/helpers/array';

export const LangChange = () => {
	const { t } = useTranslation();
	const flagUrl = (langId: string) => `${import.meta.env.VITE_FLAG_API}/${langId === 'en' ? 'gb' : langId}.png`;
	const { getTranslatedLang } = useTranslatedLang();
	const currentLang = i18n.language;
	const availableLangs = ['pl', 'en'];

	const langs = availableLangs.map((lang) => ({ id: lang, value: getTranslatedLang({ lang }) }));
	const handleChange = (event: SelectChangeEvent<typeof availableLangs>) => {
		const {
			target: { value },
		} = event;
		const item = findObjectInArray(langs, 'value', value);

		if (item) i18n.changeLanguage(item.id);
	};

	return (
		<FormControl sx={{ padding: '0.25rem' }}>
			<InputLabel id="langSelect">{t('general.language')}</InputLabel>
			<Select
				labelId="langSelect"
				id="langSelect"
				value={[getTranslatedLang({ lang: currentLang })]}
				onChange={handleChange}
				input={<OutlinedInput label="langSelect" />}
				renderValue={(selected) => selected}
			>
				{langs.map(({ id, value }) => (
					<MenuItem key={id} value={value} selected={value === currentLang}>
						<Avatar alt={value} src={flagUrl(id)} variant="rounded" sx={{ width: 24, height: 20 }}>
							{value}
						</Avatar>
						<ListItemText primary={capitalize(value)} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
