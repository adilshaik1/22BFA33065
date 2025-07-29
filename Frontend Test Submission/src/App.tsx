import { Routes, Route } from 'react-router-dom' ;
import ShortenPage from './pages/ShortenPage';
import StatsPage from './pages/StatsPage';
import RedirectPage from './pages/RedirectPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShortenPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/:shortcode" element={<RedirectPage />} />
    </Routes>
  );
};

export default App;
