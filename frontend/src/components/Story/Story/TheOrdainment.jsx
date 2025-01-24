// ICONS
const elysia = 'https://i.postimg.cc/Gp6QgQYF/0064395dc0bb2b63a97db96c2c30ba41.webp';
const black ='https://i.ibb.co/MSWT8Hw/vine-black-painted-swatch-300x300.jpg';


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../../store/csrf';

function TheOrdainment() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = 'The Ordainment';
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
        <a href="#start"><button id='scroll-to-start'>🠉</button></a>
        <a id="start"></a>
        <div className="story-big">
            <div className="time">Saturday, 8:00 A.M.</div>
            <div>Main Road, outside the First Temple</div>
        </div>
        
        <div className="story-body">
            <p>You've walked this way before. You follow familiar faces down the main road. The same cobblestone yawns wide, a memory superseded: people, people, people in every direction, so much so that you can only go the right way by relying on what you remember. The same sky dawns blue over your head, as bright as water, as clear as what you know.</p>
            <p>In the early morning light, the buildings look new. You have an inkling it's the result of all the people bustling about, preparing for the celebration to come. People are putting up stalls with colorful banners and streamers, steam wafting up from grills set out under the sun. People are handing out little flags nearby, hands outstretched, offered up like prayers: Take one, please! Bless you!</p>
            <p>The Vessel's ordainment ceremony has yet to commence. For another few minutes, the anticipation will continue to climb and climb and climb until the best part of the day is finally here—to bless us all!</p>
            <p>A familiar face approaches you through the crowd—one of Elysia's retainers. Though his expression remains neutral, he bows politely at the sight of you, before holding a gloved hand out.</p>
            <p>“I will hold onto your fish for the time being. When the ceremony is at its peak, I will give you a cue. Please come up to the temple at that time to hand the sea bass over to Lady Elysia yourself.”</p>
            <p>With your winning sea bass in hand, he sets it into a cooler and disappears back into the temple.</p>
            <p>Suddenly, a temple bell rings. It cuts through the sound of the crowd, drawing attention towards the holy building. Another bell joins, and another, and another, and another—until eight bells ring in succession, signifying the start of the ceremony. The people cheer in unison, bells and voices melding together to create a song of anticipation.</p>
            <p>Then, up on the temple's balcony, a set of double doors slowly opens.</p>
            <p>A figure walks out, bathed in white and gold. Blond locks catch the light of the sun, and for a moment, it's as if a second sun has appeared before you.</p>
            <p>Satella, your ear feels warm. The person you see is familiar.</p>
            <p>The girl takes a few steps forward, stopping just as she reaches the balcony raining. Cheers erupt even louder as she peers down at the people, a smile gracing her small face.</p>
            <p>“I present to you, the vessel of the goddess Hylia herself,” a priest announces from beside her, the baritone of his voice carrying through the massive crowd. “Lady Elysia!”</p>
            <p>Elysia raises a hand and waves, the smile on her lips growing ever wider.</p>

            <div className='story-speech npc'>
            <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>“It is my honour to stand in front of you today as none other than Hylia's vessel,” she starts, the crowd's cheers quieting down with each spoken word. “As you all may know, the Goddess herself has blessed me with powers beyond one’s wildest imaginations. With this power comes great responsibility—a responsibility that I am ready to bear until the end of my life.”</p>
                <p>“...One of those responsibilities includes bringing about change.”</p>
            </div>
            </div>

            <p>Her voice slows. Elysia settles her eyes on the crowd, a more serious expression settling on her face.</p>

            <div className='story-speech npc'>
            <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>“Thus, as Hylia’s newly ordained vessel, I would like to announce my plans to free all voidpacts from prison.”</p>
                <p>“This will be done in a gradual fashion, with those who were previously working as professional Hunters being first in line. I am also aiming to push for a kinder treatment for voidpacts around the world, starting with adjustments towards some inhumane features currently present in their tracking collars.”</p>
                <p>“...I am aware this statement may seem controversial to many. I am also aware that a majority of you will disagree with me. However,”</p>
                <p>“I have felt the goddess’s will through me.” She pauses. “And it has been made clear that a universal peace will not be attained if we do not first treat our fellow people with the understanding that they deserve—that <i>all of you</i> deserve.”</p>
                <p>“I hope—no, I <i>pray</i>, and I will beg, that you, my people—<i>Hylia’s</i> people—will support my, and Her, will.”</p>
                <p>“...And together, may we create a kinder and gentler world for all of us.”</p>
                </div>
                </div>

                <p>. . .</p>
                <p>Silence.</p>
                <p>Elysia finishes her speech, and what meets her is utter, unanimous silence.</p>
                <p>For a moment, you feel your heart dropping to your stomach. You see Elysia’s expression falter, disheartened by the crowd’s response. The silence is deafening, and you think to yourself, she’s failed. She’s failed to rally the people of Solstia, and she’ll fail rallying the whole world, too.</p>
                <p>It’s a lost cause—even the vessel of Hylia herself can’t bring change to this world.</p>


                <div className='story-speech npc'>
                <img src={black} 
                    className='story-avatar'/>
                    <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>“Elysia!”</p>
                </div>
                </div>

                <div className='story-speech npc'>
                <img src={black} 
                    className='story-avatar'/>
                    <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>Then, an older woman chimes in next to him, throwing a string of cheers towards the vessel’s direction.</p>
                </div>
                </div>

                <div className='story-speech npc'>
                <img src={black} 
                    className='story-avatar'/>
                    <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>“Elysia! Elysia! Elysia!” More voices join in cheer. One, ten, a thousand—until nearly the whole street erupts into loud cheers, moved by Elysia’s words.</p>
                </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">ELYSIA</div>
                    <p>"...!"</p>
                </div>
                </div>

                <p>Elysia’s face breaks into a smile. It’s hard to see from this distance, but distantly—and this is only a guess—you think you see her eyes start to water.</p>
                <p>All around you, the people cheer in unison.</p>
                <p>They cheer in support for Elysia, for voidpacts, and perhaps even—for the dream of a kinder, gentler future.</p>
                <p>Satella, the souldrop on your ear grows hot. A sense of panic rises in your chest.</p>
                <p>Suddenly, you hear a ringing.</p>

                <p className='big'><i><b>BOOM!</b></i></p>

                <p>It happens all too fast for you to process.</p>
                <p>First come the screams, crowds scatter every which way in a panic, running from the main road. Then the debris, broken pieces of brick and marble lying underfoot covering every surface possible, creating a dangerous path as people stumble and fall and injure themselves further amongst the chaos.</p>
                <p>Finally, the heat.</p>
                <p>Flame flickers from what once was the temple's balcony, now reduced to a pile of broken debris on the ground. Something white glimmers amongst the grey and red: half of a souldrop earring, separated from its owner.</p>
                <p>In the distance—hazy through the ash and smoke as your eyes struggle to adjust to your surroundings—you see it, the figure of an unconscious girl, dragged away by masked figures as they disappear into the winding alleyways of the city.</p>
                <p>Hylia’s vessel is gone.</p>
                <p>Elysia has been kidnapped.</p>
        </div>
        <div className='story-big'>⚠️ THE VESSEL HAS BEEN KIDNAPPED!</div>
        <div className='story-body'>
            <p>The city has been thrown into chaos as people search for the missing vessel and recuperate from the bomb's damages. But, not all hope is lost. As students of Voxenfelle Academy, as well as hunters-in-training, you have the power to aid the church and authorities in their search for Elysia. Thus, we'd like to introduce...</p>
            <div className='big center alt-font'><b>☀️ ADVENTURE: SOLSTIA STREETS</b></div>
        </div>

        <div className="story-end">
        <hr />
            <div className='attendance'>
            {sessionUser && (
                <div>
                {hasAttended ? (
                    <p>You have already attended this story.</p>
                ) : (
                    <button className="attend-btn" onClick={attendStory}>Complete Attendance</button>
                )}
                </div>
            )}
            </div>
            <div className="story-footer">
                <Link to={`/story/The Vessel`}>🠄 Previous</Link>
                <Link to={`/story/Solstia Streets`} style={{marginLeft: '3%'}}>Home 🠆</Link>
            </div>
            </div>
        
    </div>
  );
}

export default TheOrdainment;
