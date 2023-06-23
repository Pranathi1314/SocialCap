import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import SupplierSignIn from "./pages/SupplierSignIn";
import ProducerSignIn from "./pages/ProducerSignIn";
import ConsumerSignIn from "./pages/ConsumerSignIn";
import SupplierProfile from "./pages/SupplierProfile";
import ProducerEditProducts from "./pages/ProducerEditProducts";
import ProducerProdcuts from "./pages/ProducerProdcuts";
import SupplierEditProfile from "./pages/SupplierEditProfile";
import ProducerEditProfile from "./pages/ProducerEditProfile";
import ProducerAcceptOrder from "./pages/ProducerAcceptOrder";
import SupplierAcceptOrder from "./pages/SupplierAcceptOrder";
import ProducerProfile from "./pages/ProducerProfile";
import AddProducts from "./pages/AddProducts";
import ProducerLandingPage from "./pages/ProducerLandingPage";
import SupplierLandingPage from "./pages/SupplierLandingPage";
import ConsumerLandingPage from "./pages/ConsumerLandingPage";
import Role from "./pages/Role";
import LoginPage from "./pages/LoginPage";
import ConsumerSearch from "./pages/ConsumerSearch";
import ConsumerAbout from "./pages/ConsumerAbout";
import ConsumerEditDetails from "./pages/ConsumerEditDetails";
import ConsumerMyCart from "./pages/ConsumerMyCart";
import ConsumerMyProfile from "./pages/ConsumerMyProfile";
import ConsumerNewBrands from "./pages/ConsumerNewBrands";
import ConsumerPopularBranda from "./pages/ConsumerPopularBranda";
import ConsumerPopularBrandsAmul from "./pages/ConsumerPopularBrandsAmul";
import Offers from "./pages/Offers";
import ConsumerSocietySignIn from "./pages/ConsumerSocietySignIn";

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
      case "/supplier-profile":
        title = "";
        metaDescription = "";
        break;
      case "/producer-edit-products":
        title = "";
        metaDescription = "";
        break;
      case "/producer-prodcuts":
        title = "";
        metaDescription = "";
        break;
      case "/add-products":
        title = "";
        metaDescription = "";
        break;
      case "/supplier-edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/producer-edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/producer-accept-order":
        title = "";
        metaDescription = "";
        break;
      case "/supplier-accept-order":
        title = "";
        metaDescription = "";
        break;
      case "/producer-profile":
        title = "";
        metaDescription = "";
        break;
      case "/producer-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/supplier-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-landing-page":
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
      case "/consumer-my-cart":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-about":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-my-profile":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-new-brands":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-popular-branda":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-popular-brands-amul":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-society-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/offers":
        title = "";
        metaDescription = "";
        break;
      case "/role":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
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
      <Route path="/" element={<FrameComponent />} />
      <Route path="/supplier-sign-in" element={<SupplierSignIn />} />
      <Route path="/producer-sign-in" element={<ProducerSignIn />} />
      <Route path="/consumer-sign-in" element={<ConsumerSignIn />} />
      <Route path="/supplier-profile" element={<SupplierProfile />} />
      <Route
        path="/producer-edit-products"
        element={<ProducerEditProducts />}
      />
      <Route path="/producer-prodcuts" element={<ProducerProdcuts />} />
      <Route path="/supplier-edit-profile" element={<SupplierEditProfile />} />
      <Route path="/producer-edit-profile" element={<ProducerEditProfile />} />
      <Route path="/producer-accept-order" element={<ProducerAcceptOrder />} />
      <Route path="/supplier-accept-order" element={<SupplierAcceptOrder />} />
      <Route path="/producer-profile" element={<ProducerProfile />} />
      <Route path="/producer-landing-page" element={<ProducerLandingPage />} />
      <Route path="/add-products" element={<AddProducts/>} />
      <Route path="/supplier-landing-page" element={<SupplierLandingPage />} />
      <Route path="/consumer-landing-page" element={<ConsumerLandingPage />} />
      <Route path="/consumer-search" element={<ConsumerSearch/>} />
      <Route path="/consumer-edit-details" element={<ConsumerEditDetails/>} />
      <Route path="/consumer-my-cart" element={<ConsumerMyCart/>} />
      <Route path="/consumer-about" element={<ConsumerAbout/>} />
      <Route path="/consumer-my-profile" element={<ConsumerMyProfile/>} />
      <Route path="/consumer-new-brands" element={<ConsumerNewBrands/>} />
      <Route path="/consumer-popular-branda" element={<ConsumerPopularBranda/>} />
      <Route path="/consumer-new-brands" element={<ConsumerPopularBrandsAmul/>} />
      <Route path="/offers" element={<Offers/>} />
      <Route path="/consumer-society-sign-in" element={<ConsumerSocietySignIn/>} />
      <Route path="/role" element={<Role />} />
      <Route path="/login-page" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
