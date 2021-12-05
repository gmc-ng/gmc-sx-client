/**
 * @param {boolean} state
 * @param {action} action
 * @return {boolean}
 */
export default function connection(state = true, {type}) {
  return (
    {
      CONNECTED: true,
      DISCONNECTED: false,
    }[type] || state
  );
}
