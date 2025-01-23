import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from './components/Layout/Navigation/Navigation.jsx';
import Header from './components/Layout/Header.jsx'; 
import Footer from './components/Layout/Footer.jsx';
import CharactersPage from './components/CharactersPage/CharactersPage.jsx';
import ClubsPage from './components/ClubsPage/ClubsPage.jsx';
import ArtsPage from './components/ArtsPage/ArtsPage.jsx';
import UserArtPage from './components/UserPages/UserArtPage.jsx';
import UserCharactersPage from './components/UserPages/UserCharactersPage.jsx';
import CharacterArtPage from './components/CharacterDetailPage/CharacterArtPage.jsx'
import CharacterDetailPage from './components/CharacterDetailPage/CharacterDetailPage.jsx';
import CharacterRelationsPage from './components/CharacterRelationsPage/CharacterRelationsPage.jsx';
import MembershipsPage from './components/ClubsPage/MembershipsPage.jsx';
import Attendance from './components/Story/Attendance/Attendance.jsx';

import CandleCeremonyI from './components/Story/Story/CandleCeremonyI.jsx';
import CandleCeremonyII from './components/Story/Story/CandleCremonyII.jsx';
import AnAudience from './components/Story/Story/AnAudience.jsx';
import TwoRooksI from './components/Story/Story/TwoRooksI.jsx'
import TwoRooksII from './components/Story/Story/TwoRooksII.jsx';
import SeasonI from './components/Story/Story/SeasonI.jsx';

import FellePress12 from './components/Story/News/FellePress12.jsx';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Attendance />,
      },
      {
        path: '/characters',
        element: <CharactersPage />,
      },
      {
        path: '/characters/:name',
        element: <CharacterDetailPage />,
      },
      {
        path: '/clubs',
        element: <ClubsPage />,
      },
      {
        path: '/art',
        element: <ArtsPage />,
      },
      {
        path: '/characters/:name/relations',
        element: <CharacterRelationsPage />,
      },
      {
        path: '/characters/:name/art',
        element: <CharacterArtPage />
      },
      {
        path: '/users/:name/art',
        element: <UserArtPage />
      },
      {
        path: '/users/:name/characters',
        element: <UserCharactersPage />
      },
      {
        path: '/users/:name/memberships',
        element: <MembershipsPage />
      },
      {
        path: '/story',
        element: <Attendance />
      },
      {
        path: '/story/Season I Summary',
        element: <SeasonI />
      },
      {
        path: '/story/An Audience',
        element: <AnAudience />
      },
      {
        path: '/story/Candle Ceremony I',
        element: <CandleCeremonyI />
      },
      {
        path: 'story/Candle Ceremony II',
        element: <CandleCeremonyII />
      },
      {
        path: '/story/Two Rooks I',
        element: <TwoRooksI />
      },
      {
        path: '/story/Two Rooks II',
        element: <TwoRooksII />
      },
      {
        path: '/FellePress/12',
        element: <FellePress12 />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
