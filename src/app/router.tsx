import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@/layout/RootLayout';
import { LandingPage } from '@/pages/LandingPage';
import { WorkbenchPage } from '@/pages/WorkbenchPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { ToSPage } from '@/pages/ToSPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: 'workbench', Component: WorkbenchPage },
      { path: 'privacy', Component: PrivacyPage },
      { path: 'terms', Component: ToSPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
