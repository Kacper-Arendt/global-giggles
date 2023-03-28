import { ErrorBoundary } from 'react-error-boundary';

// MATERIAL
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// MODELS
import { Article } from 'src/redux/slices/news/models';
import { InitialGlobalStateInterface } from 'src/redux/slices/global';

// COMPONENTS
import { NewsListItem } from 'src/coreUi/dataDisplay/news/sections/NewsListItem';

const StyledBox = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 1rem;
`;

interface NewsListInterface {
	articles: Article[];
	variant: InitialGlobalStateInterface['listStyle'];
}

export const NewsList = ({ variant, articles }: NewsListInterface) => (
	<ErrorBoundary FallbackComponent={() => null}>
		<StyledBox>
			{articles?.map((article) => (
				<ErrorBoundary FallbackComponent={() => null} key={article?.url}>
					<NewsListItem variant={variant} article={article} />
				</ErrorBoundary>
			))}
		</StyledBox>
	</ErrorBoundary>
);
