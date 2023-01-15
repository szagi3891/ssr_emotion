import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.documentElement).render(
    <React.StrictMode>
        <head>
            <meta charSet="UTF-8" />
            <title>title ...</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <App />
        </body>
    </React.StrictMode>,
);
