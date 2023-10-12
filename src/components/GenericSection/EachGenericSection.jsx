const EachGenericSection = (props) => {
  return (
    <div className="pt-5">
      <div
        className={`d-flex flex-column ${
          props.order ? "flex-lg-row-reverse" : "flex-lg-row"
        } justify-content-lg-around align-items-center text-center gap-3 py-5`}
      >
        <div>
          <img src={props.image} className="illustration-image" />
        </div>
        <div className="d-flex flex-column justify-content-lg-center text-center text-lg-start gap-3 generic-section-text-container">
          <h3 className="fw-bold">{props.title}</h3>
          <span>{props.text}</span>

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 flex-wrap py-4 ">
            <button className="btn btn-light px-4 py-2 nav-sign-up-button fw-semibold">
              {props.firstButtonText}
            </button>
            <button className="btn btn-outline-dark text-white px-4 py-2 nav-sign-up-button fw-semibold">
              {props.secondButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachGenericSection;
