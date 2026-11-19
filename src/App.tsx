import LandingPage from './LandingPage';
import './index.css';

function App() {
  const handleGoToApp = () => {
    window.location.href = 'https://hajlaoui30.github.io/OptiStock-3D/';
  };

  return <LandingPage onEnterApp={handleGoToApp} />;
}

export default App;