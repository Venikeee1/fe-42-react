import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { MainLayout } from './layouts/MainLayout';
import { Modal } from './components/Modal';

import './App.css';

const routesPaths = {
  articles: '/articles',
};

function App() {
  return (
    <MainLayout>
      <div className="App">
        <div className="content">
          <Routes basename="alex">
            <Route path={routesPaths.articles} element={<Home />}>
              {/* Приклда дочірнього роута */}
              {/* <Route path=":id" element={<Article />} /> */}
              <Route path="modal" element={<Modal>Hello</Modal>} />
            </Route>
            <Route path="/articles/:id" element={<Article />} />
            <Route
              path="*"
              element={<Navigate to={routesPaths.articles} replace />}
            />
          </Routes>
          {/* <Modal>Hello</Modal> */}
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
