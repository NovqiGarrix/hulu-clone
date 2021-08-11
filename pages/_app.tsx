import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer';

import type { AppProps } from 'next/app';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {

    const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
};

export default MyApp;