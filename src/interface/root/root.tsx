import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import "./root.css";

export default function MainContent() {
  return (
    <>
      <div className="content-main">
        <Sidebar />

        <div className="content-header">
          <Header />
          <div className="outlet-properties">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
