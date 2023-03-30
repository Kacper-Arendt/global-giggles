import MaterialListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { ErrorBoundary } from 'react-error-boundary';

// MODELS
import { NewsListItemInterface } from 'src/coreUi/dataDisplay/news/sections/NewsListItem';

type ListItemType = Pick<NewsListItemInterface, 'article' | 'onClick'>;

export const ListItem = ({ article: { author, urlToImage, title }, onClick }: ListItemType) => (
	<ErrorBoundary FallbackComponent={() => null}>
		<MaterialListItem
			sx={{
				alignItems: 'center',
				justifyContent: 'center',
				p: 0,
			}}
		>
			<ListItemButton
				sx={{
					bgcolor: 'background.paper',
					borderRadius: 2,
					padding: '10px',
				}}
				onClick={onClick}
			>
				<ListItemAvatar>
					<Avatar alt={title} src={urlToImage} variant="square">
						<NewspaperIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={title}
					primaryTypographyProps={{ color: 'text.primary' }}
					secondaryTypographyProps={{ color: 'text.secondary' }}
					secondary={
						<Typography component="span" variant="body2" color="text.secondary">
							{author}
						</Typography>
					}
				/>
			</ListItemButton>
		</MaterialListItem>
	</ErrorBoundary>
);
