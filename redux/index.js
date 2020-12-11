import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const ReduxHOC = (ChildHOC) => {
    return class ApplicationHOC extends Component {
        constructor(props) {
            super(props);
        }
     
        render() {
            return (
                <Provider store={store}>
                    <ChildHOC
                        {...this.props} />
                </Provider>
            );
        }
    }
}
export default ReduxHOC;
