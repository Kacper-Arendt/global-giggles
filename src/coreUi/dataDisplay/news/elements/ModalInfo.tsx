// MATERIAL
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

// UTILS
import { getFirstLetters, getStringDate } from 'src/utils/helpers/string';
import { useTranslation } from 'react-i18next';

interface ModalInfoInterface {
	date: string;
	author: string;
	pathToArticle: string;
	source: string | null;
}

export const ModalInfo = ({ date, pathToArticle, author, source }: ModalInfoInterface) => {
	const { t } = useTranslation();

	return (
		<Card sx={{ flex: 1, maxWidth: 250 }}>
			<CardContent>
				<Stack spacing={1.5}>
					{author && (
						<>
							<Stack direction="row" spacing={1} alignItems="center">
								<Avatar sx={{ width: 32, height: 32 }}>{getFirstLetters(author)}</Avatar>
								<Typography variant="h6" component="h6">
									{author}
								</Typography>
							</Stack>
							<Divider />
						</>
					)}

					{source && (
						<Stack direction="row" spacing={1} alignItems="center">
							<LanguageIcon fontSize="small" />
							<Typography variant="body2">{source}</Typography>
						</Stack>
					)}

					<Stack direction="row" spacing={1} alignItems="center">
						<DateRangeIcon fontSize="small" />
						<Typography variant="body2">{getStringDate(date)}</Typography>
					</Stack>
				</Stack>
			</CardContent>
			<CardActions>
				<Button size="small" variant="contained" fullWidth href={pathToArticle} target="_blank" rel="noopener">
					{t('general.readArticle')}
				</Button>
			</CardActions>
		</Card>
	);
};
