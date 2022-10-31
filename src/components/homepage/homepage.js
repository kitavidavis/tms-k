import { FooterPage } from '../layout/footer/footer';
import { About } from './About';
import { Banner } from './banner/banner';
import { GetInTouch } from './Contact/Contact';
import { Faq } from './FAQs/FAQ';
import { FeaturesCards } from './Features/Features';
import { EmailBanner } from './Subscribe/Subscribe';
export function HomePage() {
  return (
    <>
    <head>
      <title>Home | e-mita</title>
    </head>
      <Banner />
      <About />
      <FeaturesCards />
      <Faq />
      <GetInTouch />
    </>
  );
}