// ICONS
const cc = 'https://i.ibb.co/XVxSt9F/Z-CHOU-CHOU.webp';
const rowan = 'https://i.ibb.co/hZfwY4V/image.webp';
const vika = 'https://i.ibb.co/KKdR9KM/image.png';
const cain = 'https://i.ibb.co/TbPWcmn/image.png';

const adam = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d84c154c-d6e8-4f39-8f13-a74ec2521773/dij0hzs-ce4b4ca4-1fad-47ac-bf86-e9fbdada299f.png/v1/fit/w_600,h_600,q_70,strp/untitled_by_twendigo_dij0hzs-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvZDg0YzE1NGMtZDZlOC00ZjM5LThmMTMtYTc0ZWMyNTIxNzczXC9kaWowaHpzLWNlNGI0Y2E0LTFmYWQtNDdhYy1iZjg2LWU5ZmJkYWRhMjk5Zi5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gxPkkYhOd_xA2eBGHGJydxTmf9R-g1UTjpbf2MIqfIo'
const black ='https://i.ibb.co/MSWT8Hw/vine-black-painted-swatch-300x300.jpg';
const war = 'https://i.ibb.co/12x2zgV/transwar.png'
const makoto = 'https://i.ibb.co/fkHfncY/MAKOTO.png';
const juniper = 'https://i.ibb.co/N9CfYZW/gin-picrew.png';
const damir = 'https://i.ibb.co/qp6DjkF/Illustration2-2-1.png';
const harvey = 'https://i.ibb.co/T08W2sj/harvey-base-colo.png';
const milky = 'https://i.ibb.co/XYQpcT6/MILKY.png';
const scottie = 'https://i.ibb.co/HqqFTZb/SCOTTIE.png';
const hong = 'https://i.ibb.co/1rDC4hx/HONG.png';
const oma = 'https://i.ibb.co/mCkGm10/OMA.png';
const beatrix = 'https://i.ibb.co/CQ5fKMm/BEATRIX.png';
const pomme = 'https://i.ibb.co/v4m2QpF/vfx-pomme-picrew.png';
const tomoya = 'https://i.ibb.co/6NhGwhp/TOMOYA.png';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

