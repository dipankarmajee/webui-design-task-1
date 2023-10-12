import DashboardImageCardContainer from "../../components/DashboardImageCard/DashboardImageCardContainer";
import DashboardLandingSection from "../../components/DashboardLandingSection";
import DashboardSubSection from "../../components/DashboardSubSection";
import FooterLinksContainer from "../../components/FooterSection/FooterLinksContainer";
import GenericSectionContainer from "../../components/GenericSection/GenericSectionContainer";

const WebUIDesignPages = () => {
  return (
    <div className="px-3">
      <DashboardLandingSection />
      <DashboardSubSection />
      <DashboardImageCardContainer />
      <GenericSectionContainer />
      <FooterLinksContainer />
    </div>
  );
};

export default WebUIDesignPages;
