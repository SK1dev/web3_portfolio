import profile from "../assets/profile.jpeg";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="Sakari De-Meis" />

      <div className="header__content">
        <h1>Hi, I'm Sakari</h1>
        <p>Smart Contract & Blockchain Developer</p>
        <br></br>
        <a href="mailto:sk374@protonmail.com" className="button">
          Email
        </a>
        <br></br>
        <br></br>
        <a
          className="storj-link"
          target="_blank"
          href="https://link.storjshare.io/jvfo2tbb67mfblpsomm5ktr2dkxa/portfolio-bucket%2FSakari_CV.pdf"
          attributes-list
        >
          CV
        </a>
        <br></br>
        <a
          className="storj-link"
          target="_blank"
          href="https://link.storjshare.io/ju6luerpatxq4h5jsd4dcc7em52q/portfolio-bucket%2FSakari_Covering_Letter.pdf"
          attributes-list
        >
          Covering Letter
        </a>
        <br></br>
        <br></br>
        <small>📍 United Kingdom/Remote</small>
      </div>
    </section>
  );
};

export default Header;
