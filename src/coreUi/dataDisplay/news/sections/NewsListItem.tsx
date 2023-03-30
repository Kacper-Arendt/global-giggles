import { ErrorBoundary } from 'react-error-boundary';

// MODELS
import { Article } from 'src/redux/slices/news/models';
import { InitialGlobalStateInterface } from 'src/redux/slices/global';

// COMPONENTS
import { ListItem } from 'src/coreUi/dataDisplay/news/items/ListItem';
import { CardItem } from 'src/coreUi/dataDisplay/news/items';

export interface NewsListItemInterface {
	variant?: InitialGlobalStateInterface['listStyle'];
	article: Article;
	onClick: () => void;
}

export const NewsListItem = ({ variant, article, onClick }: NewsListItemInterface) => (
	<ErrorBoundary FallbackComponent={() => null}>
		{variant === 'list' ? (
			<ListItem article={article} onClick={onClick} />
		) : (
			<CardItem article={article} onClick={onClick} />
		)}
	</ErrorBoundary>
);
