import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/scrollTop/ScrollTop";
import ToastBox from "../components/toastBox/ToastBox";

const Root = () => {
  return (
    <div>
      <ScrollTop />
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto">
        <Header />
        <main>
          <Outlet />
          <ToastBox />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
