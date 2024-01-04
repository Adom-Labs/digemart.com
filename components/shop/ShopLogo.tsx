import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import useShop from '@/providers/ShopProvider';

type LogoType = {
  url?: string;
  [rest: string]: any;
};

const defaultLogoSrc = '/logo_night.png';

const ShopLogo = ({ url = 'n', ...rest }: LogoType) => {
  const { asPath } = useRouter();
  const { logo } = useShop();

  return (
    <Link href={'/' + asPath.split('/')[1]}>
      <Image
        alt='logo'
        src={logo ?? defaultLogoSrc}
        width='110'
        height='50'
        style={{ objectFit: 'contain' }}
        {...rest}
      />
    </Link>
  );
};

export default ShopLogo;
