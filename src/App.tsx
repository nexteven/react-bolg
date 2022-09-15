import React from 'react';
import { RouterList } from './router';
import { BrowserRouter } from 'react-router-dom';
import '../public/flash/flash.js';
import './app.less';
import 'antd/dist/antd.css';

const App: React.FC = () => {
    // Ribbons();
    return (
        <BrowserRouter>
            <div className="main-page">
                <RouterList />
            </div>
        </BrowserRouter>
    );
};

export default App;
