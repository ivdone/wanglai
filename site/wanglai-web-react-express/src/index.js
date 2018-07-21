import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LatestBlogs from './LatestBlogs'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LatestBlogs />, document.getElementById('latest-blog'));
registerServiceWorker();
