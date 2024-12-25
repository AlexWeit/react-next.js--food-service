import {Layout} from "../components/layout/layout";
import {AuthContextProvider} from "../components/auth-context/auth-context-provider";
import {ThemeContextProvider} from "../components/theme-context/theme-context-provider";

import "../app.css";
import { ReduxProvider } from "../redux/provider";

export const metadata = {
    title: "Next.js + React",
    description: "Next.js + React",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
        <head>
            <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        </head>
        <body>
        <div id='root'>
            <ReduxProvider>
                <AuthContextProvider>
                    <ThemeContextProvider>
                        <Layout>{ children }</Layout>
                    </ThemeContextProvider>
                </AuthContextProvider>
            </ReduxProvider>
        </div>
        </body>
        </html>
    );
};
