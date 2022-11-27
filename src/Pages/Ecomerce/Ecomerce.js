import { Row, Col, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Ecomerce.scss";
// import Buy from "../Buy/Buy";

export default function Ecomerce() {
  return (
    <>
      <div>
        <aside className="sidebar body">
          <div className="div1">
            <h3 className="heading1">Filters</h3>
            <div className="buy-filters">
              <form>
                <div className="my-1">
                  <label htmlFor="color" className="form-label input">
                    Color
                  </label>
                  <input
                    id="color"
                    type="text"
                    name="color"
                    className="form-control"
                    placeholder="Blue"
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="city" className="form-label input">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="San Fransisco"
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="age" className="form-label input">
                    Age
                  </label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="2"
                  />
                </div>

                <div className="my-1">
                  <label htmlFor="ecology" className="form-label input">
                    Ecological Factor
                  </label>
                  <input
                    id="ecology"
                    type="text"
                    name="ecology"
                    className="form-control"
                    placeholder="Ecological Fcator"
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="gender" className="form-label input">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-control"
                    placeholder="Male/Female Bird"
                  >
                    <option value="" disabled selected hidden>
                      Male/Female Bird
                    </option>
                    <option value="male">Male Bird</option>
                    <option value="female">Female Bird</option>
                  </select>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  style={{ marginTop: "20px", width: "100px" }}
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        </aside>
        <Outlet />
      </div>
    </>
  );
}
