import Header from "../Header/Header";
import "./Siteinfo.css";
function SiteInfo() {
  return (
    <section className="site-info">
      <div className="wrapper">
        <Header />
        <h1 className="site-info__name">Portfolio</h1>
        <p className="site-info__subtext">
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
      </div>
    </section>
  );
}

export default SiteInfo;
