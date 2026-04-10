import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BreadSenseiTool } from '../bread-sensei/BreadSenseiTool';

export default function BreadSensei() {
  return (
    <>
      <Navigation />
      <BreadSenseiTool hubBackHref="/" />
      <Footer />
    </>
  );
}
