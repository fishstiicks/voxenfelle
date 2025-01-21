import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';


// ICONS
const vinca = 'https://i.ibb.co/RYW2TGr/Z-VINCA.webp';
const yuenris = 'https://i.ibb.co/tKTB8n4/Z-YUENRIS.webp';
const cc = 'https://i.ibb.co/XVxSt9F/Z-CHOU-CHOU.webp';
const rin = 'https://i.ibb.co/yFNT4Zy/Illustration33.webp';
const rowan = 'https://i.ibb.co/hZfwY4V/image.webp';
const vika = 'https://i.ibb.co/KKdR9KM/image.png';
const yunge = 'https://i.ibb.co/bPPmbmS/image.png';
const cain = 'https://i.ibb.co/TbPWcmn/image.png';

const black ='https://i.ibb.co/MSWT8Hw/vine-black-painted-swatch-300x300.jpg';
const citron = 'https://i.ibb.co/VYcZvRQ/Illustration80.png';
const npc = 'https://i.ibb.co/R02JGTr/f68d79e249fbc0369129d19e5d1b196c.webp';
const areve = 'https://i.ibb.co/G2bdT3K/areve-vfa.png'
const preston = 'https://i.ibb.co/HxHWzWP/atlas-picrew-1.webp';
const hong = 'https://i.ibb.co/1rDC4hx/HONG.png';
const eris = 'https://i.ibb.co/RDD9VDK/ERIS.png';
const crimson = 'https://i.ibb.co/wQgpXYL/crimson4.jpg';
const pomme = 'https://i.ibb.co/v4m2QpF/vfx-pomme-picrew.png';



