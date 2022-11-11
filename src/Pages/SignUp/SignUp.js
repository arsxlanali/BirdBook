import "./SignUp.css";

import Modal from "react-bootstrap/Modal";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignUp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div className=" card">
          <div className="row g-0 ">
            <div className="col-md-6 Signup-form">
              <div className="card-body ">
                <h4 className="card-title card-tittle">Sign Up</h4>
              </div>
              <div className="forms">
                <div>
                  <label for="username" class="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Steve Jobs"
                  />
                </div>
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
                <div>
                  <label for="retype password" class="form-label">
                    Re-Type Password*
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="retype password"
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
                    By Clicking the button your are agreeing to term and
                    serveces of our company
                  </label>
                </div>
                <button className="btn btn-primary btn-signup" type="submit">
                  SignUp
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
            <div className="col-md-6 ">
              <img
                src="./resources/dominik.webp"
                className="img-fluid rounded-start signup-image"
                alt="..."
              />
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={props.onHide}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
