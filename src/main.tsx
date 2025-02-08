import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Demochart from './demochart'
import  {Card}  from './components/ui/card';
import './index.css';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import Layout from './layout';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Layout children={  
    <ThemeProvider>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ModeToggle />
      </div>

      <div className='card-row'>
        <Card className='top-card'>
          <App />
        </Card>
        <Card className='top-card'>
          Anoioinsdf oinoinoiwer
        </Card>
      </div>
    
    <div className='p-5'>
      <Card className='demochart-container'>
        <Demochart />
      </Card>
    </div>
  </ThemeProvider>
    }/>  
  
  </React.StrictMode>,

);
