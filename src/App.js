import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Modal } from './components/Modal';
import { routesPaths } from './routerSettings/settings';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './store/auth/auth';

import './App.css';

const HomePage = lazy(() => import('./pages/Home'));
const ArticlePage = lazy(() => import('./pages/Article'));
const Map = lazy(() => import('./pages/Map'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <MainLayout>
      <div className="App">
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={routesPaths.articles} element={<HomePage />}>
                <Route path="modal" element={<Modal>Hello</Modal>} />
              </Route>
              <Route path={routesPaths.article} element={<ArticlePage />} />
              <Route
                path={routesPaths.map}
                element={
                  <RequireAuth>
                    <Map />
                  </RequireAuth>
                }
              />
              <Route
                path={routesPaths.registration}
                element={<Registration />}
              />
              <Route path={routesPaths.login} element={<Login />} />
              <Route
                path="*"
                element={<Navigate to={routesPaths.articles} replace />}
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
