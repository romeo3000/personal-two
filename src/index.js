import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import {Provider} from 'react-redux';
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import {configureStore } from './app/store/configureStore'
import ScrollToTop from './app/common/util/ScrollToTop'



const store = configureStore();


const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        
        <Provider store ={store}>
        <BrowserRouter>
        <ScrollToTop>
            <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            />
           <App />
        </ScrollToTop>
        </BrowserRouter>
        </Provider>, 
        rootEl
    );
};
    if (module.hot){
        module.hot.accept('./app/layout/App', () => {
            setTimeout(render)
        });
    }

    // this allows me to get auth done by firebase first then render the compdidload!!
store.firebaseAuthIsReady.then(()=>{
    render();
})

registerServiceWorker();
