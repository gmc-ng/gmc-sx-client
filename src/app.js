// Module imports
import React, {Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ToastContainer} from 'react-toastify';

// App routes import
import Routing from 'routing';

// Redux imports
import {handleConnectionChange} from 'redux/actions/connection';
import {init} from 'redux/actions/shared';
import {getConnStat} from 'redux/selectors';

/**
 * @component App
 * @param {object} props
 * @param {boolean} props.isConnected
 * @return {React.Component} - The UI DOM object
 *
 * @example
 * return <App />
 */
function App(props) {
  const {isConnected} = props;
  useEffect(() => {
    (async () => {
      await init();
      window.addEventListener('online', init);
      window.addEventListener('offline', props.handleConnectionChange);
    })();

    return () => {
      window.removeEventListener('online', init);
      window.removeEventListener('offline', props.handleConnectionChange);
    };
  }, [isConnected]);

  return (
    <Suspense fallback={'loading...'}>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

App.propTypes = {
  handleConnectionChange: PropTypes.func,
  isConnected: PropTypes.bool,
};

/**
 * Maps the redux state to component props
 * @param {state} state
 * @return {{isConnected: boolean}}
 */
const mapStateToProps = (state) => ({isConnected: getConnStat(state)});

// Component export
export default connect(mapStateToProps, {
  handleConnectionChange,
})(App);
