import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const Wrapper = (Component) => {
    return function AppWrapper(props) 
    {
        return (
            <Provider store={store}>
                    <Component {...props} />
            </Provider>
        )
    }
}


export default Wrapper;
