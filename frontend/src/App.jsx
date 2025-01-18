import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header/Header'; 
import CharactersPage from './components/CharactersPage/CharactersPage.jsx';
import ClubsPage from './components/ClubsPage/ClubsPage.jsx';
import ArtsPage from './components/ArtsPage/ArtsPage.jsx';
import UserArtPage from './components/UserPages/UserArtPage.jsx';
import UserCharactersPage from './components/UserPages/UserCharactersPage.jsx';
import CharacterArtPage from './components/CharacterDetailPage/CharacterArtPage.jsx'
import CharacterDetailPage from './components/CharacterDetailPage/CharacterDetailPage.jsx';
import CharacterRelationsPage from './components/CharacterRelationsPage/CharacterRelationsPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx'
import * as sessionActions from './store/session';

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
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
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
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
