import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import Home from '@/pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
