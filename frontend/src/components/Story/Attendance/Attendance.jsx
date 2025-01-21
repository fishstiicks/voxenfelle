import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Story/Attendance/Attendance.css';

const stories = ['Candle Ceremony I', 'Candle Ceremony II', 'An Audience', 'Two Rooks I', 'Two Rooks II']

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
      const fetchAttendance = async () => {;

        const status = {};
        for (let story of stories) {
          status[story] = await checkAttendance(story);
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

          {sessionUser ? 
              stories.reverse().map((story) => (
                <div className="attendance-listing" key={story}>
                  <div className="attendance-date"></div>
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
              ))
            :
            stories.reverse().map((story) => (
              <div className="attendance-listing" key={story}>
                <div className="attendance-date"></div>
                <div className="attendance-title">
                  <Link to={`/story/${story}`}>{story}</Link>
                </div>
                <div className="attendance-status">
                    <Link to={`/story/${story}`}>
                      <p style={{ backgroundColor: '#ebb217', borderRadius: '10px' }}>Read Now</p>
                    </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
      <div id='npc-box'>
      <div className='npcs'>
      <p className='npc-header'>VOXENFELLE ACADEMY</p>
      <div className='npc-row'>
          <div className='npc-listing'>
          <div className='npc-info'>
              <img className='npc-image' src="https://nyewwe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F1388b2be-e6c6-43c1-8355-81e1c94a6250%2FZ_VINCA.png?table=block&id=71fa2989-49b8-4392-80ac-39aca74876dc&spaceId=e99cfe6f-3fec-4c86-b805-3235000eb51a&width=2000&userId=&cache=v2"></img>
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
          <img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F352cd77e-fa73-4420-bc74-d187cfb7d242%2FZ_YUENRIS.png/size/w=2000?exp=1737498317&sig=P3v6bReBJO3bnB3HW2s2-Sr3vg4te8eqOrKYhn5sknE"></img>
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
          <Link to={`/characters/Chou-chou`}><img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2Fa5229e9f-b594-4815-abf6-e008fbe16b48%2FZ_CHOU-CHOU.png/size/w=2000?exp=1737498528&sig=3bLT9RINUVcnjXGtI1sShvfEY-GbiokTrumZyt4gKjs"></img></Link>
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
          <Link to={`/characters/Rin`}><img className='npc-image' src="https://img.notionusercontent.com/ext/https%3A%2F%2Ffile.garden%2FZvdEiabDvGKGr36j%2FIllustration33.png/size/w=2000?exp=1737413542&sig=QdjSaAkD6AM8QH5pWpj-qsbn138NXaF-n-Frkjfyo0o"></img></Link>
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
          <img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2Fe964770d-173f-44ad-b756-68a4cbcdce86%2FZ_TERA.png/size/w=2000?exp=1737483683&sig=ee66aNpDSsKvtNDobUwblj3iQlFIPKuVBNVkAi6sPu0"></img>
            <div className='npc-name'><p style={{ color: '#c21c1c', fontSize: '15px'}}>✖</p>Tera</div>
            <div className='npc-identity'>He/Him - 28</div>
            </div>
            <div className='npc-blurb'>
              <p>PACT: Energy Shield</p>
              <p>Formerly part of the Void Army. Currently working for the government/in Voxenfelle’s research department under the same collar restrictions.</p>
              <p>Despite appearances, he has the softer personality between former Void Army members. Often seen making regular trips to an orphanage in Hysse.</p></div>
        </div>
        </div>

        <p className='npc-header'>SEASON 1</p>
          <div className='npc-row'>
            <div className='npc-listing'>
            <div className='npc-info'>
              <img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2Fe1421b1d-4478-4552-9f08-14de6465161a%2FZZ_ARIAS.png/size/w=2000?exp=1737500127&sig=M0ELi63RxHEamlkt0EF4jVX6ZYKvomORMssSnJJAEOg"></img>
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
              <img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F3cd778e1-150a-491f-b988-f59ec3d8d5c6%2Fimage.png/size/w=2000?exp=1737500276&sig=kF8YIt-ZbCAr3ZQDec_V9gyFMaPTcbpKLcD_CXejB2U"></img>
                <div className='npc-name'><p style={{ color: '#ff9214', fontSize: '15px'}}>✦</p>ROWAN S. SULLIVAN</div>
                <div className='npc-identity'>He/Him - 40</div>
                </div>
                <div className='npc-blurb'>
                  <p>AURA: Creation [Animal]</p>
                  <p>Minister of Aura Management. Retired hunter.</p>
                  <p>Notorious for mismanagement of hunter resource and unreliability. Infamously lead to a village’s destruction by voidwalkers due to not showing up. Rumours also say he rigged the votes to win.</p>
                  <p>A weak-willed man who was forced into politics by his family. Constantly haunted by his past mistakes.</p></div>
            </div>

            <div className='npc-listing'>
            <div className='npc-info'>
              <img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F958ed487-bd04-49a4-82e2-55cc5e9d928d%2Fimage.png/size/w=2000?exp=1737500360&sig=siA0CqEQ7ab5tC5SgmyZ38IS8gRBTYzEZHGtY6xfV_U"></img>
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
              <img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F316b4e71-17cb-4ec8-b9c2-2f5bcfe12bf6%2Fimage.png/size/w=2000?exp=1737500493&sig=bY_qWan9tVKljHvD1BUF85O5gJchfvKksq82Hyy6FvQ"></img>
                <div className='npc-name'><p style={{ color: '#242424', fontSize: '15px'}}>✦</p>Cain</div>
                <div className='npc-identity'>He/Him - ???</div>
                </div>
                <div className='npc-blurb'>
                  <p>AURA: Mirror Image</p>
                  <p>An ex-convict with a violent temperament who was charged with the murder of his brother. Managed to get out of prison due to Nikola Yunge's assistance. Worked under him as a gun for hire before being sent back to prison.</p></div>
            </div>

            <div className='npc-listing'>
            <div className='npc-info'>
              <img className='npc-image' src="https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2Fe20ce5e1-07bb-4cf8-9210-854b9ff5cd8e%2Fimage.png/size/w=2000?exp=1737439694&sig=inWUdIyC2w1UeIyrBk6HHb9fNfS30G2bGjSbhhg-ACE"></img>
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
