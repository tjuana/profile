import React from 'react';
import { Button, Hidden } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';

const NavigationButtons = ({ navigation }) => (
  <Hidden mdDown>
    {/* Display only on devices with resolution greater than or equal to "md" */}
    <Button
      color="inherit"
      startIcon={<HomeIcon />}
      href={navigation?.['Home']?.href}
    >
      {navigation?.['Home']?.title || 'Home2'}
    </Button>
    <Button
      color="inherit"
      startIcon={<InfoIcon />}
      href={navigation?.['About']?.href}
    >
      {navigation?.['About']?.title || 'About2'}
    </Button>
    <Button
      color="inherit"
      startIcon={<WorkIcon />}
      href={navigation?.['Projects']?.href}
    >
      {navigation?.['Projects']?.title || 'Projects2'}
    </Button>
  </Hidden>
);

export default NavigationButtons;
