import Link from 'next/link';

const links = [
  {
    href: '/client',
    label: 'Client',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/drinks',
    label: 'Drinks',
  },
  {
    href: '/prisma-example',
    label: 'Prisma',
  },
  {
    href: '/tasks',
    label: 'Tasks',
  },
];

const renderedLinks = links.map((link, i) => {
  return (
    <li key={i} className='capitalize'>
      <Link href={link.href}>{link.label}</Link>
    </li>
  );
});

const Navbar = () => {
  return (
    <nav className='bg-base-300 py-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
          Next.js
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>{renderedLinks}</ul>
      </div>
    </nav>
  );
};
export default Navbar;
