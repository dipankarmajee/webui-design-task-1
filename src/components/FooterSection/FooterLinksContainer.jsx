import EachFooter from "./EachFooter";
import logoWhite from "../../assets/logo-white.svg";

const FooterLinksContainer = () => {
  const marvel = [
    "Overview",
    "Why Marvel",
    "Enterprise",
    "Pricing",
    "Request a demo",
    "Explore",
    "Apps",
    "Developer API",
  ];
  const features = [
    "Wireframing",
    "Design",
    "Prototyping",
    "Collaboration",
    "Handoff",
    "Integrations",
    "Sketch Plugin",
  ];

  const support = ["Help Center", "Terms of Service", "Privacy", "Security"];

  const follow = ["Facebook", "Twitter", "Github", "Workable", "Dribbble"];
  return (
    <div className="d-flex flex-column flex-lg-row gap-5 footer-container px-3">
      <div>
        <img src={logoWhite} width={100} />
      </div>
      <div className="d-flex flex-wrap justify-content-around w-100">
        <EachFooter title="Marvel" items={marvel} />

        <EachFooter title="Features" items={features} />

        <EachFooter title="Suport" items={support} />

        <EachFooter title="Follow" items={follow} />
      </div>
    </div>
  );
};

export default FooterLinksContainer;
