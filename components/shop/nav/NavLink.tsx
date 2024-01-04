import Link from 'next/link';
import { linkStyle } from '@/styles/theme';

function NavLink({
  path,
  asPath,
  title,
}: {
  path: string;
  asPath: string;
  title: string;
}) {
  return (
    <Link
      className={linkStyle + ' text-lg md:block'}
      href={'/' + asPath.split('/')[1] + path}
    >
      {title}
    </Link>
  );
}

export default NavLink;
