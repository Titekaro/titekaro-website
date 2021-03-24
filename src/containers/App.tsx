import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';

import FrontPage from './Front-page/front-page';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/'} exact component={FrontPage}/>
                <Route path={'/admin'} exact render={() => <h1>admin panel</h1>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
