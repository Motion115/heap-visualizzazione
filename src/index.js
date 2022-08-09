import React from 'react';
import 'antd/dist/antd.min.css'
import Dashboard from './dashboard';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Dashboard />);