import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FullPageLoader from './components/FullPageLoader';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import TaskDetails from './pages/TaskDetails';

// const App = lazy(async () => {
//   const [moduleExports] = await Promise.all([
//     import('./App'),
//     new Promise((resolve) => setTimeout(resolve, 1000)),
//   ]);
//   return moduleExports;
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  // <Suspense fallback={<FullPageLoader />}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/tasks/:id' element={<TaskDetails />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  </BrowserRouter>
  // </Suspense>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
