import { ErrorBoundary } from 'react-error-boundary';

// MODELS
import { Article } from 'src/redux/slices/news/models';
import { InitialGlobalStateInterface } from 'src/redux/slices/global';

// COMPONENTS
import { ListItem } from 'src/coreUi/dataDisplay/news/sections/ListItem';
import { CardItem } from 'src/coreUi/dataDisplay/news/sections';

export interface NewsListItemInterface {
	variant?: InitialGlobalStateInterface['listStyle'];
	article: Article;
}

export const NewsListItem = ({ variant, article }: NewsListItemInterface) => (
	<ErrorBoundary FallbackComponent={() => null}>
		{variant === 'list' ? <ListItem article={article} /> : <CardItem article={article} />}
	</ErrorBoundary>
);
