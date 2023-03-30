// MATERIAL
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

// MODELS
import { NewsListItemInterface } from 'src/coreUi/dataDisplay/news/sections/NewsListItem';

// COMPONENTS
import { ImageFallback } from 'src/coreUi/common';

const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	max-width: 21.5rem;
	border-radius: 0.5rem;
`;

const StyledCardActions = styled(CardActions)`
	margin-top: auto;
	margin-left: auto;
`;

type ListItemType = Pick<NewsListItemInterface, 'article' | 'onClick'>;

export const CardItem = ({ article: { urlToImage, title, description }, onClick }: ListItemType) => {
	const { t } = useTranslation();

	return (
		<StyledCard>
			{urlToImage ? (
				<CardMedia component="img" height="174" image={urlToImage} alt={title} />
			) : (
				<ImageFallback height="174px" />
			)}
			<CardContent>
				<Typography gutterBottom variant="subtitle1" sx={{ lineHeight: '1.4rem' }} color="text.primary">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<StyledCardActions>
				<Button size="small" color="primary" variant="contained" onClick={onClick}>
					{t('general.read')}
				</Button>
			</StyledCardActions>
		</StyledCard>
	);
};
