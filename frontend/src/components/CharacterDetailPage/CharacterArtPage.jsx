import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchArtByCharacter, removeArt } from '../../store/arts';
import { useModal } from '../../context/Modal';
import CreateArtModal from '../ArtsPage/CreateArtModal';
import EditArtModal from '../ArtsPage/EditArtModal';
import ArtModal from '../ArtsPage/ArtFullModal';
import '../CharacterDetailPage/CharacterArtPage.css'

function ArtsPage() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const arts = useSelector((state) => state.arts.arts) || [];
  const user = useSelector((state) => state.session.user);
  const [character, setCharacter] = useState(null);
  const { setModalContent, openModal } = useModal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`/api/characters/${name}`);
        if (!response.ok) {
          throw new Error('Character not found');
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setCharacter(null);
      }
    };

    fetchCharacter();
  }, [name]);

  useEffect(() => {
    dispatch(fetchArtByCharacter(name));
  }, [dispatch, name]);

  const refreshArts = () => {
    dispatch(fetchArtByCharacter(name));
  };

  const openCreateArtModal = () => {
    setModalContent(<CreateArtModal refreshArts={refreshArts} />);
    openModal();
  };

  const openEditArtModal = (art) => {
    setModalContent(<EditArtModal art={art} refreshArts={refreshArts} />);
    openModal();
  };

  const handleDeleteArt = (artId) => {
    dispatch(removeArt(artId));
  };

  const openFullSizeModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <div className="character-links">
            <p id="char-link-name" className="character-name">{name}</p>
            <a href={`/characters/${name}`}>Profile</a>
                <a href={`/characters/${name}/relations`}>Relations</a>
                <a href={`/characters/${name}/art`}>Art</a>
                <a href={`/users/${character.mun}/characters`}>Mun</a>
    </div>

      {user && (
        <div className="create-art-btn-container">
        <button onClick={openCreateArtModal} className="create-art-btn">
            Add Image
        </button>
    </div>
      )}

      <div id="char-art-list">
      <div className="art-list">
        {arts.length > 0 ? (
          arts.map((art) => {
            if (!art || !art.url) return null;
            return (
              <div key={art.id} className="art-item">
                <img
                  src={art.url}
                  alt={art.character}
                  className="art-image"
                  onClick={() => openFullSizeModal(art.url)}
                />
                <div className="art-details">
                <span id="art-info">By <Link to={`/users/${art.mun}/art`}>{art.mun}</Link></span>
                  {user && art.mun === user.username && (
                    <span id="art-buttons">
                      <button
                        onClick={() => openEditArtModal(art)}
                        className="grey-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteArt(art.id)}
                        className="grey-btn"
                      >
                        Delete
                      </button>
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p>No art available.</p>
        )}
      </div>
      

      {selectedImage && (
        <ArtModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
    <div className="fixed-gradient"></div>
    </div>
  );
}

export default ArtsPage;
