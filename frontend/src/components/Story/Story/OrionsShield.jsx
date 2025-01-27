// ICONS
const gwen = 'https://lh3.googleusercontent.com/pw/AP1GczN5rpCz6rJDJEnwavRDvLmfOze-iY-41-9hBI6NdDN93S2NZikf-RHrqRtj5mxyO-HwCSWQBFFlyGfEsxh0ElBRXkc23SOPVfi8T0LzH7V4b4roZbcNlOVGp5HwC-9EL2rYl4n_wRrnDhbdRs42YtVkaA=w600-h600-s-no-gm?authuser=0'
const newsboy = 'https://i.ibb.co/gwVxBFt/Illustration47.png';
const beatrix = 'https://i.ibb.co/CQ5fKMm/BEATRIX.png';
const black ='https://i.ibb.co/MSWT8Hw/vine-black-painted-swatch-300x300.jpg';
const eris = 'https://i.ibb.co/RDD9VDK/ERIS.png';
const tk = 'https://i.ibb.co/syKYjns/tkuni.png';
const elysia = 'https://i.postimg.cc/Gp6QgQYF/0064395dc0bb2b63a97db96c2c30ba41.webp';
const mavis = 'https://i.ibb.co/r530Qwf/MAVIS.png'
const oma = 'https://i.ibb.co/mCkGm10/OMA.png';
const scottie = 'https://i.ibb.co/HqqFTZb/SCOTTIE.png';
const satella = 'https://i.ibb.co/QnQr8YJ/SATELLA.png';


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../../store/csrf';

