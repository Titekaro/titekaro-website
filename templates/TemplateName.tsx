import * as React from "react";
import styles from './TemplateName.module.scss';

class TemplateName extends React.Component {
    componentDidMount(): void {
    }

    render() {
        return (
            <div className={styles.TemplateName} data-testid="TemplateName">
              <p>TemplateName works!</p>
            </div>
        );
    }
}

export default TemplateName;
