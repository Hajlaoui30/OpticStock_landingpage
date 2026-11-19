import LandingPage from './LandingPage';

function App() {
  const handleGoToApp = () => {
    // Redirige directement vers l'application 3D en ligne
    window.location.href = 'https://hajlaoui30.github.io/OptiStock-3D/';
  };

  return <LandingPage onEnterApp={handleGoToApp} />;
}

export default App;