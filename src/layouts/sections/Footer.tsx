import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useCurrentHoursAndMinutes } from 'src/utils/hooks/useCurrentTime';
import { t } from 'i18next';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'src/redux/hooks';
import { selectNews } from 'src/redux/slices/news';

const StyledFooter = styled(Box)`
	grid-area: footer;

	display: flex;
	justify-content: center;
	column-gap: 1rem;
	align-items: center;

	padding: 0.5rem;
	border-top: 2px solid ${({ theme }) => theme.palette.background.paper};
	color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Footer = () => {
	const currentTime = useCurrentHoursAndMinutes();
	const { articles } = useAppSelector(selectNews);
	const articlesCount = articles?.length;

	return (
		<StyledFooter>
			<Typography variant="subtitle2">
				{t('totalArticles')}: {articlesCount}
			</Typography>
			<Typography variant="subtitle2">
				{t('time')}: {currentTime}
			</Typography>
		</StyledFooter>
	);
};
