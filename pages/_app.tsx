import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

// use composeWithDevTools when you in development mode in order to manage your store in redux devtools extension
// import { composeWithDevTools } from 'redux-devtools-extension';

import type { AppProps } from 'next/app';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {

    const store = createStore(reducer, compose(applyMiddleware(thunk)));

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
};

export default MyApp;