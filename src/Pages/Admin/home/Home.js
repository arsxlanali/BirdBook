import "./home.scss";
import Datatable from "../../../Components/datatable/Datatable";

const Home = () => {
  return (
    <>
      <div
        className="homeContainer"
        style={{
          // width: "800px",
          marginLeft: "260px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="listContainer" style={{ marginTop: "100px" }}>
          <div className="listTitle">User Name:</div>
          {/* <Table /> */}
          <Datatable />
        </div>
      </div>
    </>
  );
};

export default Home;
