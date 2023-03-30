import { ReactNode } from 'react';

// MATERIAL
import Typography from '@mui/material/Typography';
import MaterialModal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const StyledBox = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.palette.background.paper};
	border: 1px solid ${({ theme }) => theme.palette.background.default};
	border-radius: 0.5rem;
`;

const StyledContainer = styled(Box)`
	padding: 1rem 1.25rem;
`;

interface ModalInterface {
	open: boolean;
	handleClose: () => void;
	header?: {
		title?: string;
	};
	children: ReactNode;
}

export const Modal = ({ open, handleClose, header, children }: ModalInterface) => (
	<MaterialModal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
		<StyledBox>
			{header?.title && (
				<>
					<StyledContainer>
						<Typography variant="subtitle1" sx={{ lineHeight: '1.4rem' }} color="text.primary">
							{header?.title}
						</Typography>
					</StyledContainer>
					<Divider />
				</>
			)}
			<StyledContainer>{children}</StyledContainer>
		</StyledBox>
	</MaterialModal>
);
