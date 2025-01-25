import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Layout;
