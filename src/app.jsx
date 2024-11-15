import { FaGithub } from "react-icons/fa";
import "./app.css";
import { FaAt, FaVoicemail, FaXTwitter } from "react-icons/fa6";

export const App = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="logo">
          <a href=".">Navīkaraṇa Labs</a>
        </div>
      </div>
      <div className="content">
        <div className="title-holder">
          <h1>Website Coming Soon...</h1>
          <p>
            Something extraordinary is on the horizon. Join us on this journey.
            <br />
            Check back soon for updates, or reach out if you’d like to know
            more.
          </p>
        </div>
        <a href="mailto:hello@navikarana.io">
          <div className="cta">Reach out!</div>
        </a>
        <div className="social">
          <a href="mailto:hello@navikarana.io" title="Email">
            <FaAt className="icon" />
          </a>
          <a
            href="https://x.com/navikarana_labs"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="icon" />
          </a>
          <a
            href="https://github.com/Navikarana-Labs"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
