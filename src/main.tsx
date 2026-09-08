import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CeroSoftSite from '../app/components/CeroSoftSite';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(<StrictMode><CeroSoftSite/></StrictMode>);
