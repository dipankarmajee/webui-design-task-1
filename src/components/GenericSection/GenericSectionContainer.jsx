import EachGenericSection from "./EachGenericSection";
import botbot from "../../assets/botbot.png";
import showcase from "../../assets/showcase.png";
const GenericSectionContainer = () => {
  return (
    <div className="d-flex flex-lg-column-reverse flex-column">
      <EachGenericSection
        image={botbot}
        title="Showcase your app in our integrations directory"
        text="Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life."
        firstButtonText="View on git"
        secondButtonText="Try demo"
        reverse={false}
      />
      <EachGenericSection
        image={showcase}
        title="A Slack-bot for creating and managing prototypes"
        text="Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life."
        firstButtonText="Become a partner"
        secondButtonText="View Integration"
        order={true}
      />
    </div>
  );
};

export default GenericSectionContainer;
