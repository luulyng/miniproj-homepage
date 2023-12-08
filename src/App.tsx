import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './layout';
import HomePage from "./pages/homepage";
import WelcomePage from "./pages/welcomepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="blog" element={<WelcomePage pageName="Blog page" />} />
          <Route path="category" element={<WelcomePage pageName="Category page" />} />
          <Route path="product" element={<WelcomePage pageName="Product page" />} />
          <Route path="login" element={<WelcomePage pageName="Log In page" />} />
          <Route path="customer" element={<WelcomePage pageName="Customer page" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
