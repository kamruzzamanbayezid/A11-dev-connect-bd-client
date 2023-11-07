import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Outlet/>
                  <Footer></Footer>
            </div>
      );
};

export default Root;