import { ErrorBoundary } from 'react-error-boundary';

// MATERIAL
import MaterialListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Stack from '@mui/material/Stack';
import LanguageIcon from '@mui/icons-material/Language';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// MODELS
import { NewsListItemInterface } from 'src/coreUi/dataDisplay/news/sections/NewsListItem';

// HELPERS
import { getStringDate } from 'src/utils/helpers/string';

type ListItemType = Pick<NewsListItemInterface, 'article' | 'onClick'>;

export const ListItem = ({ article: { author, urlToImage, title, source, publishedAt }, onClick }: ListItemType) => (
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
					primaryTypographyProps={{ color: 'text.primary' }}
					secondaryTypographyProps={{ color: 'text.secondary' }}
					primary={title}
					secondary={
						<Stack direction="row" spacing={2}>
							<Stack direction="row" spacing={1}>
								<AccountCircleIcon fontSize="small" />
								<Typography component="span" variant="body2" color="text.secondary">
									{author}
								</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<DateRangeIcon fontSize="small" />
								<Typography component="span" variant="body2" color="text.secondary">
									{getStringDate(publishedAt)}
								</Typography>
							</Stack>
							{source && (
								<Stack direction="row" spacing={1}>
									<LanguageIcon fontSize="small" />
									<Typography component="span" variant="body2" color="text.secondary">
										{source.name}
									</Typography>
								</Stack>
							)}
						</Stack>
					}
				/>
			</ListItemButton>
		</MaterialListItem>
	</ErrorBoundary>
);
