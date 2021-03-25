import * as React from "react";
import styles from './Social-bar.module.scss';
import iconGithub from "../../assets/images/icons/icon-github.svg";
import iconCodepen from "../../assets/images/icons/icon-codepen.svg";
import iconLinkedin from "../../assets/images/icons/icon-linkedin.svg";
import iconTwitter from "../../assets/images/icons/icon-twitter.svg";
import iconPinterest from "../../assets/images/icons/icon-pinterest.svg";
import {ReactSVG} from "react-svg";

class SocialBar extends React.Component {
    componentDidMount(): void {
    }

    render() {
        return (
            <div className={styles.SocialBar} data-testid="Social-bar">
                <ul className="icon-list text-tertiary">
                    <li className="icon-list__item">
                        <a href="https://github.com/Titekaro" target="_blank" title="Github">
                            <ReactSVG className="icon icon--large" src={iconGithub}/>
                        </a>
                    </li>
                    <li className="icon-list__item">
                        <a href="https://codepen.io/K-ro/" target="_blank" title="Codepen">
                            <ReactSVG className="icon icon--large" src={iconCodepen}/>
                        </a>
                    </li>
                    <li className="icon-list__item">
                        <a href="https://www.linkedin.com/in/carolinepierson/" target="_blank" title="Linkedin">
                            <ReactSVG className="icon icon--large" src={iconLinkedin}/>
                        </a>
                    </li>
                    <li className="icon-list__item">
                        <a href="https://twitter.com/titekaro7" target="_blank" title="Twitter">
                            <ReactSVG className="icon icon--large" src={iconTwitter}/>
                        </a>
                    </li>
                    <li className="icon-list__item">
                        <a href="https://www.pinterest.fr/Titekaro7/" target="_blank" title="Pinterest">
                            <ReactSVG className="icon icon--large" src={iconPinterest}/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SocialBar;
