// Module imports
import {Outlet} from 'react-router-dom';

/**
 * @component Layout
 * @return {React.Component}
 *
 * @example return <Layout />
 */
export default function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}
