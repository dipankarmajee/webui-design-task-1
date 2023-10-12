const DashboardImageEachCard = (props) => {
  return (
    <div className="d-flex flex-column align-items-center text-center gap-5 py-5">
      <img src={props.image} width={250} />

      <div className="w-75">
        <p className="fs-4 fw-bold">{props.title}</p>
        <div className="text-center ">
          <span className="text-center">{props.text}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardImageEachCard;
