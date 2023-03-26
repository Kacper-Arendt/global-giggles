import { ErrorBoundary } from 'react-error-boundary';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// HOOKS
import { useAppSelector } from 'src/redux/hooks';
import { selectNews } from 'src/redux/slices/news';
import { selectGlobal } from 'src/redux/slices/global';

// COMPONENTS
import { NewsListItem } from 'src/coreUi/dataDisplay/news';

const StyledBox = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 1rem;
`;

export const NewsList = () => {
	const { articles } = useAppSelector(selectNews);
	const { listStyle } = useAppSelector(selectGlobal);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<StyledBox>
				{articles?.map((article) => (
					<ErrorBoundary FallbackComponent={() => null} key={article?.url}>
						<NewsListItem variant={listStyle} article={article} />
					</ErrorBoundary>
				))}
			</StyledBox>
		</ErrorBoundary>
	);
};
