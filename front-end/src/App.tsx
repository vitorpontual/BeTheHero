import Routes from './routes';

import './global.scss'
import { CaseProvider } from './hooks/useCase';

function App() {
  return (
    <CaseProvider>
      <Routes />
    </CaseProvider>
  );
}

export default App;
