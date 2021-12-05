// Module imports
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Component imports
import {Dashboard, Layout, SignIn, SignUp} from 'components';

/**
 * @component Routing
 * @return {React.Component} - The UI DOM object
 *
 * @example return <Routing />
 */
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="*"
            element={
              <main style={{padding: '1rem'}}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
