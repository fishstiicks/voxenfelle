import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Story/Attendance/Attendance.css';

const stories = {
  'DEFENSE MINISTRY': ['Candle Ceremony I', 'Candle Ceremony II', 'An Audience', 'Two Rooks I', 'Two Rooks II'],
};


const vinca = 'https://i.ibb.co/RYW2TGr/Z-VINCA.webp';
const yuenris = 'https://i.ibb.co/tKTB8n4/Z-YUENRIS.webp';
const cc = 'https://i.ibb.co/XVxSt9F/Z-CHOU-CHOU.webp';
const rin = 'https://i.ibb.co/yFNT4Zy/Illustration33.webp';
const rowan = 'https://i.ibb.co/hZfwY4V/image.webp';
const vika = 'https://i.ibb.co/KKdR9KM/image.png';
const yunge = 'https://i.ibb.co/bPPmbmS/image.png';
const cain = 'https://i.ibb.co/TbPWcmn/image.png';
const arias = 'https://i.ibb.co/DwPSFNL/ZZ-ARIAS.webp';
const tera = 'https://i.ibb.co/2cz1hpM/Z-TERA.webp';


function Attendance() {
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const sessionUser = useSelector((state) => state.session.user);

  const checkAttendance = async (story) => {
    if (!sessionUser) return false;

    const response = await fetch(`/api/story/${story}/check`, {
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
    if (sessionUser) {
      const fetchAttendance = async () => {
        const status = {};

        for (let arc in stories) {
          for (let story of stories[arc]) {
            status[story] = await checkAttendance(story);
          }
        }

        setAttendanceStatus(status);
      };

      fetchAttendance();
    } else {
      setAttendanceStatus({});
    }
  }, [sessionUser]);

  return (
    <div className="main-content">
      <div id='storypage-body'>
        <div id="attendance-body">
          <div id="attendance-box">
            <p id="attendance-header">{sessionUser ? `${sessionUser.username}'s ATTENDANCE` : 'TABLE OF CONTENTS'}</p>

            {sessionUser ? (
              <>
                {Object.keys(stories).map((arc) => (
                  <div key={arc}>
                    <div className='arc-title'><b>{arc}</b></div>
                    {stories[arc].map((story) => (
                      <div className="attendance-listing" key={story}>
                        <div className="attendance-title">
                          <Link to={`/story/${story}`}>{story}</Link>
                        </div>
                        <div className="attendance-status">
                          {attendanceStatus[story] ? (
                            <Link to={`/story/${story}`}>
                              <p style={{ backgroundColor: '#39393A', borderRadius: '10px' }}>Completed</p>
                            </Link>
                          ) : (
                            <Link to={`/story/${story}`}>
                              <p style={{ backgroundColor: '#ebb217', borderRadius: '10px' }}>Read Now</p>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <>
                {Object.keys(stories).map((arc) => (
                  <div key={arc}>
                    <div className='arc-title'><b>{arc}</b></div>
                    {stories[arc].map((story) => (
                      <div className="attendance-listing" key={story}>
                        <div className="attendance-title">
                          <Link to={`/story/${story}`}>{story}</Link>
                        </div>
                        <div className="attendance-status">
                          <Link to={`/story/${story}`}>
                            <p style={{ backgroundColor: '#ebb217', borderRadius: '10px' }}>Read Now</p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
            <div className='arc-title'><b>SOLSTIA</b></div>

            <div className='attendance-listing'>
              <div className='attendance-title'>To Solstia</div>
              <div className='attendance-status'><p style={{ backgroundColor: '#808080', borderRadius: '10px' }}>🔒</p></div>
            </div>

            <div className='attendance-listing'>
              <div className='attendance-title'>The Vessel</div>
              <div className='attendance-status'><p style={{ backgroundColor: '#808080', borderRadius: '10px' }}>🔒</p></div>
            </div>

            <div className='attendance-listing'>
              <div className='attendance-title'>The Ordainment</div>
              <div className='attendance-status'><p style={{ backgroundColor: '#808080', borderRadius: '10px' }}>🔒</p></div>
            </div>

            <div className='attendance-listing'>
              <div className='attendance-title'>???</div>
              <div className='attendance-status'><p style={{ backgroundColor: '#808080', borderRadius: '10px' }}>🔒</p></div>
            </div>
          </div>
        </div>
      
      <div id='npc-box'>
      <div className='npcs'>

      <div id='events-box'>
      <div className='events-header'>UPCOMING EVENTS</div>
        <div className='event-listing'>
          <p className='event-date'>JANUARY 25 @ 7 PM EST</p>
          <p className='event-desc'>Plot RP</p>
        </div>
        <div className='event-listing'>
          <p className='event-date'>FEBRUARY 1</p>
          <p className='event-desc'>Game Jam Starts</p>
        </div>
        <div className='event-listing'>
          <p className='event-date'>MARCH 15</p>
          <p className='event-desc'>Game Release</p>
        </div>
      </div>

      <p className='npc-header'>VOXENFELLE ACADEMY</p>
      <div className='npc-row'>
          <div className='npc-listing'>
          <div className='npc-info'>
              <img className='npc-image' src={vinca}></img>
                <div className='npc-name'><p style={{ color: '#870923', fontSize: '15px'}}>✦</p>EDEN VINCA</div>
                <div className='npc-identity'>He/Him - 32</div>
                </div>
                <div className='npc-blurb'>
                  <p>AURA: Blood Manipulation</p>
                  <p>Your professor.</p>
                  <p>A professor for Applied Magics at the academy, as well as the homeroom teacher of class 2-A and 2-B. Has a soft personality, though can be a little airheaded at times. Despite his squishiness, he's good at his job and holds a genuine fondness for all his students.</p></div>
            </div>

        <div className='npc-listing'>
        <div className='npc-info'>
        <img className='npc-image' src={yuenris}></img>
            <div className='npc-name'><p style={{ color: '#c21c1c', fontSize: '15px'}}>✖</p>YUENRIS LAFAYE</div>
            <div className='npc-identity'>She/Her - 32</div>
            </div>
            <div className='npc-blurb'>
              <p>PACT: Sword Construct</p>
              <p>Your professor. A voidpact under the watch of Eden Vinca.</p>
              <p>Formerly known as "Hound", leader of the Void Army. Currently a combat instructor at Voxenfelle and tightly bound by the government. She was the first auraless winner of Felle-Festival, which sparked large controversy at the time. Despite her past, she takes her work seriously and trains her students in earnest. Seemingly stoic at first, but is quietly kind.</p></div>
        </div>
        </div>

        <div className='npc-row'>
        <div className='npc-listing'>
        <div className='npc-info'>
          <Link to={`/characters/Chou-chou`}><img className='npc-image' src={cc}></img></Link>
            <div className='npc-name'><p style={{ color: '#c21c1c', fontSize: '15px'}}>✖</p>Chou-chou</div>
            <div className='npc-identity'>She/Her - 22</div>
            </div>
            <div className='npc-blurb'>
              <p>PACT: Voidwalker Taming</p>
              <p>A former member of the Void Army and a current classmate of yours.</p>
              <p>Currently a student in class 2-B. Despite her confidence during the Void Army's first appearance, she seems to have a rather anxious personality underneath.</p>
              <p>Unsuccessfully tried to break out of prison before being offered to attend Voxenfelle. Cries easily, but she's doing her best.</p></div>
        </div>

        <div className='npc-listing'>
        <div className='npc-info'>
          <Link to={`/characters/Rin`}><img className='npc-image' src={rin}></img></Link>
            <div className='npc-name'><p style={{ color: '#c21c1c', fontSize: '15px'}}>✖</p>Rin</div>
            <div className='npc-identity'>He/Him - 22</div>
            </div>
            <div className='npc-blurb'>
              <p>PACT: Voidwalker Taming</p>
              <p>Formerly disguised as your senior, he was revealed to be a part of the Void Army. Currently, he's in the same year as you - though he rarely ever attends class</p>
              <p>Village was wiped out by voidwalkers due to Rowan Sullivan going MIA during the attack.</p>
              <p>Seems to have lost all hope after the Void Army's failure and being sent to prison. Currently, he's in the same year as you - though he rarely ever attends class.</p></div>
        </div>

        <div className='npc-listing'>
          <div className='npc-info'>
          <img className='npc-image' src={tera}></img>
            <div className='npc-name'><p style={{ color: '#c21c1c', fontSize: '15px'}}>✖</p>Tera</div>
            <div className='npc-identity'>He/Him - 28</div>
            </div>
            <div className='npc-blurb'>
              <p>PACT: Energy Shield</p>
              <p>Formerly part of the Void Army. Currently working for the government/in Voxenfelle's research department under the same collar restrictions.</p>
              <p>Despite appearances, he has the softer personality between former Void Army members. Often seen making regular trips to an orphanage in Hysse.</p></div>
        </div>
        </div>

        <p className='npc-header'>SEASON 1</p>
          <div className='npc-row'>
            <div className='npc-listing'>
            <div className='npc-info'>
            <img className='npc-image' src={arias}></img>
                <div className='npc-name'><p style={{ color: '#c21c1c', fontSize: '15px'}}>✖</p>Arias</div>
                <div className='npc-identity'>He/Him - 42</div>
                </div>
                <div className='npc-blurb'>
                  <p>PACT: ???</p>
                  <p>Former Head Priest of the Holy Temple.</p>
                  <p>Mastermind behind the Void Army's creation and the one controlling Yuenris behind the scenes. Publicly, it's said that he was injured during a Voidwalker attack on the temple and has been recuperating ever since. In reality, he's dead. Connected to something called the 'Society'.</p></div>
            </div>

          </div>

        <p className='npc-header'>DEFENSE MINISTRY ARC</p>

        <div className='npc-row'>
          <div className='npc-listing'>
            <div className='npc-info'>
            <img className='npc-image' src={rowan}></img>
                <div className='npc-name'><p style={{ color: '#ff9214', fontSize: '15px'}}>✦</p>ROWAN S. SULLIVAN</div>
                <div className='npc-identity'>He/Him - 40</div>
                </div>
                <div className='npc-blurb'>
                  <p>AURA: Creation [Animal]</p>
                  <p>Minister of Aura Management. Retired hunter.</p>
                  <p>Notorious for mismanagement of hunter resource and unreliability. Infamously lead to a village's destruction by voidwalkers due to not showing up. Rumours also say he rigged the votes to win.</p>
                  <p>A weak-willed man who was forced into politics by his family. Constantly haunted by his past mistakes.</p></div>
            </div>

            <div className='npc-listing'>
            <div className='npc-info'>
            <img className='npc-image' src={yunge}></img>
                <div className='npc-name'><p style={{ color: '#4a2d6b', fontSize: '15px'}}>✦</p>Nikola Yunge</div>
                <div className='npc-identity'>He/Him - 48</div>
                </div>
                <div className='npc-blurb'>
                  <p>AURA: Fear Manipulation</p>
                  <p>Ex-Head of the Defense Ministry. A tyrannical man who would stop at nothing to achieve his goals. Currently sentenced to 35 years in prison after his crimes were brought to light by Voxenfelle students.</p></div>
            </div>
        </div>          
        <div className='npc-row'>
          <div className='npc-listing'>
            <div className='npc-info'>
            <img className='npc-image' src={cain}></img>
                <div className='npc-name'><p style={{ color: '#242424', fontSize: '15px'}}>✦</p>Cain</div>
                <div className='npc-identity'>He/Him - ???</div>
                </div>
                <div className='npc-blurb'>
                  <p>AURA: Mirror Image</p>
                  <p>An ex-convict with a violent temperament who was charged with the murder of his brother. Managed to get out of prison due to Nikola Yunge's assistance. Worked under him as a gun for hire before being sent back to prison.</p></div>
            </div>

            <div className='npc-listing'>
            <div className='npc-info'>
            <img className='npc-image' src={vika}></img>
                <div className='npc-name'><p style={{ color: '#5e21a3', fontSize: '15px'}}>✦</p>Viktoriya Yunge</div>
                <div className='npc-identity'>She/Any - 22</div>
                </div>
                <div className='npc-blurb'>
                  <p>AURA: Vampirism</p>
                  <p>Nikola Yunge's daughter. Essentially served as Yunge's personal soldier before he was sent to prison. Testified against him in court after Voxenfelle students convinced her she could still change.</p></div>
            </div>
        </div>      

      </div>
      </div>
    </div>
    </div>
  );
}

export default Attendance;
