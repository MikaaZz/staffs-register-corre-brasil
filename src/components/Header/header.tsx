import React from 'react';

import Link from 'next/link';
import Logo_correBrasil from '../../assets/Logo_correBrasil';
import './header.css';
import { Grid } from '@mui/material';

interface NavButtonProps {
  buttonText: string;
  buttonLink: string;
}
interface HeaderProps {
  buttonData: {
    buttonText: string;
    buttonLink: string;
  }[];
}

const NavButton: React.FC<NavButtonProps> = ({ buttonText, buttonLink }) => {
  return (
    <Link href={buttonLink} className="main-header__links">
      {buttonText}
    </Link>
  );
};

export const Header: React.FC<HeaderProps> = ({ buttonData }) => {
  return (
    <Grid component={'header'} className="main-header">
      <Grid className="main-header__content">
        <Logo_correBrasil />
        <Grid component={'nav'} className="main-header__navigation">
          {buttonData.map((data, index) => (
            <NavButton
              key={index}
              buttonText={data.buttonText}
              buttonLink={data.buttonLink}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
