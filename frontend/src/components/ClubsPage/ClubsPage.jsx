import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchClubs, removeClub, fetchClubMembers } from '../../store/clubs';
import { useModal } from '../../context/Modal';
import { Link } from 'react-router-dom';
import CreateClubModal from '../ClubsPage/CreateClubModal.jsx';
import EditClubModal from '../ClubsPage/EditClubModal.jsx';
import CreateMembershipModal from '../ClubsPage/CreateMembershipModal.jsx';
import DeleteClubModal from './DeleteClubModal';
import '../ClubsPage/ClubsPage.css';

function ClubsPage() {
  const dispatch = useDispatch();
  const clubs = useSelector((state) => state.clubs.clubs) || [];
  const membershipsByClub = useSelector((state) => state.clubs.membershipsByClub) || {};
  const errors = useSelector((state) => state.clubs.errors);
  const user = useSelector((state) => state.session.user);
  const { setModalContent, openModal, closeModal } = useModal();

  useEffect(() => {
    dispatch(fetchClubs());
  }, [dispatch]);

  useEffect(() => {
    clubs.forEach((club) => {
      dispatch(fetchClubMembers(club.name));
    });
  }, [dispatch, clubs]);

  const refreshClubs = () => {
    dispatch(fetchClubs());
  };

  const openCreateClubModal = () => {
    setModalContent(<CreateClubModal refreshClubs={refreshClubs} />);
    openModal();
  };

  const openEditClubModal = (club) => {
    setModalContent(<EditClubModal club={club} onClubUpdated={refreshClubs} />);
    openModal();
  };

  const handleDeleteClub = (clubId) => {
    dispatch(removeClub(clubId));
  };

  const openDeleteClubModal = (club) => {
    setModalContent(
      <DeleteClubModal
        club={club}
        onDelete={handleDeleteClub}
        closeModal={closeModal}
      />
    );
    openModal();
  };

  const openCreateMembershipModal = (clubName) => {
    const munName = user?.username;
    if (munName) {
      setModalContent(
        <CreateMembershipModal
          clubName={clubName}
          refreshMembers={refreshClubs}
          munName={munName}
        />
      );
      openModal();
    }
  };

  return (
<div className="main-content">
  {user && (
    <div id="create-header">
      <button onClick={openCreateClubModal} className="create-club-btn">
        Create Club
      </button>
    </div>
  )}

  <div className="club-grid">
    {errors && <p className="error-message">{errors}</p>}
    {clubs.length > 0 ? (
      clubs.map((club) => {
        if (!club || !club.name) return null;

        const clubMembers = membershipsByClub[club.name] || [];
        return (
          <div key={club.id} className="club-card">
            <div id="club-info-box">
            <div id="club-info">
              <h3>{club.name}</h3>
              <p id="club-desc">{club.description}</p>
            </div>
            <hr />
            </div>
              {clubMembers.length > 0 ? (
                <div className="club-members">
                  <div className="member-images">
                    {clubMembers.map((membership) => {
                      const character = membership.character;
                      const picrew = character ? character.picrew : null;
                      const charName = character ? character.name : 'Unnamed Member';

                      return (
                        <div key={membership.id} className="member-image-container">
                          <Link to={`/characters/${charName}`} className="character-name-link">
                            <img src={picrew} className="picrew-image" alt={charName} />
                            <div id="club-member-name">{charName}</div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <p>No members yet.</p>
              )}

            <div id="club-btn-area">
                <button onClick={() => openCreateMembershipModal(club.name)} className="add-membership-btn">
                  Join Club
                </button>

                {user && club.creator === user.username && (
                  <div id="manage-club-btns">
                    <button onClick={() => openEditClubModal(club)} className="manage-club-btn">
                      Edit Club
                    </button>
                    <button onClick={() => openDeleteClubModal(club)} className="manage-club-btn">
                      Delete Club
                    </button>
                  </div>
                )}
            </div>
          </div>
        );
      })
    ) : (
      <p>No clubs available.</p>
    )}
  </div>
  <div className="fixed-gradient"></div>
</div>

  );
}

export default ClubsPage;
