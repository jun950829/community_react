import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers"

const configureStore = () => {

    //middlewares에 redux-thunk, redux-sage 등의 middleware를 넣어주면 된다.
    const middlewares = [thunk];

    //배포용 일때는 DevTools 연결X
    //개발용 일때는 DevTools 연결o
    const enhancer = 
        process.env.NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));
    
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug : process.env.NODE_ENV === "development",
});

export default wrapper;