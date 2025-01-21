import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

function MembershipsPage() {
  const { name } = useParams();
  const [memberships, setMemberships] = useState([]);
  const [setError] = useState(null);
  const [sessionUser, setSessionUser] = useState(null);

  useEffect(() => {
    fetch('/api/session')
      .then(response => response.json())
      .then(data => {
        setSessionUser(data.user); 
      })
  }, []);

  useEffect(() => {
    if (name) {
      fetch(`/api/clubs/users/${name}/memberships`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to fetch memberships.');
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data.memberships)) {
            setMemberships(data.memberships);
          } else {
            setMemberships([]);
          }
        });
    }
  }, [name]);

  const handleDeleteMembership = (membershipId) => {
    if (!membershipId) {
      setError('Invalid membership ID.');
      return;
    }

    csrfFetch(`/api/clubs/memberships/${membershipId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to delete membership.');
        }
        setMemberships(memberships.filter((membership) => membership.id !== membershipId));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="main-content">
    <div className="memberships-page">
      <div id="clubs-header">
        <Link to={`/clubs`}>
        <button className="create-club-btn">
          Join a Club
        </button></Link>
      </div>
      {memberships.length === 0 && <p>You currently have no memberships. <Link to={`/clubs`}><b>Check out our clubs?</b></Link></p>}

        {memberships.map((membership) => (
          <div key={membership.id} id="membership-item">
            <p><b>{membership.character.name}</b> ▸ {membership.club}</p>
            {sessionUser && sessionUser.username === name && (
              <button
                onClick={() => handleDeleteMembership(membership.id)}
                id="membership-delete-btn">
                Delete
              </button>
            )}
            </div>
        ))}

    </div>
    
    </div>
  );
}

export default MembershipsPage;
