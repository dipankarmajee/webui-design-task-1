import illustration from "../../assets/illustration.png";

const DashboardLandingSection = () => {
  return (
    <div className="py-5">
      <div className="d-flex flex-column flex-lg-row justify-content-lg-center  text-center gap-3 py-5">
        <div className="d-flex flex-column justify-content-lg-center text-center gap-3">
          <h1 className="fw-bold">{`Let's build the future of design, now.`}</h1>
          <p>
            Create amazing tools and integrations for 1 million users or
            customize Marvel for your team.
          </p>

          <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
            <button className="btn btn-light px-4 py-2 nav-sign-up-button fw-semibold">
              View your docs
            </button>
            <button className="btn btn-outline-dark text-white px-4 py-2 nav-sign-up-button fw-semibold">
              Manage your apps
            </button>
          </div>
        </div>
        <div>
          <img src={illustration} className="illustration-image" />
        </div>
      </div>
    </div>
  );
};

export default DashboardLandingSection;
