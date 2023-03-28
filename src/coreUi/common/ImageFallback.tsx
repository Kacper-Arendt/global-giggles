// MATERIAL
import Box from '@mui/material/Box';
import { css, styled } from '@mui/material/styles';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

interface ImageFallbackInterface {
	height?: string;
}

const StyledBox = styled(Box)<ImageFallbackInterface>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.palette.background.paper};
	font-size: 3.5rem;

	${({ height }) =>
		height &&
		css`
			height: ${height};
		`};
`;

export const ImageFallback = ({ height = 'auto' }: ImageFallbackInterface) => (
	<StyledBox height={height}>
		<BrokenImageIcon fontSize="inherit" />
	</StyledBox>
);
