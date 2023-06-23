import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConsumerPopularBranda from "./pages/ConsumerPopularBranda";
import ConsumerSearch from "./pages/ConsumerSearch";
import ConsumerEditDetails from "./pages/ConsumerEditDetails";
import ConsumerAbout from "./pages/ConsumerAbout";
import Offers from "./pages/Offers";
import ConsumerMyCart from "./pages/ConsumerMyCart";
import ConsumerMyProfile from "./pages/ConsumerMyProfile";
import ConsumerPopularBrandsAmul from "./pages/ConsumerPopularBrandsAmul";
import ConsumerSocietySignIn from "./pages/ConsumerSocietySignIn";
import ConsumerNewBrands from "./pages/ConsumerNewBrands";
import SupplierSignIn from "./pages/SupplierSignIn";
import ProducerSignIn from "./pages/ProducerSignIn";
import ConsumerSignIn from "./pages/ConsumerSignIn";
import Role from "./pages/Role";
import ConsumerLandingPage from "./pages/ConsumerLandingPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-search":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-edit-details":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-about":
        title = "";
        metaDescription = "";
        break;
      case "/offers":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-my-cart":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-my-profile":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-popular-brandsamul":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-society-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-new-brands":
        title = "";
        metaDescription = "";
        break;
      case "/supplier-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/producer-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/role":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ConsumerPopularBranda />} />
      <Route path="/consumer-search" element={<ConsumerSearch />} />
      <Route path="/consumer-edit-details" element={<ConsumerEditDetails />} />
      <Route path="/consumer-about" element={<ConsumerAbout />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/consumer-my-cart" element={<ConsumerMyCart />} />
      <Route path="/consumer-my-profile" element={<ConsumerMyProfile />} />
      <Route
        path="/consumer-popular-brandsamul"
        element={<ConsumerPopularBrandsAmul />}
      />
      <Route
        path="/consumer-society-sign-in"
        element={<ConsumerSocietySignIn />}
      />
      <Route path="/consumer-new-brands" element={<ConsumerNewBrands />} />
      <Route path="/supplier-sign-in" element={<SupplierSignIn />} />
      <Route path="/producer-sign-in" element={<ProducerSignIn />} />
      <Route path="/consumer-sign-in" element={<ConsumerSignIn />} />
      <Route path="/role" element={<Role />} />
      <Route path="/consumer-landing-page" element={<ConsumerLandingPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}
export default App;
