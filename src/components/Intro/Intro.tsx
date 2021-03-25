import React from 'react';
import styles from './Intro.module.scss';
import axios from 'axios';
import {ReactSVG} from "react-svg";

import iconDownload from "../../assets/images/icons/icon-download.svg";
import iconArrowRight from "../../assets/images/icons/icon-arrow-right.svg";
import resume from "../../assets/files/resume2021.pdf";

interface IntroData {
    introData: { [key: string]: string }
}

class Intro extends React.Component {
    state = {
        introData: {intro: '', title: '', content: ''},
        error: false
    };

    componentDidMount(): void {
        axios.get('/header.json')
            .then(response => {
                this.setState({
                    introData: {intro: response.data.intro, title: response.data.title, content: response.data.content}
                })
            })
            .catch(error => {
                this.setState({error: true});
            })
    }

    render() {
        let intro = <p>Oops, there should be some data here but it looks like they preferred to go on vacation</p>;
        if (!this.state.error) {
            intro =
                <React.Fragment>
                    <p className={styles.intro}>{this.state.introData.intro}</p>
                    <h1 className="title" dangerouslySetInnerHTML={{__html: this.state.introData.title}}/>
                    <p className={styles.content}>{this.state.introData.content}</p>
                </React.Fragment>
        }

        return (
            <div className={styles.Intro} data-testid="Intro">
                {intro}
                {/*<a className="btn btn-tertiary" href="./">
                    My work
                    <ReactSVG className="icon" src={iconArrowRight} />
                </a>*/}
                <a className="btn btn-tertiary" href={resume} download>
                    Download CV
                    <ReactSVG className="icon" src={iconDownload} />
                </a>
            </div>
        );
    }
}

export default Intro;
