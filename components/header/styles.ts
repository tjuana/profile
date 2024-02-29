import { SxProps, Theme } from '@mui/system';

const gradientColors = ['#81C784', '#64B5F6', '#4CAF50', '#ef5729', '#81C784', '#FFD54F', '#9575CD'];

export const appBarStyles: SxProps<Theme> = {
	background: `linear-gradient(135deg, ${gradientColors.join(', ')})`
};

export const addReactionIconStyles: SxProps<Theme> = {
  marginRight: 2,
  '&:hover': {
    cursor: 'pointer',
  },
};

export const siteNameStyles: SxProps<Theme> = {
  flexGrow: 1,
};
export const BoxStyles: SxProps<Theme> = {
  flexGrow: 1,
};
