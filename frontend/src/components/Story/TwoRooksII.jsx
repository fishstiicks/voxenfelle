// ICONS
const rin = 'https://file.garden/ZvdEiabDvGKGr36j/Illustration33.png';
const tera = 'https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2Fe964770d-173f-44ad-b756-68a4cbcdce86%2FZ_TERA.png/size/w=2000?exp=1737483683&sig=ee66aNpDSsKvtNDobUwblj3iQlFIPKuVBNVkAi6sPu0';
const vika = 'https://i.ibb.co/q9Zr763/image.webp';


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

function TwoRooksII() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = 'Two Rooks';
    const sessionUser = useSelector((state) => state.session.user);

    const checkAttendance = async () => {
        const response = await fetch(`/api/story/${story}/check`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setHasAttended(data.hasAttended);
        }
      };
    
      useEffect(() => {
        if (sessionUser) {
          checkAttendance();
        } else {
          setHasAttended(false);
        }
      }, [sessionUser]);

    
    const attendStory = () => {
        csrfFetch(`/api/story/attend`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ story }),
        })
            .then((response) => {
            if (!response.ok) {
                throw new Error('Unable to add attendance.');
            }
            return response.json();
            })
            .then(() => {
            setHasAttended(true);
            })
    };

  return (
    <div className="main-content">
        <div className='story-body'>
        <div className='big center alt-font'><b>TWO ROOKS (PART 2): START</b></div>
        <div className='story-speech npc'>
            <Link to={`/characters/Rin`}><img src={rin} 
            style={{ border: '2px solid #c21c1c', borderRadius: '50px'}} className='story-avatar'></img></Link>
            <div className="story-speech-text">
            <div className="story-speech-name">RIN</div>
            <p>"You—"</p>
            <p>Rin appears from somewhere off to the side. Gauntlets swing at Viktoriya, the light from his collar glowing red as he turns his voidpact powers on.</p>
            </div>
        </div>

        <div className='story-speech npc'>
            <img src={vika} 
                className='story-avatar'/>
            <div className="story-speech-text">
                <div className="story-speech-name">Viktoriya Yunge</div>
                <p>"!"</p>
                <p>Viktoriya steps away from the attack. In one quick motion, she hits the back of Rin's neck with her cane. A loud thump echoes through the air.</p>
                <p>Rin collapses to the ground, unconscious.</p>
                <p>"..."</p>
                <p>The sound of static crackles. Viktoriya puts a hand to her ear, as if listening to something.</p>
                <p className='small'>"Yes, understood."</p>
                <p>Mismatched eyes settle on the scene, glancing over you one by one. Viktoriya straightens her posture, her cane tapped loudly to the ground.</p>
                <p>"...Voxenfelle Academy."</p>
                <p>"Hand over the flash drive immediately. If you do not forfeit it within five minutes,"</p>
                <p><b>"—It will be taken from you by force."</b></p>
            </div>
            </div>

            <p>The clock ticks.</p>
            <p>In front of you—in the flesh—is Viktoriya Yunge, daughter of the Defense Minister.</p>
            <p>Something cold washes over you in her presence. It's a different feeling from Cain; while he was obviously dangerous, it was always a gamble with him—a man who was in it for the thrill of the game and nothing else.</p>
            <p>But Viktoriya was a different story. You can feel it in your bones.</p>
            <p>This was Nikola Yunge's guard dog. The ace up his sleeve, the shadow trailing behind him, the last chess piece on the board,</p>
            <p>And the one who'll turn the tide in his favour.</p>

            <div className='story-speech npc'>
            <img src={tera} 
                className='story-avatar'/>
            <div className="story-speech-text">
                <div className="story-speech-name">Tera</div>
                <p className='alt-font'>"—Hello, can you all hear me?"</p>
            </div>
            </div>

            <p>Suddenly, a voice springs to life in your ear. Tera calls out to you from the intercoms. </p>

            <div className='story-speech npc'>
            <img src={tera} 
                className='story-avatar'/>
            <div className="story-speech-text">
                <div className="story-speech-name">Tera</div>
                <div className='alt-font'>
                <p>"I've been informed that Yunge's daughter has arrived at the school. Please avoid engaging with her as much as possible. We don't know what her aura is, and she may be highly dangerous."</p>
                <p>"Your priority right now is Sullivan's flash drive. It'll take a while for Viktoriya to reach the main building. If we can upload the contents online before she reaches us, then it's game over for both her and Yunge."</p>
                <p>"Some of you will have to stay and hold her off. We need to hurry—we don't have much time left."</p>
                </div>
            </div>
            </div>

            <p className='big'>WIP</p>

            </div>

        <div className="story-end">
            <hr />
            <div className='attendance'>
            {sessionUser && (
                <div>
                {hasAttended ? (
                    <p>You have already attended this story.</p>
                ) : (
                    <button onClick={attendStory}>Complete Attendance</button>
                )}
                </div>
            )}
            </div>
            <div className="story-footer">
                <Link to={`/story/Two Rooks I`}>🠄 Previous</Link>
                <Link to={`/story`}>Next 🠆</Link>
            </div>
            </div>

    </div>
  );
}

export default TwoRooksII;
