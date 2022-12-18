import type { ReactNode } from 'react';
import { Header } from './header';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => <main>{children}</main>;
