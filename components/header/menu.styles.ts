import { SxProps, Theme } from '@mui/system';
import { keyframes } from '@mui/material';

const pulse = keyframes`
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
`;

export const IconButtonStyled: SxProps<Theme> = {
	animation: `${pulse} 1s infinite`
}

export const MenuStyled: SxProps<Theme> = {
	mt: '30px',
	animation: `fade-in 0.5s ease-in-out`
}