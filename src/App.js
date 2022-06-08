import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Modal } from './components/Modal';
import { routesPaths } from './routerSettings/settings';

import './App.css';

const HomePage = lazy(() => import('./pages/Home'));
const ArticlePage = lazy(() => import('./pages/Article'));
const Map = lazy(() => import('./pages/Map'));

function App() {
  return (
    <MainLayout>
      <div className="App">
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={routesPaths.articles} element={<HomePage />}>
                {/* Приклда дочірнього роута */}
                {/* <Route path=":id" element={<Article />} /> */}
                <Route path="modal" element={<Modal>Hello</Modal>} />
              </Route>
              <Route path={routesPaths.article} element={<ArticlePage />} />
              <Route path={routesPaths.map} element={<Map />} />
              <Route
                path="*"
                element={<Navigate to={routesPaths.articles} replace />}
              />
            </Routes>
          </Suspense>
          {/* <Modal>Hello</Modal> */}
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
