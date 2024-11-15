import { FaGithub } from "react-icons/fa";
import "./app.css";
import { FaXTwitter } from "react-icons/fa6";

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
          <h1>Coming Soon</h1>
          <p>Website coming soon. Please check back to know more. Shoot us an email if you&apos;re curious.</p>
        </div>
        <a href="mailto:hello@navikarana.io">
          <div className="cta">Send us an email</div>
        </a>
        <div className="social">
          <a href="https://github.com/Navikarana-Labs" title="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://x.com/navikarana_labs" title="Twitter" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
