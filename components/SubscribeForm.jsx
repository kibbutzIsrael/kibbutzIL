import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

 
function SubscribeForm({ subscribe, status, message }) {
  const emailRef = useRef();
  useEffect(() => {
    console.log(status, message);
    if (status === "success") {
      emailRef.current.value = "";
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (status === "error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [status, message]);
  return (
    <div className="subscribe-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          subscribe({ EMAIL: e.target.EMAIL.value });
        }}
      >
        <div className="input-group">
          <input
            ref={emailRef}
            type="email"
            id="mce-EMAIL"
            name="EMAIL"
            className="form-control required"
            required
            placeholder="Your Email Address"
          />
          <button
            id="subscribe-form-submit"
            name="subscribe-form-submit"
            className="btn btn-dark px-4 shadow-none"
            type="submit"
          >
            <span className="d-none d-sm-block">
              {status === "sending" ? (
                <i
                  role="status"
                  aria-hidden="true"
                  className="spinner-border spinner-border-sm"
                ></i>
              ) : (
                <>{"Subscribe"}</>
              )}
            </span>
            <span className="text-4 d-block d-sm-none">
              <i className="fas fa-paper-plane" />
            </span>
          </button>
        </div>
      </form>
      <div className="subscribe-form-result mt-3" />
    </div>
  );
}

export default SubscribeForm;
