// ICONS
const vinca = 'https://i.ibb.co/RYW2TGr/Z-VINCA.webp';
const beatrix = 'https://i.ibb.co/CQ5fKMm/BEATRIX.png'
const haydee = 'https://file.garden/ZfftGQ_uZRgXD6g5/Voxenfelle/IMG_0595.png'
const lucina = 'https://i.ibb.co/NYZFKt1/lucinana.png'
const mavis = 'https://i.ibb.co/r530Qwf/MAVIS.png'
const tk = 'https://i.ibb.co/syKYjns/tkuni.png'
const elysia = 'https://i.postimg.cc/Gp6QgQYF/0064395dc0bb2b63a97db96c2c30ba41.webp'
const eris = 'https://i.ibb.co/RDD9VDK/ERIS.png'
const aina = 'https://i.gyazo.com/8ef171d066e00b060a4bae32d9777228.png'
const yitian = 'https://i.ibb.co/xLZhWdS/YITIAN.png'
const eden = 'https://i.ibb.co/tpXbxCw/EDEN.png';
const juniper = 'https://i.ibb.co/N9CfYZW/gin-picrew.png';
const tomoya = 'https://i.ibb.co/6NhGwhp/TOMOYA.png';
const adam = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d84c154c-d6e8-4f39-8f13-a74ec2521773/dij0hzs-ce4b4ca4-1fad-47ac-bf86-e9fbdada299f.png/v1/fit/w_600,h_600,q_70,strp/untitled_by_twendigo_dij0hzs-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvZDg0YzE1NGMtZDZlOC00ZjM5LThmMTMtYTc0ZWMyNTIxNzczXC9kaWowaHpzLWNlNGI0Y2E0LTFmYWQtNDdhYy1iZjg2LWU5ZmJkYWRhMjk5Zi5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gxPkkYhOd_xA2eBGHGJydxTmf9R-g1UTjpbf2MIqfIo'
const xen = 'https://i.ibb.co/vVk7rhz/picrew2.png'
const satella = 'https://i.ibb.co/QnQr8YJ/SATELLA.png'
const tao = 'https://i.ibb.co/54W2r2q/TAO.png'


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../../store/csrf';

