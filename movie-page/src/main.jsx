import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you are using TypeScript
root.render(<App tab="home"/>);


import App from './App';

