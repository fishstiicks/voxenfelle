import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArts, removeArt } from '../../store/arts';
import { useModal } from '../../context/Modal';
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
    dispatch(fetchArts()).finally(() => setLoading(false));
  }, [dispatch]);

  const refreshArts = () => {
    setLoading(true);
    dispatch(fetchArts()).finally(() => setLoading(false));
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
      {user && (
        <button onClick={openCreateArtModal} className="create-art-btn">
          Create New Art
        </button>
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
                  <span id="art-info">{art.character} by {art.mun}</span>
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

    <div className="fixed-gradient"></div>
    </div>
  );
}

export default ArtsPage;
