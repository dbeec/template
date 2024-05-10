import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-content">
        <Sidebar />
        <Header />
      </div>
    </>
  );
}
