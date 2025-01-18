import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchArtByMun, removeArt } from '../../store/arts';
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
  const { setModalContent, openModal } = useModal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchArtByMun(name));
  }, [dispatch, name]);

  const refreshArts = () => {
    dispatch(fetchArtByMun(name));
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


  return (
    <div>
    <div className="character-links">
            <p id="char-link-name" className="character-name">{name}</p>
            <a href={`/users/${name}/characters`}>Characters</a>
            <a href={`/users/${name}/art`}>Art</a>
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
                <span id="art-info"><Link to={`/characters/${art.character}/art`}>{art.character}</Link></span>
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
