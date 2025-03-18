import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer style={{ bottom: "0" }}>
        <div>
          <center className="foot">
            {/* <div> */}
            <br></br>
            <div className="foot">
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/"
                className="linkedinfooter social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                id="github"
                href="https://github.com/"
                className="telegram social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                id="instagram"
                href="https://www.instagram.com/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                id="gmail"
                href="mailto:@gmail.com"
                className="gmail social"
              >
                <FontAwesomeIcon icon={faGoogle} size="2x" color="white" />
              </a>
            </div>
            <br></br>
            <p className="foot copyright">© Copyright 2025 ONE</p>
            <br></br>
            {/* </div> */}
          </center>
        </div>
      </footer>
    </>
  );
};
export default Footer;

