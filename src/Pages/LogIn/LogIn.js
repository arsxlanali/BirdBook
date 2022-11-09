import "./LogIn.css";
import Modal from "react-bootstrap/Modal";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function LogIn(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div className="card">
          <div className="row g-0 ">
            <div className="col-md-6 Signup-form">
              <div className="card-body ">
                <h4 className="card-title card-tittle">Log In</h4>
              </div>
              <div className="forms">
                <div>
                  <label for="email" class="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="jobs@example.com"
                  />
                </div>
                <div>
                  <label for="password" class="form-label">
                    Password*
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="**********"
                  />
                </div>

                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button className="btn btn-primary btn-signup" type="submit">
                  Log In{" "}
                </button>
              </div>
              <hr className="line"></hr>
              <div>
                <button
                  className="btn btn-primary btn-signupgoogle"
                  type="submit"
                >
                  <FaGoogle /> Continue with Google
                </button>
                <button
                  className="btn btn-primary btn-signupfacebook"
                  type="submit"
                >
                  <FaFacebook /> Continue with Facebook
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="./resources/dominik.webp"
                className="img-fluid rounded-start signup-image"
                alt="..."
              />
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={props.onHide}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
