import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LogoType = {
  logoType?: 'n' | 'd';
  [rest: string]: any;
};

const logoSrc = {
  n: '/logo.png',
  d: '/logo_dark.png',
};

const AppLogo = ({ logoType = 'n', ...rest }: LogoType) => {
  return (
    <Link href='/' className='min-h-[50px]'>
      <Image
        alt='logo'
        src={logoType === 'n' ? logoSrc.n : logoSrc.d}
        width='100'
        height='50'
        style={{ objectFit: 'contain' }}
        {...rest}
      />
    </Link>
  );
};

export default AppLogo;
