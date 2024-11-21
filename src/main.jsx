import { createRoot } from 'react-dom/client'
import { App } from './app'

const root = document.getElementById("root");

const reactRoot = createRoot(root);

console.log(reactRoot);

reactRoot.render(<App />);
