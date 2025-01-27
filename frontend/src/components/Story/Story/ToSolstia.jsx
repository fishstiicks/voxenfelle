// ICONS
const vinca = 'https://i.ibb.co/RYW2TGr/Z-VINCA.webp';
const yuenris = 'https://i.ibb.co/tKTB8n4/Z-YUENRIS.webp';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../../store/csrf';

function ToSolstia() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = 'To Solstia';
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
            <div className="time">Saturday, 4:45 P.M.</div>
            <div>Grand Hysse Station</div>
        </div>
        
        <div className="story-body">
            <p>The Grand Hysse Station rises before you in straight, even lines that have been faced in granite and limestone, stretching so far into the distance that it might as well be called the horizon of Astralena. It lies at the very heart of the capital, with a clocktower jutting up from its head, tolling every half hour. Its front steps are bustling with so many people that they form a dark sea, flowing in and out and in and out and in and... oh, you get the idea: it's busy, it's important, and you're here.</p>
            <p>Past the staircases, the security, and all the people, the doors open into the main concourse. A statue of the goddess Hylia is the first thing everyone sees, followed by the departure and arrivals boards. The interior is well-lit and decorated with windows and skylights, and it's all very vivid. Squares of buttery gold overlap with majestic pillars and shiny marble flooring; memorials of history next to retail and dining stops for travelers to peruse; heels clack-and-clack and luggage rolls and the chattering of voices is so prevalent, it seems to rumble just as much as the trains do, from way down below.</p>
            <p>Your train for Solstia leaves at 5 o’clock, and there’s only fifteen minutes left until departure. Have you gotten your luggage in order yet? What sorts of things did you pack? Are you excited for the trip? Remember that no weapons are allowed, so be sure to double check and make sure you didn’t accidentally bring a switchblade in your back pocket!</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>“Is it far away? Do you think the students will be alright?”</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={yuenris} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">YUENRIS</div>
                <p>“It’s just a short walk from the hotel. And…”</p>
            </div>
        </div>

        <p>You spot Professor Vinca and Yuenris, standing not too far from you. They seem to be looking over a map while waiting for everyone to finish their last-minute preparations.</p>

        <p>Before boarding the train, attendants greet you with big smiles and pamphlets, stamped with QR codes that redirect to their website, for passengers who prefer digital means. It includes instructions for accessing the train Wi-Fi (available to passengers for just 10 linne!), a map that delineates the different train compartments, restrooms, the history of the train and its staff, an overview of tourist destinations in Solstia, a catalogue of food, drink, and luxury items, and not much else. The attendants offer their help in stowing away carry-on bags as you're guided to your seats in relative peace and quiet. The sound of your footsteps are softened by the carpeted flooring, almost soundless. The din of the train station and the squealing of rubber against marble seems all too distant now, almost like you're stepping into a new world.</p>

        <p>Each compartment consists of a four-seater arrangement: two pairs of fabric-covered seats face each other from across a plywood table, beside a large window. The curtains have been pulled back to reveal the view, but can be adjusted or drawn shut at any time by those situated in the window seats. The air vents anchored to the wall below the table are definitely out of your control, though, but the temperature regulation around where you're seating is guaranteed to be top-class, neither too hot nor too cold. No beds have been provided, as you've been informed of before the trip; did you remember to bring a pillow?</p>

        <p>You find your seats just in time! The locomotive's engine comes to life, and slowly, it departs from the station.</p>

        <p>Time passes by as the train makes its way over to Solstia. The sun sleeps, replaced by the moon as it decorates the night sky. Eventually, fatigue from the day starts to sink into your body. As the hours enter into the evening, the train’s lights are slowly dimmed, and you find yourself sinking deeper and deeper into your seat.</p>

        <p>Eventually, you fall asleep.</p>

        <div style={{backgroundImage: 'linear-gradient(to bottom, #02051d, #00163d, #001f60, #002884, #0530a8)', borderRadius: '10px', color:'#dde7ee'}}>
        <div className="special-box center"><div className="music"><a href="https://youtu.be/Atmg0FF09q8?si=B5XGF--HVEJkkGUA" target="_blank" rel="noopener noreferrer">♫</a>
            </div><p className='big alt-font'>You wake up to the sound of waves.</p>
            </div>
            <img className='story-cg' src="https://i.ibb.co/WGNvTx5/Illustration25.png"></img>
            <div style={{padding: '25px'}}>
            <p>As you slowly open your eyes, a strange sight greets you—fish swim in a wide expanse of stars and space overhead, painted in shades of white, purple, and blue. Shooting stars pass through the sky every so often, accompanied by a group of whales swimming lazily through the air, as if they have all the time to spend in the world.</p>
            <p>Your body moves to sit up, and something soft moves underneath you. You glance down, only to discover you’ve been sitting in soft white sand this entire time. Seashells litter the ground, and somewhere next to you is a small hermit crab approaching its friend. You think it’ll take a while for him to reach.</p>
            <p>Then, just up ahead, you see it: the ocean, impossibly wide and blue, reflecting the sky and stars above.</p>
            <p>Suddenly, a hand reaches out and lifts the hermit crab up. It sets it down next to its friend. The hermit crabs greet each other with a wave, happy to be reunited.</p>
            <p>“Good evening.”</p>
            <p>Someone greets you. You look up to see the owner of the voice.</p>
            <p>A girl, no older than you are, stands in front of you with her back towards the sea. Her white sundress flutters in the wind as her long ███ hair whips around behind her. ███ eyes gaze upon you warmly as she smiles, reaching a hand out towards you.</p>
            <p>“Or, maybe good morning? It’s all the same here, really.”</p>
            <p>She laughs, and the sound rings like bells in the wind. You take her hand as she lifts you up to stand.</p>
            <p>“Hello there. I hope you slept well.”</p>
            <p>She takes a second to look over your face. Examining, as if awe-struck.</p>
            <p>“...Mm. It really is you.”</p>
            <p>You feel her grip tighten. Still, her hold is warm and gentle. She takes both your hands in hers.</p>
            <p>“We won’t be able to talk for very long. Still, I hope you’ll bear with me for a moment.”</p>
            <p>“...You have a very long journey ahead of you, my love.”</p>
            <p>A breeze blows by. She continues speaking.</p>
            <p>“It will not be an easy one. There will be many challenges and hurdles that you must overcome, and you will find yourself wanting to give up many, many times.”</p>
            <p>“...And, at some point, you will feel as though there is nothing else left in the world but despair.”</p>
            <p>Her voice falls quiet. She glances down at your hands, rubbing soft circles into the skin with her thumb.</p>
            <p>“But you mustn’t let those thoughts consume you.”</p>
            <p>“As long as you have hope in your heart…”</p>
            <p>“...and hold onto the allies you’ve made during your journey…”</p>
            <p>Her hand leaves yours, settling over where your heart is. The touch is warm.</p>
            <p>“Then even the darkest of nights will find itself blessed by light.”</p>
            <p>Suddenly, you hear one of the whales calling from the sky. It turns around slowly, swimming away with its friends one by one.</p>
            <p>“...Our time is up.”</p>
            <p>The girl in front of you tilts her head, watching the whales briefly. Another breeze passes by, stronger this time, as melancholy starts to colour her face.</p>
            <p>“You need to return soon.”</p>
            <p>Your response is met with a mix of emotions—gratitude, sadness, melancholy, longing. Still, she forces a smile onto her face, and pulls her hand back to her side.</p>
            <p>"I'm sorry," is what she says first, and the emotions in her words feel real—as if the burden is both of yours to bear. You as the hero, and her, the one guilty with burdening you in the first place. But whatever she tries to say next is interrupted by another whalesong, and slowly, you find your surroundings turning to light.</p>
            <p>"We'll meet each other again," and she looks upon you with love, warm and full and all too real (because it is, even if it's not reciprocated).</p>
            <p>Another gust of wind blows—this one doesn't stop. It grows stronger and stronger, getting sand in your eyes. The scenery starts to crumble. The girl in front of you opens her mouth, and says one last thing:</p>
            <p>"I know you won't remember it, but..."</p>
            <p>"███. I hope you'll say my name when we meet again."</p>

            </div>
        </div>

        <p>Suddenly, everything turns white.</p>
        <p>Slowly, you rouse from your sleep. It takes a while for your eyes to adjust to your surroundings. Around you are familiar faces, waking up for the morning after a long night’s rest. The atmosphere is mostly quiet, only disturbed by the hum of the train’s engine and the occasional yawn of your classmate.</p>
        <p>Were you dreaming about something? You can’t seem to remember, but you think you’re forgetting something important.</p>
        <p>A light glows from underneath the window curtain beside you. You pull it back, and what greets you is the sight of a white city, standing proudly in front of a backdrop of glittering blue waters.</p>
        <p className='center' style={{ fontSize: '35px'}}><i>Welcome to Solstia!</i></p>
        <img className='story-cg' src='https://i.ibb.co/NYzYfhL/Solstia-Streets-Phed-Ione.png'></img>
        <p>The Solstia Central Station looks to be half the size of the Grand Hysse Station, but the statue of the goddess Hylia at its center is just as majestic, and perhaps even more well-loved than the one in the capital. People can be found lining up in front of Her, following an age-old tradition: touch Her hand to feel Her warm welcome, when you arrive in Solstia, the Holy City!</p>
        <p>The sun is high in the sky. It's clear that it's a beautiful day, visible even from indoors, through the windows that open up to a perfect blue and rays of filtered light. Locals seem to be dressed for warmer weather outside, so it's no wonder the air conditioning here is working overtime. The air feels as refreshing as a summer breeze.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>“We’re here!”</p>
            </div>
        </div>

        <p>Once you’ve got your luggage in tow, Vinca waves at you all to come closer.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>“The hotel is a fifteen minute walk from here, but we’ve chartered a bus, since we have so much luggage and everything.”</p>
            </div>
        </div>

        <p>Sure enough, you see a large bus waiting for you not too far from the station’s entrance. You manage to catch a glimpse of the bus driver standing by the door. He has brown hair. A sudden pang of wistfulness hits you. It doesn’t feel right.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>"We'll leave once everyone's ready. Make sure not to leave anything behind!"</p>
            </div>
        </div>

        <p>Eventually, you drive away on the bus to your hotel. Before you go to your respective rooms, Professor Vinca reminds you that you're meeting the vessel tomorrow. It seems like you have a long day ahead, so be sure to get plenty of rest tonight!</p>

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
                <Link to={`/story/Two Rooks II`}>🠄 Previous</Link>
                <Link to={`/story/The Vessel`} style={{marginLeft: '3%'}}>Next 🠆</Link>
            </div>
            </div>
        
    </div>
  );
}

export default ToSolstia;
