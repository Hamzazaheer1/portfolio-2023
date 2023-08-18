import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <AnimatedRoutes />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
