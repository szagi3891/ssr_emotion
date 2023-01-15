import React from 'react'
import ReactDOM from 'react-dom/client'
import { css } from '@emotion/react'
import styled from '@emotion/styled';

const Body = styled('body')`
    background-color: green;
`;

export const App = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <title>title ... count = {count}</title>
            </head>
            <Body>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </Body>
        </>
    );
};

ReactDOM.createRoot(document.documentElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
