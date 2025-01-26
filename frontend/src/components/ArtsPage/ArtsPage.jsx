import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArts, removeArt } from '../../store/arts';
import { useModal } from '../../context/Modal';
import { Link } from 'react-router-dom';
import CreateArtModal from '../ArtsPage/CreateArtModal';
import EditArtModal from '../ArtsPage/EditArtModal';
import ArtModal from '../ArtsPage/ArtFullModal';
import '../ArtsPage/ArtsPage.css';

function ArtsPage() {
  const dispatch = useDispatch();
  const arts = useSelector((state) => state.arts.arts) || [];
  const errors = useSelector((state) => state.arts.errors);
  const user = useSelector((state) => state.session.user);
  const { setModalContent, openModal } = useModal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchArts());
  }, [dispatch]);

  const refreshArts = () => {
    dispatch(fetchArts());
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

  const splitNames = (str) => {
    return str.split(',').map(name => name.trim());
  }

  return (
    <div className='main-content'>
      {user && (
        <div className="create-art-btn-container">
            <button onClick={openCreateArtModal} className="create-art-btn">
                Add Image
            </button>
        </div>
      )}

      <div className="art-list">
        {errors && <p className="error-message">{errors}</p>}
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
                  <span id="art-info">
                    {splitNames(art.character).map((charName, name) => (
                      <Link key={name} to={`/characters/${charName}/art`}>
                        {charName}
                      </Link>
                    ))}
                    {' '}</span><span>by <Link to={`/users/${art.mun}/art`}>{art.mun}</Link>
                  </span>
                
                </div>
                <div className="art-event"><p><i>{art.event}</i></p>
                {user && (art.mun === user.username || user.username === 'Admin') && (
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
                  )}</div>
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
  );
}

export default ArtsPage;
