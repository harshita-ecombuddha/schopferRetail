import SnapScrollWrapper from "./components/SnapScrollWrapper";
import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Main from "./components/Main";
import ProblemsCard from "./components/ProblemsCard";
import FeatureTabs from "./components/FeatureTabs";
import Founder from "./components/Founder";
import FAQs from "./components/FAQs"
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <>
      <Navbar />
      {/* <SocialBar /> */}
      <SnapScrollWrapper>
        <Main />
        <ProblemsCard />
        <FeatureTabs />
        <Process />
        <FAQs />
        <Founder />
        <Testimonials />
        <Footer />
      </SnapScrollWrapper>
      </>
  );
}
