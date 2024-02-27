import { createRoot } from 'react-dom/client';

import { Counter } from './components/Counter';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Counter />);
