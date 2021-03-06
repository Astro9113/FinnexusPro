import React from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import NavCom from '@components/nav';
import Footer from '@components/footer';

// import ReactLoading from 'react-loading';

// ----------------------------------------------------------------------------

// const LoadingApp = ({ type, color }) => (
// 	<ReactLoading type={type} color={color} height={667} width={375} />
// );
{/* <LoadingApp type='spin' color='#000000'/> */}

const App = extend({
    styles: require('./app.module.less')
})(({ className, children, location, ...props }) => (

    <React.StrictMode>
        
        <div
            className={classNames([
                className,
                {
                    'is-home':
                        location.pathname === '' || location.pathname === '/'
                }
            ])}
        >
            <NavCom location={location} {...props} />
            <Main children={children} />
            <Footer location={location} {...props} />
           
        </div>

    </React.StrictMode>
));

export default App;

// ----------------------------------------------------------------------------

const Main = props => <main {...props} />;
