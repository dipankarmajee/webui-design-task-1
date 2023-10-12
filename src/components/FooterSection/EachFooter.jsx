const EachFooter = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <ul className="p-0">
        {props.items.map((eachItem) => (
          <li className="list-group-item text-secondary" key={eachItem}>
            {eachItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EachFooter;
