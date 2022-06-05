import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));


let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
