import { t } from 'i18next';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

// MODELS
import { NewsListItemInterface } from 'src/coreUi/dataDisplay/news/views/NewsListItem';

export const CardItem = ({ article: { urlToImage, title, description } }: { article: NewsListItemInterface['article'] }) => (
	<Card sx={{ maxWidth: 345, borderRadius: '0.5rem' }}>
		<CardMedia component="img" height="174" image={urlToImage} alt={title} />
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{description}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" color="primary" variant="contained" sx={{ marginLeft: 'auto' }}>
				{t('read')}
			</Button>
		</CardActions>
	</Card>
);
