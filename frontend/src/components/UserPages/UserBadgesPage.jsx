import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../UserPages/UserPages.css';

function BadgesPage() {
  const { name } = useParams();
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    if (name) {
      fetch(`/api/badges/${name}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to fetch badges.');
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data.badges)) {
            setBadges(data.badges);
          } else {
            setBadges([]);
          }
        })
    }
  }, [name]);


  return (
    
    <div className="main-content badges-page">

    <div className="character-links">
            <p id="char-link-name" className="character-name">{name}</p>
            <Link to={`/users/${name}/characters`}>Characters</Link>
            <Link to={`/users/${name}/art`}>Art</Link>
            <Link to={`/users/${name}/badges`}>Badges</Link>
    </div>

    <div className="badges-box">
   {badges.length === 0 && <p>User currently have no badges.</p>}

        {badges.map((badge) => (
        <div key={badge.id} className='badge-item'>
                <img className='badge-icon' src={badge.Badge.badgeUrl}></img>
            <div className='badge-info'>
                <div className='badge-name'>
                    {badge.badgeName}
                    </div>
                <div className='badge-description'>
                    {badge.Badge.description}
                </div>
            </div>
        </div>
        ))}

    </div>
    
    </div>
  );
}

export default BadgesPage;
