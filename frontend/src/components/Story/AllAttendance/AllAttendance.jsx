import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Story/Attendance/Attendance.css';
import { csrfFetch } from '../../../store/csrf';
import { useSelector } from 'react-redux';

const stories = {
  'SEASON I': ['Season I Summary'],
  'DEFENSE MINISTRY': ['Candle Ceremony I', 'Candle Ceremony II', 'An Audience', 'Two Rooks I', 'Two Rooks II'],
  'SOLSTIA': ['To Solstia', 'The Vessel', 'The Ordainment', 'Solstia Streets', `Orion's Shield`]
};

function AllAttendance() {
//   const [users, setUsers] = useState([]);
    const [attendanceStatus, setAttendanceStatus] = useState({});
    const [username, setUsername] = useState('');
    const [story, setStory] = useState('');
    const sessionUser = useSelector((state) => state.session.user);
    const [isLoading, setIsLoading] = useState(true);

    const createAttendance = (story, username) => {
        csrfFetch(`/api/story/attend/new`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ story, username }),
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Unable to add attendance.');
            }
            return response.json();
            })
    };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        createAttendance(story, username)
        refreshAttendance()
      };

const refreshAttendance = async () => {
        setIsLoading(true);
      const status = {};
      const requests = [];

    for (let arc in stories) {
      for (let story of stories[arc]) {
        status[story] = {};
        
        for (let user of users) {
          const request = checkAttendance(story, user).then(hasAttended => {
            status[story][user] = hasAttended;
          });
          requests.push(request);
        }
      }
    }
    await Promise.all(requests);

      setAttendanceStatus(status);
      setIsLoading(false);
}
  

  const users = [`Adina`,`Anya`,`Ash`,`Cas`,`Crow`,`Dodo`,`Durian`,`Froggo`,`Gale`,`Geeck`,`Gildes`,`Hina`,`Hyu`,`Koo`,`Lin`,`Lok`,`Mei`,`Mickey`,`Namako`,`Nelle`,`Nep`,`Nyaph`,`Pour`,`Prim`,`Puchi`,`Ricky`,`Rini`,`Roo`,`Roy`,`Rozen`,`Ruth`,`Sachi`,`Sea`,`Sen`,`Song`,`Sy`,`Tara`,`Trin`,`Twen`,`Vani`,`Yuki`,`Yuli`,`Yuni`]

//   useEffect(() => {
//     fetch(`/api/users`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Unable to fetch users.');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data.Users)) {
//           setUsers(data.Users); 
//         } else {
//           setUsers([]);
//         }
//       })
//   }, []);

  const checkAttendance = async (story, username) => {
    const response = await fetch(`/api/story/${story}/check/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.hasAttended;
    } else {
      console.error('Error checking attendance');
      return false;
    }
  };

  useEffect(() => {
    const fetchAttendance = async () => {
        setIsLoading(true);
      const status = {};
      const requests = [];

    for (let arc in stories) {
      for (let story of stories[arc]) {
        status[story] = {};
        
        for (let user of users) {
          const request = checkAttendance(story, user).then(hasAttended => {
            status[story][user] = hasAttended;
          });
          requests.push(request);
        }
      }
    }
    await Promise.all(requests);

      setAttendanceStatus(status);
      setIsLoading(false);
    };
      fetchAttendance();
  }, []);

  return (
<div className="main-content">
    <div id='add-attendance-form'>
    { sessionUser.username === 'Admin' || sessionUser.username === 'Lok' &&
    <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="mun"><span>Mun</span></label>
            <select
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              >
              <option value="">Select Mun</option>
              {users.length > 0 ? (
              users.map((user) => (
                <option key={user} value={user}>
                    {user}
                </option>
                ))
            ) : (
              <option value="" disabled>No characters available</option>
            )}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="story"><span>Story</span></label>
            <select
              id="story"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              required
            >
            <option value="">Select Story</option>
            {Object.values(stories).map((storyList) => (
            storyList.map((story) => (
                <option key={story} value={story}>
                {story}
                </option>
            ))
            ))}
            </select>
          </div>

          <div className="form-buttons">
            <button type="submit">Create Attendance</button>
          </div>
        </form>
        }
    </div>
        

    <div id="attendance-grid">
      {users.map((user) => (
        <div id="attendance-box-unfix" key={user}>
          <h3>{user}</h3>
          {Object.keys(stories).map((arc) => (
            <div key={arc}>
              <div className="arc-title"><b>{arc}</b></div>
              {stories[arc].map((story) => (
                <div className="attendance-listing" key={story}>
                  <div className="attendance-title">
                    <Link to={`/story/${story}`}>{story}</Link>
                  </div>
                  <div className="attendance-status">
                  { isLoading ? ( <p style={{color: 'black'}}>Loading...</p> 

                  ) : (
                    attendanceStatus[story] && attendanceStatus[story][user] ? (
                      <Link to={`/story/${story}`}>
                        <p style={{ backgroundColor: '#39393A', borderRadius: '10px' }}>Completed</p>
                      </Link>
                    ) : (
                      story === 'Solstia Streets' ? (
                        <Link to={`/story/${story}`}>
                          <p style={{ backgroundColor: '#808080', borderRadius: '10px' }}>Optional Game</p>
                        </Link>
                      ) : (
                        <Link to={`/story/${story}`}>
                          <p style={{ backgroundColor: '#ebb217', borderRadius: '10px' }}>Read Now</p>
                        </Link>
                      )
                    )
                    )}
                    
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div></div>
  );
}

export default AllAttendance;
