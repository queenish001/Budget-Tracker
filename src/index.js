import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App.js';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="1aee29ea-a1e6-40f4-9899-d619f19d374e" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);