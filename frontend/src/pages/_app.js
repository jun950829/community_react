import wrapper from "../common/config/store/configureStore";
import PropTypes  from 'prop-types';

const App = ({ Component : Page }) => {
    return <Page />;
}

App.propTypes  = {
    Component : PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);