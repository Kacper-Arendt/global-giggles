import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

// MATERIAL
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';

export const LangChange = () => {
	const { t } = useTranslation();
	const flagUrl = (langId: string) => `${import.meta.env.VITE_FLAG_API}/${langId === 'en' ? 'gb' : langId}.png`;
	const currentLang = i18n.language;
	const availableLangs = ['pl', 'en'];

	const handleChange = (event: SelectChangeEvent<typeof availableLangs>) => {
		const {
			target: { value },
		} = event;

		if (typeof value === 'string') i18n.changeLanguage(value);
	};

	return (
		<FormControl size="small" sx={{ minWidth: 85 }}>
			<InputLabel id="langSelect">{t('general.language')}</InputLabel>
			<Select
				labelId="langSelect"
				id="langSelect"
				autoWidth
				value={[currentLang]}
				onChange={handleChange}
				input={<OutlinedInput label="langSelect" />}
				renderValue={(selected) => (
					<Avatar
						alt={selected[0]}
						src={flagUrl(selected[0])}
						variant="rounded"
						sx={{ width: 24, height: 20, margin: 'auto' }}
					/>
				)}
			>
				{availableLangs.map((lang) => (
					<MenuItem key={lang} value={lang} selected={lang === currentLang}>
						<Avatar alt={lang} src={flagUrl(lang)} variant="rounded" sx={{ width: 24, height: 20 }} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
