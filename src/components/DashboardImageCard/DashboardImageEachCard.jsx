const DashboardImageEachCard = (props) => {
  return (
    <div className="d-flex flex-column align-items-center text-center gap-5 py-5">
      <img src={props.image} width={250} />

      <div>
        <p className="fs-4 fw-bold">{props.title}</p>
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default DashboardImageEachCard;