function CandleCeremonyII() {
    const [hasAttended, setHasAttended] = useState(false);
    const story = 'Candle Ceremony II';
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
            <p>There's barely any time for the words to register.</p>
        </div>

        <div className="story-body">
        <p>Something akin to hopelessness floods the air around you: guns pointed at your heads, your teacher injured on the ground, and a death sentence that looms hungrily—ready to devour and deliver unjust punishment at a moment's notice.</p>
        <p>In unison, their fingers rest on the trigger—aimed and ready to shoot.</p>
        <p>You realise now, that humanity has long since left the people in front of you.</p>
        <p>It plays out as if in slow motion.</p>
        <p>Their fingers squeeze on the trigger.</p>
        <p>And just as despair is about to sink its teeth into your veins—</p>

        <div className='story-speech npc'>
        <img src={black} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">???</div>
            <p>Suddenly, a flash of crimson cuts through the air.</p>
        </div>
        </div>

        <div className='story-speech npc'>
            <img src={npc} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">POLICE</div>
            <p>"Wha—?!"</p>
            </div>
        </div>

        <p>Startled noises leave the policemen as they step back. You realise, then, that they're now unarmed.</p>
        <p>As they look around in a panic, you find your line of sight drawn upwards, led by faint red particles in the air. Then, you see it:</p>
        <p>Assault rifles floating in the air, encased by a sphere of blood.</p>

        <div className='story-speech npc'>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p><b><i>"—Stop right there."</i></b></p>
        </div>
        </div>

        <p>An all too familiar voice cuts through the crowd.</p>
        <p>Eden Vinca stands to the side—hand outstretched as his body glows a deep crimson.</p>

        <p>Limbs crafted from blood pull back the students that have lunged to attack: Vinca's doing.</p>

        <p>Vinca makes his way over to your group.</p>

        <p>He glances at you all, and despite the gravity of the situation, he manages to show you a small reassuring smile.</p>

        <div className='story-speech npc'>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p></p>
            <p className='small'>"Sorry I'm late."</p>
            <p>Vinca turns his attention back to the policemen in front of him.</p>
            <p>"...You're Nikola Yunge's men, aren't you?"</p>
            <p>His voice takes on an uncharacteristically serious tone. It's something you've never heard before.</p>
            <p>"I've seen the news. The bill hasn't passed senate yet, so why are you here?"</p>
        </div>
        </div>

        <div className='story-speech npc'>
            <img src={npc} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">POLICE</div>
            <p>"Urgh…"</p>
            <p>They don't reply, eyeing Vinca with caution.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p>"—Answer me."</p>
        </div>
        </div>

        <p>You've seen your professor—Eden Vinca—be serious.</p>
        <p>Despite his softer personality, it's clear that he takes his job seriously, and that he has the capacity to act on things when it matters most. For example:</p>
        <p>He's serious; when he stays back after class well after his working hours, helping a student catch up because he was too injured to go for a week.</p>
        <p>He's serious; when he helps a student rush a cake in the middle of the night, staying up until morning because her friend's birthday was just the next day.</p>
        <p>He's serious; when he visits a student in the infirmary, weakly wiping at his own tears as he tells them that there's still things worth living for in the future.</p>
        <p>And he's serious; whenever he wishes you good morning, good afternoon, and good night—whenever he says take care, enjoy your meal, and I'll see you tomorrow.</p>
        <p>Because there's nothing he takes more seriously than you, his precious students.</p>
        <p>…But you've never quite seen him like this before.</p>
        <p>The calm waters that were Eden Vinca shift—rising and crashing as they turn into a violent whirlpool of crimson tides, threatening to pull you under.</p>
        <p>You feel the atmosphere getting heavier. Your eyes look around—and spot something moving above: a handful of blood, splitting off from the sphere encasing the policemen's assault rifles.</p>
        <p>It starts to solidify, forming spikes overhead.</p>

        <div className='story-speech npc' style={{ backgroundColor:' #870923', color: '#F5F0F6'}}>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p><b><i>"Answer. My. Question."</i></b></p>
        </div>
        </div>

        <p>Raw unbridled rage consumes his voice.</p>
        <p>Vinca grits his teeth. His body glows brighter.</p>
        <p>And just as the spikes of blood start to move—</p>

        <p className='big'><i>BRIIIING.</i></p>
        <p>The sound of a phone call rings through the air.</p>

        
        <div className='story-speech npc'>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p>"..."</p>
            <p>Vinca pauses.</p>
        </div>
        </div>

        <div className='story-speech npc'>
            <img src={npc} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">POLICE</div>
            <p>"—!!!"</p>
            <p>One of the policemen—supposedly the leader, as well as the one who striked Yuenris—picks up his phone.</p>
            <p>"Yes, sir, I—"</p>
            </div>
        </div>

        <p>The conversation carries on for a few minutes. You see the police officers exchanging awkward glances with each other.</p>

        <div className='story-speech npc'>
            <img src={npc} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">POLICE</div>
            <p>"…You, the professor."</p>
            <p>He addresses Vinca directly. Any displeasure on his face has been wiped away at a moment's notice as he faces your professor.</p>
            <p>"Minister Yunge wants to see you."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p>"Why?"</p>
            <p>Vinca tilts his head up. His face is visibly scrunched in irritation, but he waits for the police officer to continue.</p>
        </div>
        </div>
        
        <div className='story-speech npc'>
            <img src={npc} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">POLICE</div>
            <p>"Minister Yunge says he'll let your students go, if you come with us."</p>
            <p>"...Her, too." The officer makes a pointed glance towards Yuenris.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p>"..."</p>
            <p>Vinca's shoulders tense. He scans over the police officers, Yuenris, before settling on you all.</p>
            <p className='small'>"...Let my students go, he says."</p>
            <p>He chuckles dryly, frowning.</p>
            <p>"Fine," he agrees. "But only if you take your men away."</p>
            <p>"I'll return your weapons after."</p>
        </div>
        </div>

        <div className='story-speech npc'>
            <img src={npc} className='story-avatar'></img>
            <div className="story-speech-text">
            <div className="story-speech-name">POLICE</div>
            <p>"....."</p>
            <p>At the wave of his hand, the police officers—albeit hesitant—start to retreat one by one.</p>
            </div>
        </div>

        <p>Further words are exchanged between Vinca and the police officer. After a moment, the police officer steps to the side, and Vinca makes his way over to you all.</p>

        <div className='story-speech npc'>
        <img src={vinca} 
            className='story-avatar'
            style={{ border: '2px solid #870923', borderRadius: '50px' }}
        />
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p>"...Hey," he greets wearily. "How are you all holding up?"</p>
            <p>His eyes glance over towards Yuenris again where Pomme is by her side, healing her. With his aura, he tries to quicken her healing process, a small boost to Pomme's already impressive efforts.</p>
            <p>"I'm sorry—I shouldn't have left." Regret colours his voice and expression as he looks at you all, one by one. "You must've been terrified."</p>
        </div>
        </div>

        <div className='story-speech npc'>
            <Link to={`/characters/Chou-chou`}><img src={cc} className='story-avatar'></img></Link>
            <div className="story-speech-text">
            <div className="story-speech-name">CHOU-CHOU</div>
            <p>Chou-chou, for once, doesn't cry. There's a terrified look in her eyes -- pale in the face of death. She hasn't come this close to it in a long time</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Citron`}><img src={citron} 
            className='story-avatar'/></Link>
        <div className="story-speech-text">
            <div className="story-speech-name">Citron</div>
            <p>"Are you really going with them?" He motions to the retreating officers. "It surely won't end well."</p>
            <p>"Why are you doing so much for us?" I'm like your stepkid that you only met last month.</p>
        </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Crimson`}><img src={crimson} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Crimson</div>
                <p>"Dude, you <i>can't</i> actually be serious about going with them!" She rudely argues, as soon as the professor turns his attention to the students. "Just let me show them we don't mean to just keel over! They have no right to be here!" Feistily clenching her fists.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'/>
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p>"...What are they going to do, keep me hostage?" Vinca jokes, though a bit inappropriately. "I'm sorry, thank you for your concern. I'll be alright."</p>
            <p>"I believe Minister Yunge simply wants to hold a conversation."</p>
            <p>Then, a simple smile towards Citron. You're my students, after all.
            </p>
        </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Crimson`}><img src={crimson} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Crimson</div>
                <p>"Yeah?! They could throw you in a-- a dungeon or something!" She continues arguing. "Don't go!"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Pomme</div>
                <p>His shoulders ease by a fraction. They're not out of danger yet.</p>
                <p>"Yunge can't be trusted." He looks up at Vinca. "They might keep you hostage--they can charge you for being an obstruction to the police and arrest you--" The words come out of his mouth without thinking.</p>
                <p>At least here, now, they have the advantage.</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Hong`}><img src={hong} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">HONG</div>
                <p>"I don't think 1 to 1 violence is going to be the solution here," Hong murmurs, feeling her throat tighten. "At least if we could hear what Yunge had to say, we would be able to get a clue on what he really wanted with Professor Vinca and..."</p>
                <p>Hong frowns, especially given the violent treatment toward Yuenris. He ambles over to where she is.</p>
                <p>"Professor."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={yuenris} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">YUENRIS</div>
                <p>"...Hong. Are you alright?"</p>
                <p>Yuenris finally speaks. She rises to her feet, using Pomme as a crutch -- though she doesn't smile, there's an effort to reassure him of her condition.</p>
                <p>And then, a look towards Crimson. She doesn't say much else, it should be enough: eyes that communicate, <i>trust us</i>.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'/>
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p>"They made their terms very clear. As suspicious as it may seem, this is the only way I can guarantee your safety, for the time being." He smiles, a little weakly. "But we'll come back. I promise."</p>
            <p>"I'll leave you to Professor van Hoff. He'll take good care of you while we're gone."</p>
        </div>
        </div>

        <div className='story-speech npc'>
        <img src={yuenris} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">YUENRIS</div>
                <p>"..."</p>
                <p className='small'>"This is not a good idea."</p>
                <p>She whispers, only loud enough for him to hear.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'/>
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p></p>
            <p className='small'>"I know that."</p>
            <p>He smiles.</p>
            <p className='small'>"I'm sorry. Can I ask you to come with me?"
            </p>
        </div>
        </div>

        <div className='story-speech npc'>
        <img src={yuenris} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">YUENRIS</div>
                <p>A sigh. Yuenris nods.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'/>
        <div className="story-speech-text">
            <div className="story-speech-name">Vinca</div>
            <p></p>
            <p>Vinca smiles at her.</p>
            <p className='small'>"Thank you."
            </p>
        </div>
        </div>

        <p>After a few more exchanges, Vinca and Yuenris leave, following behind the police officer as they disappear into the crowd.</p>
        <p>With the hour being much too late into the night for you to go home, Professor van Hoff brings you all to a nearby hotel instead. The establishment seems to have a longstanding partnership with the school, allowing you all to stay the night despite recent events.</p>
        <p>It's midnight when you finally land yourselves on a bed. Generously, the hotel gave you all single rooms to sleep in, allowing you some peace and quiet after today's events.</p>
        <p>After a moment, exhaustion crashes over you in your moment of reprieve. Thoughts of what transpired today race through your mind as the silence proves itself too loud to bear during moments like these.
        </p>
        <p>Still, the night goes on, and regardless of your fears and worries—you find that you should get ready to turn in for the night.
        </p>
        <p>For tomorrow still awaits.</p>
        </div>

        <hr />

        <div className='cutscene'>
        <div className='story-body alt-font'>
            <br></br>
            <Link to={`/FellePress/12`}><div className="special-box"><div className="news-icon">📰</div>
            <p>BREAKING: NIKOLA YUNGE INTRODUCES NEW BILL, ALL VOIDPACTS TO BE TERMINATED. SENATE VOTING SOON.</p>
        </div></Link>
        <p>Minister of Defense Nikola Yunge introduces private bill, entailing an immediate outlawing of voidpacted peoples and the termination of all active voidpacts across the country. <Link to={`/FellePress/12`}>Read More</Link></p>
        <br></br>
        </div>
        </div>


        <hr />

    <div className="story-big">
        <p>The sun rises on a new day.</p>
    </div>

    <div className="story-body">
        <p>Your morning at the hotel was brief; the hotel mandated you to check out early—not because of recent events, but purely because their policies were as such—but you managed to at least have a meal at their breakfast buffet, which proved to be surprisingly delicious. All in all, it was a welcome distraction for your mind, even if it didn't last for too long.</p>
        <p>Now, you find yourselves on the school's bus. Professor van Hoff had called them over to pick you up, as it was the easiest way to bring you all back while still guaranteeing your safety.</p>
        <p>It'll be a while until you reach the academy again. What will you do to pass the time? Will you catch up on sleep? Check in on your classmates? Message your family and friends?</p>
        <p>Regardless, the bus rumbles as you make your way back to Voxenfelle.</p>
        <p>The low hum of the engine is comforting.</p>
        <p>Eventually, the familiar sight of the academy enters your peripheral vision. A sense of comfort washes over you.</p>

        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p>"We're almost there, guys!"</p>
            </div>
        </div>

        <p>Your senior—the bus driver—chimes in with a smile. An attempt to lift your spirits, maybe.</p>
        <p>...But, suddenly, you notice the bus slowing down.</p>

        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p><i>"Hm...???"</i></p>
                <p>Preston squints, craning his neck forwards to get a better look at the road ahead.</p>
                <p>"There seems to be... a strange individual!"</p>
            </div>
        </div>

        <p>The bus slowly comes to a halt. You're just a stone's throw away from reaching the school now.</p>
        <p>You see it from the corner of your eye: a man, standing in front of the gates.</p>

        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p>Preston huffs to himself before turning back to you all.</p>
                <p>"My apologies, dear juniors--but I fear we must disembark for now. Please leave the bus in an orderly manner and do not push each other as you get off!"</p>
            </div>
        </div>

        <p>The stranger turns around at the commotion. His face brightens at the sight of you all.</p>
        
        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">???</div>
                <p>"Yo. Nice school 'ya got here."</p>
                <p>He whistles, eyeing you all one by one.</p>
                <p>"Took the bus here, eh? Shucks, I should've taken the bus too. Can you imagine? I walked aaall the way here, just to see you guys. My feet are <i>killing</i> me here!"</p>
            </div>
        </div>

        <p>Something buzzes. You feel warning alarms blaring in your head.</p>

        <p>It's well concealed, but you can feel just the faintest trace of it seeping through: mbloodlust.</p>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Name's Cain! I'm just a… <i>hmmm</i>, what do you guys call it? Well, can't really remember, so just think of me as some stranger passing by."</p>
                <p>"I'm just here to check the place out. Y'know, <i>like when you go to your fav restaurant one last time before it gets torn down?</i> Something like that."</p>
                <p>"I'd say <i>nice meeting you</i>, but…"</p>
                <p>He glances at some of your drawn weapons, and smirks.</p>
                <p>"Looks like I'm not really welcome here. Too bad." A sigh, though the smirk doesn't quite leave his face.</p>
                <p>"Guess I'm not supposed to be here either. Not <i>yet</i> anyway, but… hm."</p>
                <p>"How about we do something fun? Something small, to celebrate our first meeting. Like a mini-party."</p>
                <p>"This is a school for Hunters, right? Which means you guys are strong.</p>
                <p>"So, let's do this: dodgeball. Except I'm the one attacking, and I'm not using a ball."</p>
                <p>"You win, I leave. You lose..."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p><b>"I kill one of you collared kids."</b></p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"How's that? Fair, right?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Areve`}><img src={areve} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Areve</div>
                <p>"... Won't you kill me if we lose instead?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>Cain taps at his neck, then points to Areve's.</p>
                <p>"Not interested, girlie." <i>You're not one of them</i>.</p>
                <p>"Now…"</p>
            </div>
        </div>

        <p className='big center alt-font'><b>"Time to play ball."</b></p>

        <img className='story-cg' src="https://i.ibb.co/jDyRHD3/mello-cg3.png"></img>
        <div className="special-box"><div className="music"><a href="https://youtu.be/8HL8snYICPI?si=ILlPdGMCUy0LYo0B" target="_blank" rel="noopener noreferrer">♫</a>
        </div><p>ENCOUNTER: CAIN</p>
        </div>

        <div className='minigame alt-font'><p>This is an enemy encounter. To fulfill the objective, you must dodge all of Cain's attacks within FIVE (5) rounds: getting hit three times will knock you out.</p>

        <p>
        This is a positional-style encounter. Cain will randomly pick a direction to move in. Your goal is to avoid going in the same direction. Picking the same direction will cause you to get injured by his swordwhip. Being injured three times will knock you out.</p></div>

        <p>With the click of a button, Cain's sword falls apart into sectioned pieces, held together by wire in the centre.</p>

        <p>He swings his swordwhip around. He hits some of you in the legs, drawing blood from where the blade had grazed you.</p>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'
                  style={{ border: '2px solid #cccccc', borderRadius: '50px'}}></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Wow, you guys are hanging on longer than I thought." Cain whistles. "But that's kind of boring, so let's spice it up a little more."</p>
            </div>
        </div>

        <p>Suddenly, his body glows a faint onyx, figure shimmering like a faraway mirage.</p>

        <p>Copies of him begin to form, splitting to your left and right. All Cain, and all very much corporeal.</p>

        <p>Well, Cain never really said he'd play fair.</p>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'
                  style={{ border: '2px solid #cccccc', borderRadius: '50px'}}></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Run faster! Faster! Fasteeeeeer!"</p>
            </div>
        </div>

        <p>His mirror images multiply at a rapid speed, doubling what it was just a moment ago.</p>
        
        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'
                  style={{ border: '2px solid #cccccc', borderRadius: '50px'}}></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Oh, was that an extra round? Oops, sorryyy."</p>
                <p>"Wow, some of you are crazy beat up. Shouldn't you guys be stronger than this?"</p>
            </div>
        </div>

        <p>Cain laughs as he makes his way over to you. It echoes through his mirror images, creating an awful overlap of voices, all just slightly delayed by a millisecond from each other.</p>

        <p>The drag of his sword-whip against the concrete rings sharp, grating your ears.</p>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Isn't that too bad?"</p>
            </div>
        </div>

        <img className="story-cg" src="https://i.ibb.co/P6NHBHN/IMG-8893.png" title="He approaches one of the fallen Voidpacts, War, and settles his foot on their chest.'I heard about what happened last night, you know.' He continues rambling on to himself. 'I'm not sure if you guys are going to make it like this.'"></img>

        <p>He slides his foot over, inching towards War's neck. He applies pressure onto their voidpact collar.</p>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"Nikola Yunge is gonna have you all run into the ground by next week."</p>
                <p>"If not him, me. If not me, then—"</p>
                <p><b><i>"—Her."</i></b></p>
            </div>
        </div>

        <p>Cain takes his foot off, and steps back.</p>

        <div className='story-speech npc'>
        <img src={cain} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">CAIN</div>
                <p>"But I really should go."</p>
                <p>Cain grins, flashing his sharp canines. Like a dog.</p>
                <p>"We'll meet again, though."</p>
                <p>"So, try to stay alive until then."</p>
            </div>
        </div>

        <p>Cain activates his aura, and his body starts to shimmer again.</p>
        <p>Again, like a mirage—but this time, he looks as if he's about to disappear.</p>

        <div className='story-speech'>
            <Link to={`/characters/Eris`}><img src={eris} 
            style={{ border: '2px solid #ffe959', borderRadius: '50px'}}className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">ERIS</div>
                <p>It's a risk. A horrible risk. This is him casting his die with the void-pacted. <i>You think you should go, I say you stay.</i></p>
                <p>He uses his aura, worn out toy that it is and cancels out everyone using an aura.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Crimson`}><img src={crimson}
            style={{ border: '2px solid #c21c1c', borderRadius: '50px'}} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Crimson</div>
                <p>No way. No way. This is <i>NOT</i> how the story goes. She <i>refuses</i> it. Every fiber of her being vibrating, pulling taut.</p>
                <p>Already running towards Cain when he moves to disappear, powered arms reaching out-- <i>and that's what they're for</i>-- grasping things that should have originally been <i>out</i> of her reach. But no longer.</p>
                <p><b>"FUCK-"</b> She swings a fist, aimed straight to Cain's face. <b>"-OFF!"</b></p>
                <p>An eye for an eye. <i>This is for War.</i></p>
            </div>
        </div>

        <p>All your auras blink off.</p>
        <p>...But it's too late, because what's left of Cain is merely a quarter of his head when it activates.</p>
        <p>But his body does flicker, and it's just enough time for Crimson's punch to land on what little is left of him before he disappears.</p>
        <p>...And when you blink again, he's gone. </p>
    </div>

    <hr />

    <div className="story-big">EPILOGUE</div>
    <div className='story-body'>
        <p>It's unclear who Cain was, or where he had come from. What you do know is that—someway, somehow—he's connected to the Defense Minister, Nikolas Yunge.</p>
        <p>But many of you have been injured. Though unanswered questions persist in your mind, your current priority is to get your classmates the medical attention that they need.</p>
        <p>Later, Professor van Hoff informs you that Professor Vinca and Yuenris are on their way back. Perhaps then you'll find some clarity to the situation, as well as much needed answers.</p>
        <p>Tonight, the air runs thick with uncertainty in Voxenfelle Academy.</p>
    </div>

    BUTTON HERE TO CHECK COMPLETION

    <hr />

    <div className='cutscene'>
    <div className="story-big">CUTSCENE</div>
    <div className='story-body'>

        <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">CAIN</div>
                    <p>"Tch…"</p>
                    <p>Cain sits on a leather sofa. An ice pack settled over his head.</p>
                    <p>"Fucking—"</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>The door swings wide. Heavy footsteps follow as a figure enters the room, a cane tapping along with each stride taken.</p>
                    <p>"...Cain."</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">CAIN</div>
                    <p>"`Sup. Checking in on me or what?"</p>
                    <p>Cain barks out a laugh. The sound echoes throughout the study.</p>
                    <p>"I know what you're gonna say. <i>Blahblahblah don't act without permission. Blahblahblah you're going against orders.</i>"</p>
                    <p>Cain rolls his eyes.</p>
                    <p>"Whatever."</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"..."</p>
                    <p>The figure stares at Cain. Quietly, they sit in the chair to his side.</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">CAIN</div>
                    <p>"So? Any news from Yunge?"</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"No."</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">CAIN</div>
                    <p>"Seriously? Man. I don't get paid enough for this."</p>
                    <p>He sets his feet up on the coffee table in front of him, letting out a long sigh.</p>
                    <p>"This bill is taking so damn long. He should just kill Sullivan already."</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={black} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"..."</p>
                </div>
            </div>

            <div className='story-speech npc'>
            <img src={cain} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">CAIN</div>
                    <p>"Oh, sorry—got it wrong there."</p>
                    <p>"He should get you to kill Sullivan already. His fav' and all."</p>
                    <p><i>"Right, Vika?"</i></p>
                </div>
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
                <Link to={`/story/Candle Ceremony I`}>🠄 Previous</Link>
                <Link to={`/story/An Audience`}>Next 🠆</Link>
            </div>
            </div>

    </div>
  );
}

export default CandleCeremonyII;
