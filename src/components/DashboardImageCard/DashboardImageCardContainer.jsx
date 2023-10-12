import DashboardImageEachCard from "./DashboardImageEachCard";
import apiTeam from "../../assets/apiTeam.png";
import graphQL from "../../assets/graphQL.png";
import superchargeWorkflow from "../../assets/superchargeWorkflow.png";

const DashboardImageCardContainer = () => {
  return (
    <div className="d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-center">
      <DashboardImageEachCard
        image={apiTeam}
        title="Dedicated API Team"
        text="Our team are available for user's questions via our Slack Developer Community and Email"
      />
      <DashboardImageEachCard
        image={graphQL}
        title="Our API uses Graph QL"
        text="No handling server side. Get many API's responses in a single request."
      />
      <DashboardImageEachCard
        image={superchargeWorkflow}
        title="Supercharge your workflow"
        text="Automate workflows, integrate and analyze data and take Marvel to the next level."
      />
    </div>
  );
};

export default DashboardImageCardContainer;
