import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Pages/dashboard/Dashboard';
import Team from './Pages/team/Team';
import Contacts from './Pages/contacts/Contacts';
import Invoices from './Pages/invoices/Invoices';
import Form from './Pages/form/Form';
import Calendar from './Pages/calendar/Calendar';
import Faq from './Pages/faq/Faq';
import Bar from './Pages/bar/Bar';
import Pie from './Pages/pie/pie';
import Line from './Pages/line/Line';
import Geography from './Pages/geography/Geography';
import NotFound from './Pages/notFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='bar' element={<Bar />} />
      <Route path='pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='geography' element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);