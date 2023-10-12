import { Outlet } from "react-router-dom";
import logoWhite from "../assets/logo-white.svg";
import { useState } from "react";

const WebUIDesignLayout = () => {
  const [isMenu, setIsMenu] = useState(false);

  const onClickMenu = () => {
    setIsMenu((prev) => !prev);
  };
  return (
    <div
      className={`webui-design-layout-container bg-color-primary text-white ${
        isMenu ? "overflow-hidden" : ""
      }`}
    >
      <nav className="d-flex justify-content-between px-2 px-lg-5 py-2 navbar sticky-top">
        <div className="d-flex align-items-center gap-3 logo-container">
          <img src={logoWhite} className="logo-white" />
          <span>|</span>
          <span>Developers</span>
        </div>

        <div>
          <div className="d-lg-none">
            <svg
              onClick={onClickMenu}
              className="hamburger"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              stroke="#eee"
              strokeWidth=".6"
              fill="rgba(0,0,0,0)"
              strokeLinecap="round"
            >
              <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                <animate
                  dur="0.2s"
                  attributeName="d"
                  values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                  fill="freeze"
                  begin="start.begin"
                />
                <animate
                  dur="0.2s"
                  attributeName="d"
                  values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                  fill="freeze"
                  begin="reverse.begin"
                />
              </path>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="2s"
                  id="reverse"
                  attributeName="width"
                  begin="click"
                />
              </rect>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="0.001s"
                  id="start"
                  attributeName="width"
                  values="10;0"
                  fill="freeze"
                  begin="click"
                />
                <animate
                  dur="0.001s"
                  attributeName="width"
                  values="0;10"
                  fill="freeze"
                  begin="reverse.begin"
                />
              </rect>
            </svg>
            {isMenu && (
              <div className="mobile-menu-container text-dark">
                <div className="d-flex d-lg-none flex-column justify-content-center align-items-center gap-4 h-100 fw-semibold fs-5 text-white">
                  <a>Why Marvel</a>
                  <a>Enterprise</a>
                  <a>Pricing</a>
                  <a>Sign in</a>
                  <button className="btn btn-dark px-4 py-2 nav-sign-up-button fw-semibold fs-5">
                    Sign up free
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="d-none d-lg-flex align-items-center gap-4 h-100 fw-semibold fs-5">
            <a>Why Marvel</a>
            <a>Enterprise</a>
            <a>Pricing</a>
            <a>Sign in</a>
            <button className="btn btn-light px-4 py-2 nav-sign-up-button fw-semibold fs-5">
              Sign up free
            </button>
          </div>
        </div>
      </nav>

      <div className="webui-design-outlet-container bg-color-primary">
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default WebUIDesignLayout;