function OrionsShield() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = `Orion's Shield`;
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
            <div className="time">Sunday, 00:00 A.M.</div>
            <div>Tabit Tower</div>
        </div>
        
        <div className="story-body">
            <p>The clock strikes midnight.</p>
            <p>Hidden under the veil of the night, you make your way eastwards into the city. You traverse past winding alleyways and cobblestone paths—quietly, carefully—accompanied only by the starry night and the occasional ocean breeze.</p>
            <p>And, of course, your fellow students, draped in yellow, white, and black.</p>
            <p>It doesn't take long for you to reach Tabit Tower. Immediately, a few guards enter your peripheral vision, doing their rounds of patrol around the tower's perimeter. Heading towards the rendezvous point, you slip past dark corners and winding paths, emerging behind the other side of the tall building.</p>

            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">NORTH</div>
                <p>"Psst..! Over here!"</p>
                <p>A voice—familiar to a number of you—catches your attention, coming from the alleyway just up ahead.</p>
                <p>"Evenin', Voxenfelle folks." North tips his hat when you approach. "Youse all ready for tonight?"</p>
            </div>
            </div>

            There is a resounding yes from you and your fellow students. Some begin stretching in anticipation, others ask about North's wellfare.

            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">NORTH</div>
                <p>"You folks don't need to worry about distractin' the guards! I'll keep watch over 'ere, so youse people can save Lady Elysia without worry."</p>
                <p>"I ain't got no aura, so I'm no good fer much... but I can at least help youse all like this."</p>
                <p>"'s all good, ma'am! Not sure what youse can do out here with me to be honest... but you don't need to worry about me gettin' bored." At The Keeper's words, he points at something in his left hand—a good ol' stack of newspapers. "Got all my entertainment here."</p>
                <p>"...Erm, not that I'll be readin' em, so don't worry. I'll be keepin' a proper eye out."</p>
            </div>
            </div>

            <p>Once he sees that you're all ready, North leads you further into the alleyway. After a few steps, you see a door come into view—wooden and weathered. It seems rarely used, but at least it's still in one piece. </p>
            
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">NORTH</div>
                <p>"This 'ere is the secret entrance!" North says proudly, a hand on the doorknob. "...'s not that secret, to be honest. But no one ever uses it, and it ain't locked, so."</p>
                <p>"I ain't sure if anything's gonna happen inside... but if the guards come back, or if they sense somethin's up, I'll start yelling about a fire. I'll yell <i>really</i> loudly so all of you can hear and hurry it up, alright? Like a signal!"</p>
                <p>"Evenin', Voxenfelle folks." North tips his hat when you approach. "Youse all ready for tonight?"</p>
            </div>
            </div>

            <p>Just before North opens the door...</p>

            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">NORTH</div>
                <p>"Oh, yeah. Forgot to tell youse all this, but I had this weird dream last night. Not sure what it was about... but youse all were talkin' dreams recently, yeah?" He beams.</p>
                <p>"Hopefully it's a good omen." And with that, he opens the door.</p>
            </div>
            </div>

            <p>You enter the clock tower...</p>

            <p>The clock strikes midnight...</p>

            <p>With the help of North, you find an entrance inside through the back of Tabit Tower. Stay close, keep your steps light, and your voices even lighter—for the trek to the top is not an easy one.</p>

            <p>The moment you step inside you can hear henchman talking amongst themselves as they patrol the tower. Just how many are there?! With no weapons and room to fight them all, you'll have to reach the top through stealth, luck, and a bit of wit.</p>

            <p className='cg-box alt-font'><br></br>A minigame took place here where students had to run up the clocktower and avoid getting caught. If the were caught, they had to fight or persuade their way out of their captivity and rejoin the climb.</p>

            <p>Rejoined by your fellow students, you zoom past the guards—too fast for any of them to notice quickly enough. Footsteps patter against creaky floorboards as you make your way up, the light of Solstia's moon illuminating your path.</p>
            <p>You're tired, out of breath, legs aching from the trek past ten flights of stairs—but you're here now.</p>
            <p>The 11th floor, the very top of Tabit Tower.</p>

            <p>Oma, Scottie, and Beatrix are the first to reach the top. Ahead of your peers, you're greeted first with what looks to be a door. You think it leads to
            where the clock face is.</p>

            <div className='story-speech'>
            <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
            <div className="story-speech-text">
            <div className="story-speech-name">Oma</div>
                <p><i>Shao</i>. He looks over Scottie as they both reach the top of the tower without getting caught. He looks terrible and miserable, but it's a testament to the past few months that he hasn't collapsed yet. A slow, gradual, painful process — a tug in the morning, frantic running through the dirt, scraping knees.</p>
                <p>"His legs feel like they're about to give out and he feels gross; but he catches a glimpse of what it's like to be on the eleventh floor of a tall, tall tower. He feels heavy. It feels light. <i>They're up high.</i></p>
                <p>When he hears everyone else file in after them, he turns away from the world and back to what's in front of him.</p>
                <p>"...Shall we?" There's an attempt to be dramatic. But the wheeze in his voice fails him.</p>
            </div>
            </div>

            <div className='story-speech'>
            <Link to={`/characters/Scottie`}><img src={scottie} className='story-avatar'></img></Link>
            <div className="story-speech-text">
            <div className="story-speech-name">SCOTTIE</div>
                <p>The door - surely Elysia is behind it, right? She gives Oma a nod. "Let's bust that thing down."</p>
            </div>
            </div>

            <p>The door is locked.</p>

            <div className='story-speech'>
            <Link to={`/characters/Scottie`}><img src={scottie} className='story-avatar'></img></Link>
            <div className="story-speech-text">
            <div className="story-speech-name">SCOTTIE</div>
                <p>Scottie tries to flying kick it open.</p>
            </div>
            </div>

            <p>CRASH!</p>
            <p>Your flying kick busts the door open. The really old door. The UNESCO heritage site door. (But it's okay, surely someone can fix it later, right?)</p>
            <p>A small amount of dust flies towards you, but it settles quickly enough. Immediately, you hear footsteps moving around—three pairs, maybe.</p>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">???</div>
            <p>"Shit!"</p>
            </div>
            </div>


            <p>Three kidnappers stand in front of you, armed. They block your path forwards.</p>
            <div className='story-speech'>
            <Link to={`/characters/Beatrix`}><img src={beatrix} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">BEATRIX</div>
                <p>Beatrix doesn’t care about them. Clutching her head, she turns her eyes between the spaces in between their bodies, trying to find out the details of the room they’re in — if Elysia was here. </p>
            </div>
            </div>

            <p>You look around the room. In the spaces the kidnapper's bodies, a silhouette seems to sit a few paces ahead of you, closer towards where the clock face is.</p>

            <p>Something green flashes. Suddenly, one of the kidnappers appears behind Beatrix, weapon aimed threateningly towards her.</p>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">???</div>
                <p>"You kids should just stay out of this!" One of them shouts. From his hand appears a large ball of flames, floating an inch off of his palm. "You're heretics! You voidpacts and that vessel! Once we get her to them then we'll--"</p>
            </div>
            </div>

            <p>A scuffle breaks out--the attacker behind Bee is punched to the ground, and The Keeper's cage prevents any harm from being done to her. Hazel hits him fast enough before his aura can reactivate. Scottie and Ridley keep him on the ground.</p>

            <p>The kidnappers answer nothing.</p>

            <p>Satella's ice meets fire. The kidnapper burns his flame brighter, throwing it around himself. The flames lick at Aina as she tries to disarm him. He pulls his hand, and body, backwards--taking a few steps away towards the other end of the room.</p>

            <p>The other two are down, with one still preoccupied by Eden's aura.</p>

            <p>Mavis and Eris take out the last of the assailants, pinning him square against the ground.</p>

            <p>Though the room doesn't clear up, all of you manage to see a glimpse of someone on the floor, just up ahead. Is it...?</p>

            <p>You've neutralized the threat. The coast is finally clear.</p>

            <p>Oma runs first, followed by everyone else. Deeper into the room, past the ruckus and all the fallen assailants. Here, the moon shines brighter through the glass, so bright you could mistake it for the sun.</p>

            <div className='cg-box'>
            <div className="special-box center">
            <p className='big'>Underneath the moonlight, bathed in pale blue, is <i>her</i>.</p>
            </div>
            <img className='story-cg' src="https://i.ibb.co/q5YLPjD/saint-hotsage.png"></img>
        </div>

            <p>Elysia sits underneath the clock face, hands tied above her head. She stirs, eyes opening as the sound of your footsteps echo louder and louder.</p>

            <p>Her gaze settles on your figure.</p>

            <div className='story-speech npc'>
            <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>“You...!”</p>
                <p>Her tired expression twists into a smile, too bright for this dark, cramped space.</p>
                <p>“I was waiting.”</p>
            </div>
            </div>

            <p>Suddenly, the tower chimes, the sound of its bells pulling you out from your thoughts.</p>
            <p><i>1 AM.</i></p>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
            <div className="story-speech-text">
                <p className='big'>“—STAY BACK!"</p>
            </div>
            </div>

            <p>A shout suddenly sounds through the room. One of the kidnappers, the one tied down by Eden earlier, launches past the crowd and towards Elysia.</p>

            <p>He swings his knife around wildly next to the vessel. He drags Elysia up by her hair, cutting the rope tethering her to the metal rod. With a pull, he drags her back with him, standing dangerously close to the clock face behind them.</p>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
            <div className="story-speech-text">
                <p className='big'>"Shit. You crazy heathens—"</p>
                <p>Wild eyes dart back and forth between your party, scanning for exit paths that don't exist. It's obvious by now, you've got him backed against a wall.</p>

                <p>...But a cornered rat will bite even the cat hunting it down.</p>

                <p>His hand flies higher, the glint of a silver blade pressing itself against Elysia's pale throat.</p>

                <p>"If you get any closer I swear I'll—!!"</p>
            </div>
            </div>

            <p>You try to approach, try to get the upper hand by apprehending the kidnapper first—scrambling forwards with all your might as you reach to grab onto him, to stop him, to take his knife away and collapse him with poison.</p>

            <p>Scottie, your hand finds his arm, and you pull. The sudden movement is enough for him to let go of Elysia completely. The three of you scatter, and The Keeper’s cage misses.</p>

            <p>But the kidnapper's footing stumbles, and you hear something slip.</p>

            <p>Scottie tilts backwards, dragged along by the kidnapper as he falls forward. Elysia stumbles back the other way.</p>

            <p>—Right into the clock face.</p>

            <p className='big'><i><b>CRASH!</b></i></p>

            <p>It happens in slow motion. A flurry of white and gold, disappearing in a flash.</p>

            <p>You watch Elysia fall out of the tower. You walk, run, sprint towards her—hand outstretched to grab onto her fleeting figure—but she slips through your fingers like white sand. At the very last moment, you catch a glimpse of her face.</p>

            <p>A smile, gentle and true.</p>

            <p>Elysia falls.</p>

            <br></br>
            <br></br>
    

            <div className='cutscene'>
                <div className="story-big">
                    <div>A few moments ago...</div>
                </div>
        <div className='story-body'>

            <p>North taps his foot against the cobblestone below, absentminded. A stack of newspapers sits idly to his left, neatly bundled together by some hemp string. He fidgets with the knot tied on top, eyes gazing out into the middle distance, vaguely focused on a guard as they try not to fall asleep at their post.</p>
    
            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">???</div>
                <p>"They sure do be takin' their sweet time... guess it ain't a walk in the park rescuin' Hylia's vessel, even for you guys." The boy sighs at War and Phedras, tipping his cap lower over his face.</p>
            </div>
            </div>

            <p className='big'><i><b>CRASH!</b></i></p>

            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">North</div>
                    <p><i>"Whuh-?!"</i></p>
            </div></div>

            <p>The sound of shattering glass rips North from his daze. Instinct drives him to whip his head up, the action coming before his thoughts manage to catch up to him.</p>
            <p>Then, he sees it: a flash of white and gold, falling from the clock tower.</p>
            </div>
            </div></div>
            <br></br>
            <br></br>


            <div className='story-body'>
            <div>Your eyes stay glued to Elysia as she falls.</div>
                <p>Something drops in your stomach—you can't tear your eyes away, even as you wait for her to crash into the ground.</p>
                <p>She falls,</p>
                <p>and falls,</p>
                <p>and falls.</p>
                <p>...</p>
                <p>But the impact never comes.</p>
                <p>Suddenly, a light flashes from below—a yellowish orange so bright you could mistake it as a star.</p>
                <p className='big'><b><i>WHOOSH!</i></b></p>
                <p>A gust of wind flies past you, forcing you to close your eyes. The sound of flapping follows, too loud and too near for any sort of bird to feasibly produce.</p>
                <p>You open your eyes, and what greets you is a large seagull made of newspaper, hovering in front of the clock tower. On its back is Elysia, arms wrapped around the bird's paper neck. Then, somewhere underneath it...</p>
                <p>...is North, enveloped by a yellowish orange glow, staring at you in disbelief.</p>

                <div className='story-speech npc'>
                <img src={newsboy} className='story-avatar'  style={{ border: '2px solid #FFA51F', borderRadius: '50px' }}></img>
                    <div className="story-speech-text">
                        <div className="story-speech-name">North</div>
                        <p>"I—"</p>
                        <p>"A-Aura! I," he frantically points at the paper bird in the sky, disbelief painting the entirety of his face. His hand is pulled back quickly enough, orange eyes widening like saucers at the sight of his glowing limb. "I got,"  North stutters once, twice, then a third time before he finally manages to speak properly. "I got a—"</p>
                        <p><i>"I got an aura!!!"</i></p>
                </div></div>

                <p>The giant seagull floats closer towards the ground. It flaps its wings softly, allowing Elysia to hop off. She greets North with a smile, giving a gentle pat to his head, before glancing back up at the tower.</p>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>She meets the gaze of anyone still looking. Her smile softens, and she mouths: <i>thank you.</i></p>
                </div>
                </div>

                <div className='story-speech'>
                    <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">SATELLA</div>
                        <p>She's also taking their masks off once they tossed them outside tied up. Reveal yourselves.</p>
                    </div>
                </div>

                <p>Surely enough, it's a group of men who all seem to be aura users. You don't seem to recognize who they are... maybe the authorities will give some insight once they apprehend them.</p>

                <div className='story-speech npc'>
                <img src={gwen} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Gwen</div>
                <p>Gwen tries to check for injuries.</p>
                <p>"Lady Elysia, art thou unharmed! Did you know of the evildoers!"</p>
                </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"I am," she nods in confirmation, still warm. "I'm afraid I don't know who they are... or perhaps not yet."</p>
                <p>"Are you unharmed?"</p>
                </div>
                </div>

                <div className='story-speech npc'>
                <img src={gwen} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Gwen</div>
                <p>"Trust in the strength of Voxenfelle students!" </p>
                </div>
                </div>

                <div className='story-speech'>
                <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">Oma</div>
                    <p>He sighs like a show of exasperation, and fondness. Like good grief man. He scratches his head. "Maybe next time, give us a clearer prophetic dream?"</p>
                </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>She pauses, as if caught slightly off guard, before chuckling at Oma's words. "Mm, I apologise for that. I will try to do better next time."</p>
                </div>
                </div>

                <div className='story-speech'>
                <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">The Keeper</div>
                        <p>"You are an extreme liability. You are too important to be kidnapped so easily--your ineptitude has put many people at risk. Get better guards and grow stronger."</p>
                    </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"Mm," Elysia nods. "I apologise for that..."</p>
                <p>"But, I will do my best to grow stronger." She fixes her posture, now filled with a sense of determination. "My duties have just begun... there's much I've yet to accomplish--no,"
                </p>
                <p>"There's much that I must accomplish." <i>For you, for voidpacts, and for the entire world.</i></p>
                </div>
                </div>

                <div className='story-speech'>
                    <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">SATELLA</div>
                        <p>"Elysia..." She walks up to her when the commotion dies down.</p>
                        <p>A hand moves closer, holding something. It beckons for the vessel to take it.</p>
                        <p>"You dropped this."</p>
                        <p>A white heart falls into the blonde one's palms.</p>
                        <p>"We'll probably return home soon by the end of this. But...you'll know when I come visit." Because the stars will always guide me back here.</p>
                        <p>"Oh." She taps on her skin. The earring looks different. Something else is attached to it. A perfect seashell hanging by the end. "This is something I found while looking for you."</p>
                    </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"Oh,"</p>
                <p>The earring falls into her hand. Elysia rolls it around her palm for a moment, smiling at the sight of it.</p>
                <p>"I..."</p>
                <p>"Knew, to an extent, what would happen. Or, perhaps not quite." She starts to speak.</p>
                <p>"I knew you'd look for me, including the boy." Another hand settles itself over the heart earring. She pulls it close to her chest. "That was the extent of my knowledge." And for a moment, you're able to read between the lines: I didn't know if I would live.</p>
                <p>"So thank you, Satella, and all of you, for searching for me." The edges of her lips curve upwards, warmly. "And... for saving me."</p>
                </div>
                </div>

                <div className='story-speech'>
                    <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">SATELLA</div>
                        <p>"...Of course." She looks down at the earring. Then finally, welcomes a familiar warmth when it returns. It tells her that Elysia is here and that this is not a dream, it's <i>real</i>.</p>
                        <p>"Even if you had known. I would have still looked for you." No prophecy can answer this for you. I will by my own hands. I will save you because...</p>
                        <p>"I would have still looked for you, Elysia. Even if Hylia wasn't part of you." Because it's you.</p>
                        <p>And I will cherish that. Because I enjoyed the edelweiss you collected. The white gowns you keep tidy. The chocolate bourbon you indulge in. And the joyous excitement you held for sea bass. Little things that made you human.</p>
                        <p>"This earring is no longer just for protection. It is to tell you I am here. So come and greet me again when I am close by..."</p>
                        <p>"...And we can spend more time together. As friends." A small smile. Winter wants to make sure spring doesn't start alone.</p>
                    </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                    <p>"As friends..." The words roll of her lips strangely, as if unfamiliar to her. "I would like that very much."</p>
                    <p>"I hope you'll come visit me again, the next time you come to Solstia." </p>
                </div>
                </div>

                <div className='story-speech'>
                <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                <div className="story-speech-text">
                <div className="story-speech-name">Oma</div>
                    <p>"Here." Since the immediate danger's gone now; he follows after Satella, just like last time. As always, stepping out of someone else's shadow, trailing a pace behind. "So it's symmetrical."</p>
                    <p>He reaches for her hand and unlike during their first audience at the temple, this time, it connects. He places a matching earring on her palm — there's no room for choice, gloved hands making her curl her fingers around it.</p>
                    <p>"Well, not to be a romantic sap like this one here," He teases, catching Satella in a stray since she's still nearby. "But we'll be around as well."</p>
                    <p>The relief he feels is strange, because she's safe; a higher power who will strive to make his future a little more convenient, but there's also a bittersweetness to the implication her omniscience is limited — for now, at least. Maybe in the future, over time, she'll become god Herself.</p>
                    <p>But today, she's still human. And he realizes, she doesn't know everything yet. So when he smiles, there's no underlying panic. There's no time limit. (Just a facade.)</p>
                    <p>"Oh? Celebrating already, Curassavica?" He invites himself without saying it.</p>
                </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                    <p>At Satella's question, her stomach growls as if on cue. "Oh, I..."</p>
                    <p>"I suppose I haven't eaten yet, no..." A tinge of pink graces her cheeks. "I would be happy to eat, but I wouldn't want to trouble you."</p>
                    <p>Then another earring finds its way into her palm. A gloved hand curls her fingers closed, cementing the object as hers. "Ah—"</p>
                    <p>Elysia doesn't get a chance to protest, so she simply looks at it, and holds it close to her heart. "Thank you. I'll cherish them both."</p>
                </div>
                </div>

                <div className='story-speech'>
                    <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">Eris</div>
                        <p>If you know that much does that make it scarier? Gaining an overconfidence or perhaps worrying about the ending that you can't see? Still Elysia smiles. It bothers him.</p>
                        <p>
                        "It's North you gotta thank. You got real lucky, princess! Like super-duper gold lottery ball lucky!" Not just an aura awakening but that aura awakening. Imagine if his aura had been blasting music very loud. "If you're committed to all this you gotta take better care of yourself."</p>
                    </div>
                </div>

                <div className='story-speech'>
                    <Link to={`/characters/Mavis`}><img src={mavis} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">MAVIS</div>
                        <p>"...You mentioned the kid specifically... So... Did you know the boy would manifest an aura?"</p>
                    </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                    <p>"Of course, I owe much of my thanks to North." She agrees, glancing down at the young boy. "I wasn't quite certain what would happen... but I could sense Hylia had plans for him, so I trusted in Her will."</p>
                </div>
                </div>

                <div className='story-speech'>
                <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">The Keeper</div>
                        <p>She nods, curt. The tension does not leave her body. Elysia is an unraveling. She does not like loose ends.</p>
                        <p>"...What do you mean you entrusted Her will to him? Did you give him an aura now?"</p>
                    </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                    <p>"Oh, no, nothing like that! I don't have such a power." She waves her hands, almost frantically, at The Keeper's question. "I was just aware... there was something awaiting the boy. So I put my trust in that, even if I didn't know what was to happen."</p>
                </div>
                </div>

                <div className='story-speech'>
                    <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">Eris</div>
                        <p>It's heretical, this thought. But this is the moment to strike.</p>
                        <p>"Her will... how do you know that's Hylia? That it's her will specifically?" Those called to by the void, what stops them from saying Hylia calls them to do it? It's a lot of assumptions and assumptions are fun but at some point you gotta make them real. Theory is a boat with holes - you'll die.</p>
                        <p>There's a hidden thought - <i>if Hylia willed it, even if you disagreed, would you still follow - just let it happen? Does her will trump yours? Will you always agree, fall back and trust?</i></p>
                    </div>
                </div>

                <div className='story-speech npc'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                    <p>"You could call it an awareness that comes with the power." Elysia hums. "You simply know it is Her. This overflowing affection for all that exists... it can only be Her will. There is no one else."</p>
                </div>
                </div>

                <div className='story-speech'>
                <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">The Keeper</div>
                        <p>"There is you."</p>
                        <p>"Your affection, your love, and your devotion. Why do you need a Goddess to claim that? It is yours."</p>
                    </div>
                </div>

                <div className='story-speech'>
                    <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">Eris</div>
                        <p>"Stealing my spotlight, TK?" Amusedly. "She's right, you know. I don't see why it has to be her. The vessel term's kinda bothering me, too. The second container, her will, haven't you got this far by yourself?"</p>
                    </div>
                </div>

                <div className='story-speech npc' title='crow godmodded rain with odie'>
                <img src={elysia} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                    <p>"Me..."</p>
                    <p>Elysia doesn't get to finish her sentence. Rain starts to fall from the sky.</p>
                </div>
                </div>

                <div className='story-speech' title='ASSUMING THE POLICE CAME AND ARE PUTTING THE GUYS IN JAIL NOW.'>
                    <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
                    <div className="story-speech-text">
                        <div className="story-speech-name">SATELLA</div>
                        <p>“……Let’s go to the pub..” </p>
                        <p>Puts her coat over Elysia.</p>
                    </div>
                </div>

                <p>At Satella's words, the Voxenfelle students run in the summer rain to the familiar pub they've visited time and time again for information while searching for Elysia.</p>

                <p>This time, they're joined by an extra pair of footsteps.</p>

                <p>The sound of surprised laughter floods the Solstia streets and when they reach the cozy warmth of the Supergiant Pub, that all too familiar barkeep is there to greet them.</p>

                <div className='story-speech npc'>
                <img src={black} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">BK</div>
                <p>"Welcome... back." He nods after recognizing Lady Elysia.</p>
                <p>A quick trip to the kitchen before he returns with a plate of tomato crostata large enough to share with the group. "On the house."</p>
                </div>
                </div>
                    

                
                
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
                <Link to={`/story/Solstia Streets`}>🠄 Previous</Link>
                <Link to={`/`} style={{marginLeft: '3%'}}>Home 🠆</Link>
            </div>
            </div>
        
    </div>
  );
}

export default OrionsShield;
