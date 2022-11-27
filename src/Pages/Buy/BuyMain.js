import React, { useEffect } from "react";
import Buy from "./Buy";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAdvertisement } from "../../redux/Slice/advertisementSlice";

const MainBuy = () => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.advertisement.advertisements);

  //   const add = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAdvertisement());
  }, [dispatch]);
  const buymod = add.map((temp) => <Buy {...temp} />);

  return (
    <main className="buy-div">
      <div className="buy-div-top">
        <Link to="/Ecomerce/Sell">
          <Button variant="contained" className="btn btn-primary btn-md">
            Sell Your Bird
          </Button>
        </Link>
      </div>
      {buymod}
    </main>
  );
};

export default MainBuy;
