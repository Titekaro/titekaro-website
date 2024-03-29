import React from 'react';
import './App.scss';
import {HashRouter, Route} from 'react-router-dom';

import FrontPage from './Front-page/front-page';

function App() {
    return (
        <div className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
            <Route path={'/'} exact component={FrontPage}/>
            <Route path={'/admin'} exact render={() => <h1>admin panel</h1>}/>
            </HashRouter>
        </div>
    );
}

export default App;
