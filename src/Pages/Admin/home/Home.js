import Sidebar from "../../../Components/Sidebar/SidebarAdmin";
import Navbar from "../../../Components/NavBar/NavbarAdmin";
import "./home.scss";
import Widget from "../../../Components/widget/Widget";
import Featured from "../../../Components/featured/Featured";
import Chart from "../../../Components/chart/Chart";
import Table from "../../../Components/table/Table";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Home;