function TwoRooksI() {

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
    <a href="#start"><button id='scroll-to-start'>🠉</button></a>
    <a id="start"></a>
        <div className="story-big">
            <div className="time">09:00 P.M.</div>
            <div>Voxenfelle Academy</div>
        </div>
        
        <div className="story-body">
            <p>During a quiet evening in your dorm, you suddenly hear a ping.</p>
            <p>It's coming from your phone—a message has been sent to your class group chat. It seems to have been forwarded by another student.</p>
        

        <div className='story-speech npc'>
        <div className='story-avatar'>💬</div>
            <div className="story-speech-text text">
                <div className="story-speech-name">ROWAN S. SULLIVAN</div>
                <p>Hello, this is Sullivan</p>
                <p>I've been having trouble sending the flash drive over. I may have to deliver it myself</p>
                <p>I'll be there around noon tomorrow, please wait for me then.</p>
            </div>
        </div>
        
        <div className='story-speech reverse'>
        <Link to={`/characters/Harvey`}><img src={harvey} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">BUS_LIKER_67</div>
                <p>Noon where lol</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Adam`}><img src={adam} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">ADAM</div>
                <p>Are you coming alone?</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Scottie`}><img src={scottie} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">STARSABER</div>
                <p>DON'T DIE!!!!! do you need help???</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <div className='story-avatar'>💬</div>
            <div className="story-speech-text text">
                <div className="story-speech-name">ROWAN S. SULLIVAN</div>
                <p>Voxenfelle</p>
                <p>I'll be going alone but I haven't told anyone so it should be alright</p>
                <p>You don't need to pick me up. I'll be alright
                This is the least I can do for you.</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Milky`}><img src={milky} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">DAIRYQUEEN</div>
                <p>maybe we should set up ppl to pick him up around the perimeters?</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <div className='story-avatar'>💬</div>
            <div className="story-speech-text text">
                <div className="story-speech-name">ROWAN S. SULLIVAN</div>
                <p>You don't need to pick me up. I'll be alright
                This is the least I can do for you.</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Damir`}><img src={damir} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">NUTTY</div>
                <p>bro can i jus pick u up w my car</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">POMME</div>
                <p>yea this isnt us worried about u but if u die & lose the flash drive we're fucked</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Tomoya`}><img src={tomoya} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">BEAST</div>
                <p>Please, do not take this the wrong way. You are a little too skittish and useless if you were to be jumped for our comfort.</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Adam`}><img src={adam} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">ADAM</div>
                <p>Is there any reason you would want to reject the offer of a meeting committee besides personal awkwardness or risk? I would suggest elaboration because if it is for politeness. Too much hinges on this for it to be a careless decision.</p>
            </div>
        </div>

        <div className='story-speech reverse'>
        <Link to={`/characters/Damir`}><img src={damir} className='story-avatar'></img></Link>
            <div className="story-speech-text text">
                <div className="story-speech-name">NUTTY</div>
                <p>lol its so fucking sad how much we cant trust a 40 year old guy to bring over a flash drive</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <div className='story-avatar'>💬</div>
            <div className="story-speech-text text">
                <div className="story-speech-name">ROWAN S. SULLIVAN</div>
                <p>Rowan is now OFFLINE.</p>
            </div>
        </div>

        <p>Seems like it's his bedtime.</p>

        <p>As you continue to discuss with your peers, the night eventually draws to a close. Tomorrow, Sullivan's flash drive will arrive. Finally, you'll receive a shot at turning the tides in your favour.</p>

        <p>With this, your eyes start to close—accompanied by a vague sense of determination blooming in your chest.</p>

        <p>You go to sleep.</p>
        </div>

        <hr />

        <div className="story-big">
            <div className="time">04:50 P.M.</div>
            <div>Classroom</div>
        </div>
        <div className="story-body">
            <p>You peer at the afternoon sky from your seat.</p>
            <p>Though you've waited for hours, Sullivan has yet to arrive with the flash drive. Worry and unrest starts to settle in the atmosphere—it's long past noon now, and with no sight of the minister, you and your fellow peers can't help but feel like something has gone wrong.</p>
            <p>From the edges of your vision, you notice the sky darkening. Looks like it'll be a cloudy evening today.</p>
            <p>Grey clouds roll across the sky, casting shadows over the earth below. As your eyes glance over the darkened horizon, something in the distance catches your eye.</p>
            <p>Someone is at the school gates.</p>
            <p>You head down to the first floor and make your way out the main building, walking a good distance towards the front gate. </p>
            <p>It's too blurry to tell who it is from here, but sure enough, you see a figure ahead of you. They start to walk forwards, and as your eyes adjust their focus, you realise the figure seemed to be dragging a large bag behind them. Had Sullivan finally arrived?</p>
            <p>The figure continues walking.</p>
            <p>As their silhouette comes closer and turns clearer, realisation starts to dawn—along with a sinking feeling of dread—as two things become clear to you:</p>
            <p>One, that the person walking towards you was not Rowan S. Sullivan,</p>
            <p>And two, that the thing being dragged on the ground was not a large bag at all.</p>

            <div className='story-speech npc'>
                <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"‘Sup guys."</p>
            </div>
            </div>

            <p>A familiar face greets you with a smile.</p>

            <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Wow, did you guys come all the way out here to greet me? I'm so damn touched! <i>Whew</i>, feelin' like a celebrity over here."</p>
            </div>
            </div>

            <p>Cain laughs. As your eyes trail lower, you notice another familiar face—as well as the blood and bruises that mar his body.</p>

            <div className='story-speech npc'>
            <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"..."</p>
            </div>
            </div>

            <p>Rowan S. Sullivan's figure sits unconscious on the ground, held up by the collar as Cain drags him around like an old sack of potatoes.</p>

            <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Heyy." Cain greets. "Why the scary faces? You guys didn't miss me?"</p>
                <p>He pouts, but it quickly turns into a chuckle instead.</p>
                <p>"Well, it's me again! Been a while, huh? How've you guys been? Got your rights back yet?" He tilts his head curiously. "Probably not, huh?"</p>
                <p>"Anyway, why was I here again?" He blinks. "Oh, right. I found <i>this guy</i> over here,"</p>
                <p>Cain pauses to shake Sullivan's body.</p>
                <p>"Trying to do something he really shouldn't be doing. So, obviously, I had to teach him a lesson."</p>
                <p>"Oh, speaking of which, I found this little thing too."</p>
            </div>
            </div>

            <p>Cain lifts his other hand up. In his fingers you see something small, glinting under the sparse sunlight.</p>
            <p>It's the flash drive.</p>

            <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Sullivan here was guarding it with his life. Funny, huh? Little old man trying to play the hero. Geez, the void's gonna freeze over here!"</p>
                <p>Cain barks out another laugh, this one more mocking than the last.</p>
                <p>"Well, I'll be taking these two now. Sorry to rain on your parade. Good luck with life, yeah?"</p>
                <p>"...Is what I <i>would</i> say, but that's not really any fun at all."</p>
                <p>"So how about we play another game together? This one will be real fun, <i>and</i> real fair.</p>
                <p>He flashes a smile, eyeing you one by one.</p>
                <p>"How about this? Steal the flash drive back from me and you win. You get to keep it too, Yunge's dirt and all. If you can't…"</p>
                <p>"Well, I don't think you really wanna find out." Chuckling.</p>
                <p>"Anyway, it's not like you really have a choice, so…"</p>
                <p>Cain tosses the flash drive in the air, lips tugging into a grin as it falls right back into his hand.</p>
            </div>
            </div>

            <div className='cg-box'>
            <div className="special-box center"><div className="music"><a href="https://youtu.be/HgJ3VYyC2KI?si=ySYOLencLleg5cdD" target="_blank" rel="noopener noreferrer">♫</a>
            </div><p className='big alt-font'>"Do your best, yeah?"</p>
            </div>
            <img className='story-cg' src="https://i.ibb.co/xJC3Lvb/cain-flashdrive-2.png"></img>
            </div>

            <div className='minigame alt-font'>
                <p>Note: this was a bot-assisted encounter that required multiple people to play.</p>
                <p>RULES - There are three phases.</p>
                <p>💥 Intercepting
                When Cain has the flash drive, everyone will roll 1d20 in ⁠🎲 ROLLS. Whoever first meets the DC or higher can RP an attack to grab the flash drive from him and run.</p>
                <p>🏃‍♂️ Running
                When a student has the flash drive, roll 1d10 and input the result in the bot. This is how far they ran before one of Cain's clones catches up.</p>
                <p>🤾 Tossing
                When the student gets cornered by Cain, they will need to toss the flash drive to another student. If Cain is in the way, he'll steal the flash drive back! If he isn't in that direction, other students can 
                /choose range choices: NORTH | SOUTH | EAST | WEST
                and whoever matches the direction can catch the flash drive next!</p>
            </div>
        </div>
        <br></br>

        <div className='cutscene'>
        <div className='story-big'>As most of the students fight Cain for the flashdrive...</div>
        <div className='story-body'>
        <div className='story-speech'>
            <Link to={`/characters/Juniper`}><img src={juniper} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Juniper</div>
                <p>While everyone's racing for the flash drive, Juniper turns his attention to the fallen figure on the ground. It's not that he doesn't know that the flash drive's important... that Minister Sullivan is like this because the flash drive's important —</p>
                <p>But as a Hunter, and an Aura user, you're meant to protect people. Especially the ones right in front of you.</p>
                <p>And, you know, that bird's still in his room. He wouldn't be able to stomach having it for nothing — having handed over a carrot that wasn't his, and a wariness that wasn't reciprocated.</p>
                <p>A flash of blue, quick-and-gone — Juniper reappears next to Sullivan, meaning to check his pulse, worried.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Hong`}><img src={hong} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Hong</div>
                <p>Hong tenses when Cain starts multiplying, weaving gleefully between their classmates. It's still a game, but if they're not careful -</p>
                <p>She looks to Sullivan, laying on the ground. Hong doesn't have the capacity to run very fast right now - while Cain's busy, he tries to beeline toward their battered middle aged liability.</p>
                <p>Juniper's already there in the blink of an eye.
                "Juniper. Let's move him." Discreetly.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Juniper`}><img src={juniper} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Juniper</div>
                <p>A nod, and a smile. "Oh— Hong!" Hushed. He goes to hoist Sullivan up, supporting him from his back, by the arms. "Yeah— wanna get his legs?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Hong`}><img src={hong} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Hong</div>
                <p>"I've got them!" Find a raised planter or big tree they can duck behind.</p>
            </div>
        </div>

        <div className='story-speech npc'>
            <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>His pulse is still there. It's faint, but he's (thankfully) still alive. The injuries on his body are many -- it might be best to get him to a healer.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Juniper`}><img src={juniper} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Juniper</div>
                <p>"...Think you could heal him...?" Tentative.</p>
                <p>Thinking about Makoto's Aura...</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Hong`}><img src={hong} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Hong</div>
                <p>"We need to get him out of the way, first. I'll call on someone."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Makoto`}><img src={makoto} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Makoto</div>
                <p>Makoto catches sight of Juniper and Hong. Now that Cain is no longer on his tail, he runs towards them.</p>
                <p>"Hey." He says, catching up on his breath. "Is he alright?" Looking at Sullivan.</p>
            </div>
        </div>

        <div className='story-speech npc'>
            <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>Very much passed out...</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Makoto`}><img src={makoto} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Makoto</div>
                <p>He looks down at Sullivan, badly hurt, but unconscious.</p>
                <p>Hesitantly at first, but Makoto nods. "....Yeah. Yeah okay. I should be able to do that." Healing unconscious people was always easier for him. His hands are shaky, but with a deep breath he places them over Sullivan's shoulder. He uses his healing aura on Sullivan.</p>
            </div>
        </div>

        <div className='story-speech npc'>
            <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>The wounds on Sullivan's body start to heal.</p>
                <p>Colour returns to his pale face as his breathing steadies, slowly but surely. After a few minutes, Sullivan's starts to stir.</p>
                <p><i>"Nn..."</i></p>
                <p>"I..." Sullivan tries to speak, but quickly covers his mouth as a wave of nausea hits him. "Ugh."</p>
                <p>"Cain, he--he attacked me." He manages to breathe out. "I'm sorry. I--I tried my best. I..." He rubs at his eyes, voice starting to shake as he squeezes Juniper's hand back. Then, a nod towards Hong. "I'm sorry. Thank you. <i>Thank you.</i>"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Makoto`}><img src={makoto} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Makoto</div>
                <p>....It worked! Makoto sighs in relief, with a small smile curling on his lips. Maybe his practice with Ione and Lonan is paying off, after all. "<i>Careful, careful sir.</i>" Hands still on Sullivan.</p>
                <p>"Stay still, or you might feel sick." As Sullivan's consciousness awakens, he might feel dizzy or nauseous. He looks to Juniper and Hong. "Should we move him further away?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
            <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>He feels a wave of nausea suddenly crashing into him.</p>
                <p>Quickly, he covers his mouth as tears prickle his eyes. SINK? PAPER BAG?</p>
                <p>He's going behind the bushes and... yep.</p>
                <p>Faintly, you hear the sound of him fighting for his life from where you stand.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Hong`}><img src={hong} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Hong</div>
                <p>It feels like the Sullivan assist crew are all collectively taking out their shaking little white dog as he throws up behind a trimmed evergreen. Hong looks back towards the Cain game worriedly, turning to Makoto.</p>
                <p>"<i>What do we do?</i> If Cain wanted to, he could have just pulled out any old drive."</p>
                <p>Hong frowns a little, tugging out her phone before helping Sullivan up again. She's calling Professor Vinca again, bless.</p>
                <p>Someone has to let him know. Sorry sir.</p>
            </div>
        </div>

        <p>Hong dials Professor Vinca's number...</p>
        <p>...</p>
        <p>He doesn't pick up. You remember faintly that he and some other faculty members from the academy were attending a protest today.</p>
        </div></div>

        <hr />

        <div className='cutscene'>
            <div className='story-big'>And one girl watches...</div>

            <div className='story-body'>
                <div className='story-speech npc'>
                    <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                    <div className="story-speech-name">CHOU-CHOU</div>
                    <p>Amidst the cacophony of shouts, auras, and void powers, Chou-chou can't help but feel something awful gnawing at her chest.</p>
                    <p className='spoiler'><i>It's your fault things are this way! You and that void army!</i></p>
                    <p>A single voice -- painfully familiar -- echoes in her head.</p>
                    <p><i>We wouldn't be hunted down like this if it weren't for you! If only you didn't —</i></p>
                    <p>Her eyes find Oma.</p>
                    <p>...</p>
                    <p>She tears her gaze away, finding Rin's instead.</p>
                    <p>"I'll... I'll go -- stand on guard." She hobbles towards the gate, clutching her parasol close to her chest.</p>
                    </div>
                </div>
            </div>
        </div>

        <hr />

        <div className='story-big'>Meanwhile...</div>
        <div className='story-body'>
            <p>The fight for the flash drive continues as the remaining students fend off Cain's clones while they toss the drive to each other like a baton.</p>
            <p>Until...</p>

            <div className='story-speech' title='the stupid context is War rolled a 1 and it was not enough to be the final run but everyone kept saying to reroll for the narrative until they got 5, the final number needed'>
                <Link to={`/characters/War`}><img src={war} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">War</div>
                <p>He catches it. [1] He trips and falls over himself-- but the power of SHOUNEN and FRIENDSHIP flashes through his memories as he pushes himself up and sprints forward.</p>
                <p>He sees Eris at the front of the classroom, Eden beside him, and even though he lost to them in the election, he can still feel the lingering warmth of Eris's graps on the flashdrive.</p>
                <p>No, that's not it. At least, that's not all it is.</p>
                <p>It's all of them: hands passing this small piece of metal, the slam of footsteps running across the distance, the blast of airhorns and training drills, the red of Vinca's blood protecting all of them. It's everyone here who has put their blood, sweat, and time into saving them.</p>
                <p>He doesn't trust anyone here one bit.</p>
                <p>But maybe that can change with time. One step at a time; from one - alone; to all together. Five fingers outstretched over and over and over, grabbing that flashdrive, and crossing the distance. [ FAKE MATH 6 do you like this bullshit ]</p>
                </div>
            </div>

            <p>Just a few more steps...</p>
            <p>Cain suddenly stops chasing and smiles.</p>
            <p>You hear your heartbeat pounding in your ears.</p>
            <p>War, you run, run, run, and run. Every step you make brings you closer to freedom—for you, for voidpacts, but most importantly: for your people.</p>
            <p>The doors of the academy fall into view, everything else disappears out of focus.</p>
            <p>And the moment you step past those double doors…</p>

            <div className='story-speech npc'>
                <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Not so fast."</p>
            </div>
            </div>

            You blink.

            War, you find yourself transported back to the school's entrance.

            Cain howls out a laugh. He cracks his neck once, twice, as he stretches his arms around.

            <div className='story-speech npc'>
                <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Whew, nice try there! <i>But not good enough just yet</i>."</p>
                <p>He cracks his swordwhip against the hard concrete below. It rings hollow through the silent air, accompanied only by the grating sound of his laughter.</p>
                <p>"Now, <i>let's try this again, shall we?</i>"</p>
            </div>
            </div>

            <p>In spite of the foul move, the students remain persistent, using their aura, pact, and any means necesary to get the drive to the finish line.</p>

            <div className='story-speech'>
                <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                    <div className="story-speech-name">Pomme</div>
                    <p>With Cain's attention on the motorcycle, Pomme takes advantage of his blind spot to snatch the flash drive back.</p>
                    <p>"You're just the warm up, aren't you? Stop wasting my time," He sneers, gold eyes flashing. "<i>Where the hell is Vika?</i>"</p>
                    <p>And then he runs as fast as he can, ignoring the burning in his lungs dragging him down. His focus isn't on the academy doors, but elsewhere. It's not about making it to the finish line.</p>
                    <i>Hurry up and show your face.</i>
                </div>
            </div>

            <p>Finally, you reach the end.</p>
            <p>There's no tricks this time. You reach the doors of the main building safely, and even as seconds pass by, you don't find yourself transported elsewhere either.</p>
            <p>This is it. You've done it.</p>

            <div className='story-speech npc'>
                <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Wow, you <i>finally</i> got here."</p>
            </div>
            </div>

            <p>A voice pipes up from behind Pomme. Cain—the real one—claps his hands, bloodied and battered from all your attacks.</p>

            <div className='story-speech npc'>
                <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Good job! You get to keep it now. Must feel awesome, huh?" He grins, leaning against the wall behind him.</p>
            </div>
            </div>

            <div className='story-speech'>
                <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                    <div className="story-speech-name">Pomme</div>
                    <p>He glares at Cain. "Game's over. Answer my question."</p>
                </div>
            </div>

            <div className='story-speech npc'>
                <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Whew, so impatient. Learn to relax, will you?" He chuckles, as if this truly was just a game to him.</p>
                <p>Cain peels his body from the wall. He walks towards Pomme, languidly circling around him.</p>
                <p>"Hmmm... <i>Vika, Vika, Vika</i>... oh, hold on, I think I read about you before." Cain pauses. Something akin to realisation passes over his face as he takes a closer look at Pomme. He barks out a laugh. "<i>Bwahaha!</i> Oh man, now <i>that's</i> hilarious."</p>
                <p>Cain glances down towards his wristwatch and blinks at the time.</p>
                <p>"Oooh, speaking of... should be about time now."</p>
                <p>Cain brings his head up, a hand reaching to pat Pomme's shoulder in an overly friendly manner.</p>
                <p>"Well, I'll leave you to it then!" He continues, bringing a hand above his eyes to peer at something in the distance. "I should get going now, and <i>you,</i>"</p>
                <p>The hand leaves Pomme. It stretches out as his wrist twists, index finger jutted towards something far away. 
                </p>
                <p>"Should help your friend over there. Unless you want her to choke to death, that is."</p>
            </div>
            </div>

            <p>Off in the distance, all the way at the school's entrance, are two figures.</p>
            <p>It's easy to recognise one of them—Chou-chou. Except her feet aren't touching the ground, parasol scattered somewhere nearby, body help up only by a hand at her neck as it chokes Chou-chou in the air.</p>

            <div className='story-speech npc'>
                    <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                    <div className="story-speech-name">CHOU-CHOU</div>
                    <p><i>"Ack---nn---"</i></p>
                    </div>
            </div>

            <div className="special-box"><div className="music"><a href="https://youtu.be/5SzOfEF_h4A?si=IGshLD5yGzCcfpEG" target="_blank" rel="noopener noreferrer">♫</a></div>Chou-chou struggles for air, legs kicking as tears start to stream down her face.</div>

            <p>Your eyes glance towards the owner of the hand: clothed in dark greys like a shadow, expression unfaltering as she watches the life start to slip away from Chou-chou's eyes.</p>
            <p>Then, violently, she throws Chou-chou to the ground beside her.</p>

            <div className='story-speech npc'>
                    <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                    <div className="story-speech-name">CHOU-CHOU</div>
                    <p><i>She crumbles onto the concrete, struggling for air.</i></p>
                    </div>
            </div>

            <div className='story-speech'>
                <Link to={`/characters/Beatrix`}><img src={beatrix} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                    <div className="story-speech-name">Beatrix</div>
                    <p>She doesn't turn her face, or her body. But her eyes flick towards Cain — then her hand is held up, fingers unravelling at its seams, as she sends herself and all her teeth-pulling violence at Cain, trying to bite him.</p>
                </div>
            </div>

            <p>The bite lands. He grimaces.</p>
            <p>But you both make eye contact with Cain, and his lips curve upwards into a smirk. You don't need a bite to know what he's going to do next.</p>
            <p>In a glimmer, Cain disappears.</p>

            <div className='story-speech'>
                <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                    <div className="story-speech-name">Oma</div>
                    <p>His eyes widen. His weapon has always been useful. It's the convenience of being able to attack from a distance without endangering himself. It's the convenience of reaching someone you can't reach in time. He really isn't meant for the battlefield. It's for the people who are passionate, who have courage, who are willing to wear their hearts on their sleeves.</p>
                    <p>Because unexpected things always happen in the frontlines, and he doesn't have the capacity nor width to be vulnerable about what he really feels.</p>
                    <p>It's an impulse. And he hates, <i>hates</i> impulse. For we are human, because we think before we act; and he dislikes the way his scope lands on the assailamt's head, and his finger pulls like a trigger. It should be calculated. It's not.
                    </p>
                    <p>(Like a monster would. Like a monster would.)</p>
                </div>
            </div>

            <p>A bullet flies.</p>
            <p>Then, the faint sound of metal hitting metal rings through the air.</p>
            <p>It falls to the ground, next to the assailant's feet. In one swift motion, they sheathe back their blade—a sword hidden in a cane.</p>

            <div className='story-speech npc'>
            <img src={black} 
                className='story-avatar'/>
            <div className="story-speech-text">
                <div className="story-speech-name">???</div>
                <p>"The flash drive."</p>
            </div>
            </div>

            <p>They turn towards you.</p>
            <p>A pale face makes itself known, framed by dark, dark hair. A large scar spanning the entire upper half of their face catches your attention. Mismatched eyes stare down at you coldly.</p>

            <div className='story-speech npc'>
            <img src={vika} 
                className='story-avatar'/>
            <div className="story-speech-text">
                <div className="story-speech-name">Viktoriya Yunge</div>
                <p>"—Hand it over."</p>
            </div>
            </div>
            <br></br>
            <div className='big center alt-font'><b>TWO ROOKS (PART 1): END</b></div>
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
                <Link to={`/story/An Audience`}>🠄 Previous</Link>
                <Link to={`/story/Two Rooks II`}>Next 🠆</Link>
            </div>
            </div>

    </div>
  );
}

export default TwoRooksI;
