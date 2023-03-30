// HOOKS

// MODELS
import { Article } from 'src/redux/slices/news/models';

// COMPONENTS
import { Modal } from 'src/coreUi/utils/Modal';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { ModalInfo } from 'src/coreUi/dataDisplay/news/elements';

// STYLES

interface ModalItemInterface {
	article: Article;
	isOpen: boolean;
	handleClose: () => void;
}

export const ModalItem = ({ article, isOpen, handleClose }: ModalItemInterface) => (
	<>
		<Modal open={isOpen} handleClose={handleClose} header={{ title: article?.title }}>
			{article.urlToImage && (
				<CardMedia
					component="img"
					height="200"
					sx={{ borderRadius: '4px' }}
					image={article.urlToImage}
					alt={article.title}
				/>
			)}
			<Box sx={{ display: 'flex', gap: '32px', paddingTop: '32px' }}>
				<Box sx={{ flex: 1 }}>{article?.content}</Box>
				<ModalInfo
					author={article.author}
					date={article.publishedAt}
					pathToArticle={article.url}
					source={article?.source?.name}
				/>
			</Box>
		</Modal>
	</>
);
