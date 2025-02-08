import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Demochart from './demochart'
import  {Card}  from './components/ui/card';
import './index.css';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ModeToggle />
    <div>
      <Card>
        <App />    
      </Card>
    </div>
    <br />
    <div>
      <Card>
        <Demochart />
      </Card>
    </div>
  </ThemeProvider>
  
  
  </React.StrictMode>,
  
);