function TheVessel() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = 'The Vessel';
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
            <div className="time">Sunday, 08:30 A.M.</div>
            <div>The First Temple of the Goddess</div>
        </div>
        
        <div className="story-body">
            <p>You arrive thirty minutes before morning prayer commences, at the first stroke of sunrise. No one's curious gaze lingers for very long, as they're a little too busy going around, getting preparations in order. Priests and priestesses flow around the fountains and sculptures, neat and orderly as they guide people to their places. It smells coastal and breezy, fresh as new beginnings. At all four corners of the walkway that leads up to the figure of the goddess, light weaves patterns across the pools of water laid by her feet.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>“Remember to be on your best behaviour, alright everyone?”</p>
            </div>
        </div>

        <p>Professor Vinca reminds you from behind the crowd as you enter further into the temple grounds.</p>

        <p>The First Temple of the Goddess is a high-rise feat of architecture, layered like clouds, pink and gold. Balconies extend from the arched windows, supported by bleached granite columns. It opens up into the air with no ceilings to keep out the rain on the rooftop, and there are no ceilings for a portion of its ground floors, where sprawling inner courtyards unfurl at its center.</p>

        <p>The Holy Temple of the Goddess appeared as untouchable as heaven. As its sister, the First Temple of the Goddess welcomes the earth's children into its embrace. Wildflowers peek out over the pathways, dotting puddles of grass with butterflies and birds and a rainbow of colors; trees with green branches curl across the sky, crying like the ocean as the wind blows through their leaves. The air is stained with flavors you can't name. The right memory slips away, as the minnows do through the streams that wind throughout the inner courtyards, glimmer-quick.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>“We’re meeting the vessel today, so if you have any questions, be sure to get them ready.”</p>
            </div>
        </div>

        <p>A priest-in-training approaches you, acting as your guide for the day. He reminds you that your meeting with the vessel will last for only thirty minutes.</p>

        <div className='story-speech'>
            <Link to={`/characters/Mavis`}><img src={mavis} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">MAVIS</div>
                <p>He yawns into his mechanical fist and rolls his shoulders, "Wait. Are we gonna get to ask the lady-of-the-hour herself questions?" asking whoever. This priest guy or something.</p>
            </div>
        </div>

        <p>"Yes, as long as Lady Elysia finds the question agreeable." The priest-in-training replies.</p>

        <p>The ceremony room awaits, as patient as a lucid dream. As you approach, the image gets clearer and softer, with only the natural light from the windows to guide your way forward.</p>
        <p>Eventually, you make out the pool at the heart of the room. It sits calm and quiet, reflecting light so well that it looks white all over, blanketed in the image of snow. Nothing ripples; everything shines.</p>
        <p>Three other shadows are in the room with you. Two of them rise with smiles on their faces.</p>
        <p>Only one stands by the window, bathed all over in light like water.</p>

        <div className='cg-box'>
            <div className="special-box center"><div className="music"><a href="https://youtu.be/be6jchNPoQ8?si=e2UBxMGzc8N7T1uN" target="_blank" rel="noopener noreferrer">♫</a>
            </div><p className='big'>Only one stands by the window, bathed all over in light like water.</p>
            </div>
            <img className='story-cg' src="https://i.postimg.cc/xTd0gyPp/cg-elysia.png"></img>
        </div>

        <p>She locks eyes with you. Her gaze glances over you one by one, thoughtfully examining your appearance. Then, a smile graces her features.</p>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">THE VESSEL</div>
                <p>“You're finally here.”</p>
            </div>
        </div>

        <p>The vessel greets, her white skirt billowing behind her as she makes her way closer towards you. At this distance, you’re able to glean more from her appearance—golden eyes that shine like the sun, and hair as bright as the midday sky.</p>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>“My name is Elysia. It’s a pleasure—to finally meet your acquaintance.”</p>
                <p>She smiles, warmly.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Beatrix`}><img src={beatrix} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">BEATRIX</div>
                <p>"She executes a similar curtsy, unable to keep a smile off her face. "Our name is Beatrix!" Dibs on first introduction.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>The Keeper stares back, expression cool. Ignore the thrumming in her chest, the beating pulse in her fingertips. Like the warmth doesn't quite reach her. It settles wrong. It <i>is</i> wrong. Why are you standing here, soaked in sunlight and breeze? Why aren't you announcing yourself to the world? Why aren't you doing what needs to be done?</p>
                <p>Haven't we waited long enough?</p>
                <p>She will not wait. Time is the one thing that cannot be controlled.</p>
                <p>Her eyes flicker to the other two figures. Checking for weapons on them.</p>
                <p>"Elysia--I am The Keeper of Novalyre. When will you alleviate the awful state Astralena has put its citizens in? Your voidpact citizens are under collar end imprisonment at this very moment, unable to live the lives that they were born to live. You <i>must</i> make statement for their freedom."</p>
            </div>
        </div>

        <p>The two figures are unarmed. They seem to be her retainers.</p>

        <div className='story-speech'>
            <Link to={`/characters/Haydee`}><img src={haydee} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Haydee</div>
                <p className='alt-font' style={{fontSize:'16px'}}>"Processing."</p>
                <p>She bows her head. This woman was Solstia's own sun, and all of their warmth contained in it. She had to maintain her composure-- such beauty was <i>so</i> captivating!</p>
                <p className='alt-font' style={{fontSize:'16px'}}>"It's an honor to meet you, Elysia." She holds out her wrapped-up white lily almost awkwardly.</p>
                <p className='alt-font' style={{fontSize:'16px'}}>"I'm not sure if they will allow you to accept gifts. But if you could take this. I would be pleased."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Lucina`}><img src={lucina} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Lucina</div>
                <p>"I am Lucina Novena. Will you not make a statement against Voidpacting?--The selling of one's soul to the Void? An act that corrupts the user, that destroys them over time, that will inevitably result in their becoming a Voidwalker? It must remain illegal, and they must remain monitored. The law must reflect the sin and danger of their existence."</p>
                <p>She holds out the envelope in her hands. They don't shake. "In here is all the evidence I have collected over the years--from the history of Voidpacting and its ramifications, to the rise of Voidwalkers and even mutated creatures since the Void Army announced itself, and the involvement of Voidpacts in corruption--such as what happened to the last head priest, Arias."</p>
                <p>"--Please. If you would even read it, I would be grateful."</p>
                <p><i>This cannot go on. You must know this.</i></p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eris</div>
                <p>When you think of Hylia, of Goddess, likely someone like Elysia comes to mind. Milky cleansed skin, gold shimmering waves of hair and eyes that beam like the sun. Even her voice, warm like a welcoming honey. It's respectful to bow, to look away. To defer to God's vessel. He chooses to stare directly.</p>
                <p>
                "Well hiii there! I'm Eris J. Caspell, all the way from lil ole Vystelle." Not that it's a small place. "What does it mean exactlyyy, vessel? Do you hear Her or just inherit her graces, capabilities? Are you a real God?" Do you want to be? "Like! I guess! What are you capable of? When did you know you could do, what you "were"?"</p>
                <p><i>Is that tiring? The expectations? How do you feel about that?</i></p>
                <p>It's a variety of questions but he's never been shy about indulging in his curiosities.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"Beatrix, The Keeper of Novalyre, Lucina Novena," she repeats the names fondly. "Eris J. Caspell," repeated just as warm.</p>
                <p>The white lily takes her by surprise, but her expression softens just as quickly. "Thank you for the kind gift," she says, and she keeps it in her hands as she looks back to the rest of the crowd. "And for your questions. Ah, and all your greetings, of course."</p>
                <p>"I understand your concerns well." Her smile thins, and she looks at the envelope in her hands with a conflicted expression. "However, there's some things I'd like to share with you first, so I hope you'll spare me some of your time."</p>
                <p>"Firstly, I'd like to thank you all for coming here. I'm sure it may have seemed... strange, to be invited here so suddenly, but this is not without reason."</p>
                <p>"Much like you, we from the church are very much aware of what Arias, the former head priest, has done." She pauses, "And we are also aware that many from your class have faced him directly in Hysse. For that, we'd like to give you our utmost gratitude... as well as our deepest, deepest apologies."</p>
                <p>"As for the void itself, as well as voidpacting..." Elysia pauses. She takes a step forwards, towards the pool in the middle of the room, as she ruminates.</p>
                <p>"We are aware of the new danger that it poses. However,"</p>
                <p>"It's our belief that <i>they</i> are simply victims," a tilt of her head as she faces you all again. "The Goddess herself feels much pain over the void." Said, as if she can feel it in her very bones. "And I myself have plans to curb the discrimination towards voidpacts once I am properly ordained."</p>
                <p>"Even so, the rise of voidwalkers is something that must be addressed and dealt with.</p>
                <p>"...And that, is where I enter the picture."</p>
                <p>"Are you familiar with the land of Teide?" Her lips curve upwards into a small smile. "It was a small country, sunken during the second war."</p>
                <p>"Most records say that it was decimated due to a fight over an anti-voidwalker weapon. This fact still holds true."</p>
                <p>"...What has been withheld from the public, however, is the fact that the weapon they fought for was the first vessel of Hylia."</p>
                <p>"So, as you can see, I am not the first vessel to exist in this world."</p>
                <p>"...I suppose you could say I am the second."</p>
                <p>"After being faced with the reality of mankind's greed, the main ruling powers of the countries involved opted to keep this information a secret, fearing that a fight would never end--and that war would inevitably return to this world."</p>
                <p>"With recent events in mind, the Astralenan government--after my awakening--decided to not keep it a secret from the people. This was both to bring about hope, as well as to curb the rise of voidwalkers using my own powers, once I have better control of them."</p>
                <p>"Currently, my plans to integrate voidpacts back to society involves their eventual release, starting with those who were previously professional Hunters. The government thought this to be wise, as they will also be able to assist in our efforts against the recent rise of voidwalkers."</p>
                <p>"I've also discussed for more humane treatments from them, including the removal of the shocking feature from their collars. We are currently researching on other alternatives to shut down powers without causing physical harm towards voidpacts."</p>
                <p>"...I apologize for prattling on. I'm sure you must be very confused." She bows her head in apology, as if she were just a mere girl. "If you have any questions, I'd be more than happy to answer them to the best of my abilities."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"Speak more on Teide. What occurred that ended the first vessel? If you are to be used, we must know how to safekeep you."</p>
                <p>(And if you are used incorrectly--if you turn into a weapon against instead of for--tell me how to destroy you. I will not allow you to be a risk to my people. I know it will not be easy. I was not blessed with a sword to skewer what is wicked, only a shield to keep what is mine. I will figure it out regardless.)</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"War occurred," she says, grimly. "Attacks were made on the country. Weapons were used and people were slaughtered. The first vessel died in an explosion that decimated the capital city."</p>
                <p>"Discussions in regards to utilising my powers have been made with other countries after my existence was publicized. Though I'm not aware the full extent of their conversations, it seems to be going peacefully so far."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Lucina`}><img src={lucina} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Lucina</div>
                <p>"What are the current state of your abilities? What can you do now, and what do you predict you'll be able to do in the future?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Aina`}><img src={aina} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Aina</div>
                <p>"You said the goddess Herself feels pain over the Void. Are you able to commune with her, or receive visions? Do you feel Her feelings as though they're your own?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Yitian`}><img src={yitian} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Yitian</div>
                <p>His questions are all very selfish in nature.</p>
                <p>"How were you chosen as vessel? Did man have any influence on your creation as a weapon?" A beat."* And if you die, will a third vessel appear?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"A vessel relates to wielding Hylia's power as your own, or at least, a fraction of it." She smiles thinly. Elysia's attention moves back to the pool, dipping her fingertips to the water in front of her, causing ripple after ripple. "They are able to perform feats beyond what auras--and void powers--are able to manage. And,"</p>
                <p>You notice drops of water start to rise from the pool. It forms a ball of water, floating just a few centimetres off of Elysia's hand, before morphing into various shapes. A dove, a star, then finally--a lily.</p>
                <p>"They are able to do so without an aura." She lets the water dip back into the pool, causing the smallest of splashes.</p>
                <p>"And before you ask, they did check my body for marks of the void." Elysia laughs.</p>
                <p>"I do receive visions, at times. They're infrequent, but they are always true to reality." She hums, holding the lily closer against her body. "For a more recent example, I told my retainers that I would receive both a white lily and an envelope today." She gestures to the two people to the side of the room, and surely enough, there's a look of awe painted on both of their faces. "Healing is also something I am capable of. However, my powers often fluctuate, and there are days where I cannot muster my abilities at all."</p>
                <p>"My relationship with the goddess... you can say that she speaks through me, at times--but perhaps it's most accurate to say that I'm able to feel her will through my body." She straightens her posture. "Man does not have any influence on a vessel's awakening. As for whether another vessel will appear after my death... "</p>
                <p>"That, I cannot say for certain."</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eden`}><img src={eden} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eden</div>
                <p>Her mouth twists, a clear hesitance even as she steps forward.</p>
                <p>”You mentioned Arias, so you must be caught up with everything he did a few months ago. Do you know anything about the society he mentioned, that he was seemingly a part of? Do they pose an active threat? Is there anyone actively exploring what cause Arias was working for?” Her eyes glint a little.</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Juniper`}><img src={juniper} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Juniper</div>
                <p>Eden nudges him. He doesn't step forward, but he reaches into fabric and pulls out a folded piece of printer paper. Lifts a hand in the air, waving for attention he doesn't need with a half-formed smile, marred by the reactionary wince.</p>
                <p>"Elysia," he calls. "...Would you know what these symbols are? From the Head Priest, Arias."</p>
                <p className='small'>On the paper, etchings of his pendant are perfectly redrawn. A small note, too, at the corners: Thank you! :D May the light guide your way!</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"We are investigating Arias' connections, his backgrounds, as well as the events leading up to his death. Many of us suspect he was controlled by another party from outside of the church's walls, and we are working our best in order to uncover the truth of the matter, as this pertains to the safety of the people."</p>
                <p>"While I myself have not received many visions in regards to this... society," she takes a long look at the piece of paper. "I have seen those symbols before, in a dream. Those are their markings."</p>
                <p>"Thank you for showing this to us. I believe we will benefit greatly from this information."</p>
            </div>
        </div>

        <p>As she speaks her final word, one of the retainers chimes into the conversation. He reminds Elysia that morning prayer is starting soon, and that the students should best be on their way.</p>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"I apologize for our short meeting," Elysia sighs, and looks at you all with a forlorn expression. "But, I hope to meet with you all again. My schedule will be busy in preparation for the ordainment, but please feel free to visit the temple at any time to pray with the others here."</p>
                <p>"And, of course, I'd be delighted to see you all at the ceremony itself." At this, her expression turns brighter--and a bit more girlish.</p>
                <p>"Please take care on your way back. May Hylia bless your travels."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Beatrix`}><img src={beatrix} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">BEATRIX</div>
                <p>“Wait! If you will.” She fought the whole way to get to the front of the crowd, retucking her hair behind her ear.</p>
                <p>“What’s your favorite ice cream flavor?”</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>"Oh!" She pauses at this, and goes into deep contemplation.</p>
                <p>"Hmmm... maybe--no, well, it has to be..."</p>
                <p>"Mm, yes. Chocolate bourbon!"</p>
            </div>
        </div>

        <div className='story-speech' title="(And because I want to trust you, but don't yet. NO AURA AND ALLEGEDLY NO MARKINGS BUT THE PEOPLE WHO CHECKED YOU AREEE? THE CORRUPT ASS CHURCH WHICH HAD THE SOCIETY VP AS HEAD POPE?????!)">
            <Link to={`/characters/Lucina`}><img src={lucina} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Lucina</div>
                <p>"--But I, we, still have so many questions--" Desperate, almost, stepping forward. "--Can we speak again? May I write to you, or--call you, or meet you again? Please--"</p>
                <p>Please.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>She'll push the question out even as they are escorted away, or as Elysia is--it does not matter. She'd ask a brick wall a question, if she could.</p>
                <p>"Elysia--where were you before you came here, before your awakening?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eris</div>
                <p>He has questions... stacks of them like pancakes, heaps of them like sugar. But time, that's his enemy. Argh, always an erstwhile nemesis!</p>
                <p>"...Wait! The first vessel... do you know their name?"</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Tomoya`}><img src={tomoya} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">TOMOYA</div>
                <p>"Is this what you want to do?" Or is it simply a fate you've resigned yourself to? "In any case, I hope you'll be able to show us something interesting in the future."</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Adam`}><img src={adam} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">ADAM</div>
                <p>This was so much information all at once. Adam’s emotions were plainly on his face as he looked at the girl speaking of great wars and wielding potential power that nations fought over. His fingers twitch as they hung to the side, as he looks to the desperate fervor of Lucina, the cool calculations of The Keeper.</p>
                <p>For a second he felt himself exhale a breath he held onto for too long, but instead it was replaced with a new aggravating worry, nagging him, cursing his mind. So you are just a girl?</p>
                <p>A girl who likes chocolate bourbon ice cream and looks barely the same age as us.</p>
                <p>The meeting is called off and Adam found himself looking back at Elysia with a bewildered look. <i>The first vessel died in an explosion that destroyed the capital.</i> What will stop the second from meeting the same fate? He had only spent a day in Solstia and without knowing a single name of theirs saw the hundreds, thousand faces that passed him by as he walked the streets with his class.</p>
                <p>Why was this meeting for us? Has she met with the hunters association yet instead? Was it just to explain the circumstances with this Arias guy that some people seem to know? Where was she from originally? Did she have parents? Siblings? She has visions? Can heal? It’s not aura but something else? Who ended up destroying Teide? Will the negotiations stay peaceful? <i>Where was her home?</i></p>
                <p>Are you ever going back?</p>
                <p>And he didn’t say any of it. Words stalled in his throat. The meeting will be concluded. And he will leave this room agonizing over the fate of someone who the entire world will know in a few scant days. And history will move its heavy hand.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">SATELLA</div>
                <p><i>She’s mortal. She can die. She is…</i> Satella digs into her coat pockets. Then pulls out something that sparkles under the light.</p>
                <p>The soul earrings.</p>
                <p>“Elysia,” this isn’t necessarily a gift. Or an oath. But she makes it seem that way. She offers it to her. “Can you hold onto part of this for me? Keep it close to you.” She bestows half of the earring to her. Waits to see if this is allowed as well.</p>
                <p>“A human like you should not be called a weapon.”</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Xenophon`}><img src={xen} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">XENOPHON</div>
                <p>He's doubtful. Elysia's position puts her at stake. It's virtue of her title, which naturally wrings out a series of expectations that only clash with one another.</p>
                <p>One person will expect her to denounce everything, and show some humility despite who she inherently is. The next person will revere her for the rest of their lives, whether she turns bitter from resentment or pressurises earth into diamond. The next person wants her just for the sake of appearance. The next person yearns to make a personal connection to her. The next person hopes she loves them, or at the very least respects them. The next person pleads with her to do something, <i>anything</i>, because they need to know what is right, what is good, ordained by some higher power. The next person says me, and the next person says you.</p>
                <p>If it doesn't turn out right, let's try for a third.</p>
                <p>The Keeper is right. Disappointment. Not because he expects, reveres, wants, hopes, but because he <i>knows</i> how this goes. She can't mess up. What then? If she can't live up to her name when it's so much a part of her, then what does that make him? There's no looking away when you put your belief in a figurehead. Mistakes will become her.</p>
                <p>She's just a girl. He's worried about her. That's the inescapable truth.</p>
                <p>(He's worried. He wonders about himself. Who is he?)</p>
                <p>He can't bear to look anywhere close to her. He keeps his eyes to the floor, and reminds himself it's nonsensical to grieve when there hasn't been a death yet.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={elysia} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">ELYSIA</div>
                <p>Retainers jump at the commotion, but Elysia stops them with a wave of her hand. <i>It's fine</i>, she mouths, and she settles her gaze back to you with a gentle expression.</p>
                <p>"I am not allowed a personal phone, so I have no phone number, but it would be pleasant to speak to you again." Her smile turns sad, but it quickly disappears in the next moment. "I will try to see if I can arrange anything with the church... but I apologize in advance, in case they reject the idea."</p>
                <p>She exchanges a glance with one of the retainers. Then, she nods. "Yes. I'll keep this close to me." Elysia's smile widens, holding half of the earring in her hand. "Thank you."</p>
                <p>The retainers start to shuffle you out of the room. Before you go, Elysia calls out to you one last time.</p>
                <p>"Dahlia. Her name was Dahlia. I was an orphan, and--"</p>
                <p>"<i>I do want to do this.</i>" Her words are resolute, despite the loneliness in her eyes. "And I would like to do it well."</p>
                <p>"Please take care."</p>
            </div>
        </div>
        <p>Elysia bids you farewell as your meeting comes to a close. One by one, you leave the ceremony room with your peers, guided by the priest-in-training you met just earlier. Now, it’s time to return back to the hotel.</p>
        <p title='Roll d20 prompt!'>You make your way past the entrance and back into the hallway. There’s nothing left to see, really.</p>
        <p>But as Tao makes their way just past the entrance, they spot Professor Vinca lingering behind in the room. He seems to be staring at something.</p>

        <div className='story-speech'>
            <Link to={`/characters/Tao`}><img src={tao} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Tao</div>
                <p>They notice, then slow their pace until they come to a halt. They hang back a few feet away to see what the professor is looking at.</p>
            </div>
        </div>

        <p>You follow his line of sight, finding that his gaze lands on none other than Elysia.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>Vinca suddenly snaps out of his daze. His eyes meets yours, blinking a few times, before smiling. "Tao! Not joining everyone else?" He starts to walk, falling into step beside you. "We should head back soon. If we're fast enough, we can still catch the breakfast buffet at the hotel."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Tao`}><img src={tao} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Tao</div>
                <p>"Oh, the others walk too fast," they say absentmindedly. "And you're part of everyone else, Professor Vinca."</p>
                <p>They glance over at Elysia as they fall into step with Vinca. "What do you think of her?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>"Mm, she seems nice, doesn't she?" They walk and catch up to the others. "I'm not super religious myself, but she does seem familiar, somehow. I suppose that's how a vessel of Hylia should be--welcoming and familiar to everyone."</p>
                <p>"Oh, let's get some ice cream with the others when we're back, shall we? Maybe chocolate bourbon, my treat."</p>
            </div>
        </div>

        <p>At last, your temple visit comes to a close. You're informed by the priest-in-training that the ordainment ceremony happens next week at nine in the morning, and that you shouldn't be late. Until then, you're free to spend your time in Solstia as you wish.</p>

        <p>...Ah, but don't go too crazy, alright?!</p>

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
                <Link to={`/story/To Solstia`}>🠄 Previous</Link>
                <Link to={`/story/The Ordainment`} style={{marginLeft: '3%'}}>Next 🠆</Link>
            </div>
            </div>
        
    </div>
  );
}

export default TheVessel;
