// Type definitions

/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * Definition for action creator
 * @typedef {() => action} actionCreator
 */

/**
 * An object id
 * @typedef {number} id
 */

/**
 * Redux state object
 * @typedef {{
 *  connection: boolean,
 *  users: users
 * }} state
 */

/**
 * A user object
 * @typedef {{
 * id: id,
 * first_name: string,
 * last_name: string,
 * email: string,
 * role: string,
 * phone: string,
 * code: string,
 * }} user
 */

/**
 * A users object
 * @typedef {{
 * id: user,
 * }} users
 */

/**
 * Redux store
 * @typedef {object} store
 * @property {() => action} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */
