import { useTranslation } from 'react-i18next';
import { useState, MouseEvent } from 'react';

// MATERIAL
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export const HeaderPopover = () => {
	const { t } = useTranslation();
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'HeaderPopover' : undefined;
	return (
		<>
			<Button aria-describedby={id} variant="outlined" onClick={handleClick}>
				{t('general.clickMe')}
			</Button>

			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Stack spacing={2} sx={{ padding: 2, maxWidth: 350 }}>
					<Stack direction="row" spacing={2}>
						<ThumbDownAltIcon />
						<Typography component="span" variant="body2" color="text.primary">
							{t('general.difficulty')}
						</Typography>
					</Stack>

					<Divider />

					<Stack direction="row" spacing={2}>
						<ThumbUpAltIcon />
						<Typography component="span" variant="body2" color="text.primary">
							{t('general.fun')}
						</Typography>
					</Stack>
				</Stack>
			</Popover>
		</>
	);
};
