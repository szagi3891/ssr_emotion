import React from 'react'
import ReactDOM from 'react-dom/client'

export const App = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <title>title ... count = {count}</title>
            </head>
            <body>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </body>
        </>
    );
};

ReactDOM.createRoot(document.documentElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
