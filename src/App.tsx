import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import Home from '@/pages/Home';
import ProjectDocPage from '@/pages/ProjectDocPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDocPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
