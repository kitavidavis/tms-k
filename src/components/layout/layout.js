import { Header } from './header/header';
import { HEADER_HEIGHT } from './header/header.style';
import { Toaster } from 'react-hot-toast';
import { FooterPage } from './footer/footer';
import { Outlet, useLocation } from "react-router-dom";

export function Layout({noHeader = false, noFooter=false}) {
  const location = useLocation();
  return (
  <>
    {!noHeader && !location.pathname.includes("account") ? <Header  /> : null}
    <main style={{ paddingTop: !noHeader && !location.pathname.includes("account") ? HEADER_HEIGHT : 0 }}><Outlet /></main>
    <Toaster />

    </>
  );
}