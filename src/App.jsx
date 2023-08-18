import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const body = document.getElementById('main');
      body.style.backgroundColor = 'white';
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navbar />
          <AnimatedRoutes />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
