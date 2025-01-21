// ICONS
const vinca = 'https://nyewwe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F1388b2be-e6c6-43c1-8355-81e1c94a6250%2FZ_VINCA.png?table=block&id=71fa2989-49b8-4392-80ac-39aca74876dc&spaceId=e99cfe6f-3fec-4c86-b805-3235000eb51a&width=2000&userId=&cache=v2;';
const cc = 'https://i.ibb.co/vd6pdDd/CHOU-CHOU.png';
const npc = 'https://i.ibb.co/R02JGTr/f68d79e249fbc0369129d19e5d1b196c.webp';
const rin = 'https://file.garden/ZvdEiabDvGKGr36j/Illustration33.png'
const yuenris = 'https://nyewwe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F352cd77e-fa73-4420-bc74-d187cfb7d242%2FZ_YUENRIS.png?table=block&id=ab495cb4-1e63-41fc-a595-c98ecbb56f53&spaceId=e99cfe6f-3fec-4c86-b805-3235000eb51a&width=2000&userId=&cache=v2';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';

function CandleCeremonyI() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = 'Candle Ceremony I';
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
        <div className="story-big">
            <div className="time">07:45 P.M.</div>
            <div>Hysse City Center</div>
        </div>
        
        <div className="story-body">
            <p>The sun begins to sleep over the city of Hysse.</p>
            <p>Today marks the last day of Void’s Eve. After a week of festivities, only one event yet remains to mark the holiday’s end: the Candle Ceremony.</p>
            <p>Festival booths close up shop one after another as tenants and visitors alike leave in preparation. Though a portion of the attendees have gone ahead to the Hysse river, some remain here to finish up their letters and add finishing touches to their lanterns. The lantern station, albeit more or less empty, has left out some blank lanterns and paint for any last-minute attendees who haven’t gotten to prepare yet. </p>
            <p>There’s still some time left until the ceremony starts. Have you gotten your lanterns in order? Who will be in your thoughts tonight? Are you writing to anyone at all?</p>
            <p>Regardless of your participation, melancholy seems to hang quietly in the air. </p>
            <p>You feel the night will be a long one.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>Just as Vinca's about to lead you all to the river...</p>
                <p>Realization dawns on him as he rummages through his pockets for something non-existent. "Oh, gosh, I forgot my letter back at the office."</p>
                <p>"Um... I'll leave Professor Strega to chaperone you all to the river. I'll be back in a second, alright! I just need to write a new one." Glancing over his peer who is probably a stone's throw away.</p>
                <p>He runs off somewhere to the side.</p>
            </div>
        </div>

        <p>Eventually, you make your way over to the Hysse river.</p>
        <p>Although crowds have gathered along the riverbank, with Yuenris guiding you along, you manage to find a spot somewhere amongst the crowded sea of people.</p>
        <p>You spot an elderly woman carrying three small lanterns in her arms. The lanterns have been painted carefully with intricate weave patterns. Though they’re painted with different designs, they seem to share some motifs with each other, as if they were all family.</p>
        <p>You spot a few children, huddled around a large lantern that nearly rivals them in size. A myriad of things have been painted onto the lantern’s surface: suns, stars, flowers, butterflies, candy… you even spot a few handprints here and there.</p>
        <p>You spot a young adult, carrying two medium-sized lanterns in one hand. Though the lanterns are in opposite colours, they seem to be painted with the exact same floral design, as if mirroring each other.</p>

        <div className='story-speech npc'>
        <img src={npc} className='story-avatar black'></img>
            <div className="story-speech-text">
                <div className="story-speech-name"></div>
                <p>“Hello, please make sure to turn any electronic devices off before the ceremony begins.”</p>

                <p>A volunteer makes their rounds through the crowd, reminding you to turn your phones off to avoid any noises during the ceremony.</p>
            </div>
        </div>
        <p></p>
        </div>

        <hr />

        <div className='cutscene'>
        <div className="story-big">
            <div>Meanwhile, somewhere near the city center...</div>
        </div>

        <div className='story-body'>
            <p>A lone girl sits on a bench, wiping warm tears from her eyes.</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p>“Sniffle…”</p>
                </div>
            </div>

            <p>Chou-chou kneads her cheeks, rubbing away tear marks as she tries to calm herself down. Though it was the last day of Void’s Eve, she could hardly enjoy the atmosphere—much less join the Candle Ceremony.</p>
            <p>Her shoulders droop at the thought. Truthfully, she had looked forward to joining the event with everyone else. But with how things were between her and Oma (and Pomme, too), it was difficult to muster any will to walk towards the riverbank.</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p>“Hah…” Chou-chou sighs. She puts her legs up and hugs her knees close to her chest. “Maybe I should just go back.”</p>
                </div>
            </div>

            <p>As she mulls the thought over, her hand absentmindedly reaches for her phone.</p>
            <p>It unlocks easily with a few swipes. Chou-chou checks her inbox, noticing a few unopened messages. She sends a quick reply to one of the few people she’s willing to talk to right now—Rin—but the message doesn’t send.</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p>“…Right, they probably turned their phones off.” She frowns, sighing a second time.</p>
                </div>
            </div>

            <p>She swipes the app closed and checks her social media instead. She scrolls, and scrolls, and scrolls, and…</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p>“…Huh?”</p>
                </div>
            </div>

            <p>Chou-chou sits up straight, eyebrows scrunching as she scans over her phone screen.</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p>“What? Wait, no, but—”</p>
                </div>
            </div>

            <p>She blinks rapidly, expression contorting further with each passing second.</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p>“No, no, no, that’s…”</p>
                </div>
            </div>

            <p>Panic starts to wash over her face. She searches a website and reads.</p>

        </div>
        </div>

        <hr />

        <div className="story-big">
            <div>Back at the river...</div>
        </div>

        <div className='story-body'>
            <p>Silence starts to fall. It’s almost time.</p>
            <p>One by one, folded letters find their way to lit flames, unsaid words slowly turning to ash and scattering in the evening wind.</p>
            <p>Your hopes, dreams, love, and regrets—it’s time to burn them all away, and hope that they reach those who have passed. Release your lanterns. Watch them fly as they return to Hylia once more.</p>

            <p>You watch as your lantern floats into the air.</p>

            <p>Soon, another lantern joins its place in the sky, followed by another, and another, and another. And before you know it, the night sky has all but filled with lanterns, creating a sea of lights—and souls—overhead. Though the sight fills you with serenity, a sense of melancholy also blooms deep within your chest as you watch them float away.</p>

            <img className='story-cg' src="https://i.ibb.co/6YTZD6g/Illustration25.png"></img>
            <div className="special-box"><div className="music"><a href="https://youtu.be/_fg7A5ngVHA?si=vifWfBiBX3S4ECTi" target="_blank" rel="noopener noreferrer">♫</a>
            </div><p>A thousand and one goodbyes, engulfed by darkness as they return to Hylia’s arms.</p>
            </div>
            <br></br>

            <p>…Now, it’s time to close your eyes. Hold your hands near your heart and pray;</p>
            <br></br>
            <p>pray, for the souls who have gone before us,</p>
            <p>pray, for the ones who are still with us,</p>
            <p>and most importantly—</p>
            <p>pray, for the you who stands here today.</p>
            <br></br>
            <p>For tonight, Hylia watches over us all.</p>
            <br></br>
            <p>Somehow, you feel as if Hylia herself is listening to your prayers.</p>
            <br></br>
            <p>Whether you pray or not, the sound of something shooting into the air catches your attention. You tilt your head up to the sky, when suddenly you see—</p>

            <p>Fireworks, shattering into thousands of glittering sparks above you.</p>
            <img className='story-cg' src="https://i.ibb.co/m5CZrLy/Illustration25-1.png"></img>
            <p>They whizz and coil upwards, bursting in quick succession, creating a kaleidoscope of colours behind gently floating lanterns.</p>
            <p>You feel your heart stirring at the sight.</p>
            <img className='story-cg' src='https://i.ibb.co/J7hYGdy/Illustration25-2.png'></img>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p className='big'>“Pomme–!!”</p>
                </div>
            </div>

            <p>Suddenly, a familiar pink-haired girl bursts through the crowd.</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">CHOU-CHOU</div>
                <p>Chou-chou looks at you all with wide eyes, her expression contorting in panic.</p>
                <p>“Pomme, Oma—hah, we need, we need to—” Her words stagger as she struggles to catch her breath, but although her words come out in broken fragments, the sense of urgency in her voice is palpable.</p>
                <p>“Yunge, he—”</p>
                </div>
            </div>
            <p>Suddenly, you sense the atmosphere shift.</p>
            <p>You look around. It’s difficult to move your attention elsewhere—your eyes keep returning to Chou-chou panicking in front of you.</p>
            <p>Footsteps grow louder by the second, heavy as it cuts through the air.</p>
            <p>All of a sudden, you find yourselves surrounded.</p>

            <div className='story-speech npc'>
               <img src={npc} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">POLICE</div>
                <p>“...”</p>
                </div>
            </div>

            <p>Policemen stand before the crowd of students, forming a half-circle as they block any possible exits from the river. Each one of them stares you down with a steely gaze.</p>
            <p>…Eventually, you notice the patrol rifles in their arms.</p>

            <div className='story-speech npc'>
               <img src={yuenris} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Yuenris</div>
                <p>“What’s the meaning of all this?”</p>
                <p>Yuenris steps forward, her back turned against you all. “We’ve done nothing illegal here.”</p>
                <p>Her right arm raises slightly as she speaks. Protective.</p>
                </div>
            </div>

            <div className='story-speech npc'>
               <img src={npc} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">POLICE</div>
                <p>“...”</p>
                </div>
            </div>

            <p>None of them respond.</p>
            <p>The police officer facing Yuenris, however, raises his rifle.</p>
            <p>…And aims it at her.</p>
            <p>One by one, they raise their rifles in quick succession.</p>
            <p>All of them are pointed at you.</p>
            <p>Your vision darts between the policemen, eyeing for a way out. But their formation is tight—escape seems impossible. As you catch sight of their weapons, you notice something.</p>
            <p>…They’re only aiming at voidpacts.</p>

            <div className='story-speech npc'>
               <img src={yuenris} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Yuenris</div>
                <p>“...” Yuenris’s eyes narrow at the weapon.</p>
                <p>“This show of hostility is unprovoked.” She glances at the policeman, an unamused expression painting her face as she steps forward.</p>
                <p>“We have the right to be here, and—”</p>
                </div>
            </div>

            <p className='big'><i><b>—CRACK!</b></i></p>

            <p>The sound of impact suddenly cuts through the air like lightning.</p>

            <div className='story-speech npc'>
                <Link to={`/characters/Rin`}><img src={rin} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">RIN</div>
                <p className='big'>“YUENRIS!!”</p>
                </div>
            </div>

            <p>Rin’s shouting follows quickly after.</p>

            <p>You see her—Yuenris—fallen to the ground, a hand raised to clutch at the side of her head. Despite the slight distance, you’re able to catch sight of something dripping onto the ground.</p>

            <p style={{color: '#ad1b1b' }}>Blood.</p>

            <p>It trickles down her face, down her chin, before freefalling down to the ground. The red liquid soaks into the earth, disappearing as if it never existed in the first place.</p>
            <p>The police officer clicks his tongue.</p>
            <p>He raises his gaze—his expression a mix of anger and annoyance—and settles his eyes on the lot of you.</p>

            <div className='story-speech npc'>
               <img src={npc} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">POLICE</div>
                <p>“Hands in the air.” He speaks, voice cold and cruel.</p>
                <p>“Nikola Yunge’s bill has passed.”</p>
                <p>“Bill A-284—”</p>
                <p>He starts, raising his rifle back up. The rest of them follow like programmed robots.</p>
                </div>
            </div>

            <div className='story-speech npc'>
               <img src={npc} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">POLICE</div>
                <p className='big'><b>“All voidpacts in Astralena are to be outlawed and terminated immediately.”</b></p>
                </div>
            </div>

            <p style={{fontSize: '50px', width: '100%', textAlign: 'center', fontFamily: "'B612 Mono', monospace"}}><a href="https://www.youtube.com/watch?v=r9vk4bWtjnk&ab_channel=NELLE" target="_blank" rel="noopener noreferrer"><u>📽️ WELCOME TO SEASON 2</u></a></p>
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
                <Link to={`/attendance`}>🠄 Previous</Link>
                <Link to={`/story/Candle Ceremony II`}>Next 🠆</Link>
            </div>
            </div>
        
    </div>
  );
}

export default CandleCeremonyI;
