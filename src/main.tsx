import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from '@emotion/styled';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const Body = styled('body')`
    background-color: green;
`;

const cssContainer = document.createElement('div');

const myCache = createCache({
    key: 'debug-panel',
    container: cssContainer
});

const setBody = (body: HTMLElement | null) => {
    if (body !== null) {
        body.appendChild(cssContainer);
    }
};

export const App = () => {
    const [count, setCount] = React.useState(0);

    return (
        <CacheProvider value={myCache}>
            <head>
                <meta charSet="UTF-8" />
                <title>title ... count = {count}</title>
            </head>
            <Body ref={setBody}>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </Body>
        </CacheProvider>
    );
};

ReactDOM.createRoot(document.documentElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
