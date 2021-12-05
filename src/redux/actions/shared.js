// Action imports
import {handleConnectionChange} from './connection';

/**
 * Promise to run on starting the app.
 * @return {Promise}
 */
export const init = () => Promise.all([handleConnectionChange()]);
