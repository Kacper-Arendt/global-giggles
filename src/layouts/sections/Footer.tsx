import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// HOOKS
import { useCurrentHoursAndMinutes } from 'src/utils/hooks/useCurrentTime';
import { useAppSelector } from 'src/redux/hooks';
import { selectNews } from 'src/redux/slices/news';

const StyledFooter = styled('footer')`
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
	const { allArticles } = useAppSelector(selectNews);
	const articlesCount = allArticles?.length;
	const { t } = useTranslation();

	return (
		<StyledFooter>
			<Typography variant="subtitle2">
				{t('general.totalArticles')}: {articlesCount}
			</Typography>
			<Typography variant="subtitle2">
				{t('general.time')}: {currentTime}
			</Typography>
		</StyledFooter>
	);
};
