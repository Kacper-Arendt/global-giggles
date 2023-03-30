import { ErrorBoundary } from 'react-error-boundary';

// MATERIAL
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// MODELS
import { Article } from 'src/redux/slices/news/models';
import { InitialGlobalStateInterface } from 'src/redux/slices/global';

// COMPONENTS
import { NewsListItem } from 'src/coreUi/dataDisplay/news/sections/NewsListItem';
import { useState } from 'react';
import { ModalItem } from 'src/coreUi/dataDisplay/news/items/ModalItem';

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

export const NewsList = ({ variant, articles }: NewsListInterface) => {
	const [item, setItem] = useState<null | Article>(null);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			{item && <ModalItem article={item} isOpen handleClose={() => setItem(null)} />}

			<StyledBox>
				{articles?.map((article) => (
					<ErrorBoundary FallbackComponent={() => null} key={article?.url}>
						<NewsListItem variant={variant} article={article} onClick={() => setItem(article)} />
					</ErrorBoundary>
				))}
			</StyledBox>
		</ErrorBoundary>
	);
};
