// ICONS
const vinca = 'https://nyewwe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F1388b2be-e6c6-43c1-8355-81e1c94a6250%2FZ_VINCA.png?table=block&id=71fa2989-49b8-4392-80ac-39aca74876dc&spaceId=e99cfe6f-3fec-4c86-b805-3235000eb51a&width=2000&userId=&cache=v2;';
const yuenris = 'https://nyewwe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F352cd77e-fa73-4420-bc74-d187cfb7d242%2FZ_YUENRIS.png?table=block&id=ab495cb4-1e63-41fc-a595-c98ecbb56f53&spaceId=e99cfe6f-3fec-4c86-b805-3235000eb51a&width=2000&userId=&cache=v2';
const satella = 'https://i.ibb.co/QnQr8YJ/SATELLA.png';
const preston = 'https://i.ibb.co/HxHWzWP/atlas-picrew-1.webp';
const scottie = 'https://i.ibb.co/HqqFTZb/SCOTTIE.png';
const hong = 'https://i.ibb.co/1rDC4hx/HONG.png';
const eris = 'https://i.ibb.co/RDD9VDK/ERIS.png';
const yunge = 'https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F958ed487-bd04-49a4-82e2-55cc5e9d928d%2Fimage.png/size/w=2000?exp=1737334948&sig=YZ7-TCO7CNhSbVE2hDGww6e-c9GZ5vezUwNPJ3CVHfw';
const rowan = 'https://nyewwe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2F3cd778e1-150a-491f-b988-f59ec3d8d5c6%2Fimage.png?table=block&id=e0c443ea-1735-4d28-8743-7fc106ba3b4e&spaceId=e99cfe6f-3fec-4c86-b805-3235000eb51a&width=2000&userId=&cache=v2';
const tk = 'https://i.ibb.co/syKYjns/tkuni.png';
const dingo = 'https://i.ibb.co/LgqYzbw/DINGO.png';
const crimson = 'https://i.ibb.co/wQgpXYL/crimson4.jpg';
const rider = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b702d9b9-48c3-46e2-9591-7766a3f20658/di99ogy-9e922e77-00b4-45b7-90d5-be4f3f6c4daf.png/v1/fit/w_600,h_600,q_70,strp/vfa_rider_by_khialling_di99ogy-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYjcwMmQ5YjktNDhjMy00NmUyLTk1OTEtNzc2NmEzZjIwNjU4XC9kaTk5b2d5LTllOTIyZTc3LTAwYjQtNDViNy05MGQ1LWJlNGYzZjZjNGRhZi5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EjFrNYvAiwVGWC7yHW50a2gTuWtrXciNFD_RGufTh4Q'
const october = 'https://i.ibb.co/gvxbNYM/image.png';
const eden = 'https://i.ibb.co/tpXbxCw/EDEN.png';
const beatrix = 'https://i.ibb.co/CQ5fKMm/BEATRIX.png';
const pomme = 'https://i.ibb.co/v4m2QpF/vfx-pomme-picrew.png';
const tomoya = 'https://i.ibb.co/6NhGwhp/TOMOYA.png';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

function AnAudience() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = 'An Audience';
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
            <div className="time">11:00 A.M.</div>
            <div>Voxenfelle Academy</div>
        </div>
        
        <div className="story-body">
        <p>It's the next weekend when Professor Vinca and Yuenris finally return from their visit.</p>
        <p>They share with you the results of their discussion: that despite negotiations, Yunge has no intention of taking back the bill, and that any effort to sway him has fallen on deaf ears.</p>
        <p>The two have retreated to the faculty room—presumably to discuss future plans of action with other members of the Voxenfelle faculty—leaving you behind in the lecture hall with the rest of your classmates.</p>
        <p>The clock ticks.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>Your classmates decide to tail the teachers. You follow as well.</p>
        <p>But it's a bit too late, because once you get there, they're already well inside the faculty room. You hear faint murmurs from behind the double doors—it sounds like they're in the middle of a discussion.</p>
        <p>You hear a snippet of conversation from the teachers.</p>
        <div className="scene">
            <p className="npc-text">"Did Nikola Yunge say nothing at all?"</p>
            <p className="vinca-text">"He…"</p>
            <p className="vinca-text">"He said he'd leave Yuenris alive—if I went to work for him and gave the kids up."</p>
            <p>A pause.</p>
            <p className="vinca-text">"...I could never say yes."</p>
        </div>
        <p>Your classmates begin discussing what they overheard in a panic, some resorting to breaking down the door and...</p>
        <p>...the door was unlocked.</p>
        <p>In front of you stands Professor Vinca, Yuenris, and Professor van Hoff. They stare at you all with widened eyes.</p>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>Vinca looks speechless, currently.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={yuenris} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">YUENRIS</div>
                <p>Yuenris, however, lets out a small sigh.</p>
                <p></p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">SATELLA</div>
                <p>"…With all due respect, professors."</p>
                <p>"Anyone's livelihood in our academy should also be the business of your students." Speaks up as she faces them. A serious expression that felt like greeting an old friend.</p>
                <p>"The fact that they are all here means they care."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={yuenris} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">YUENRIS</div>
                <p>"I appreciate the care." She replies simply. "Though I would've also appreciated a knock."</p>
                <p>She walks over to the crowd of fallen people and pulls her up from the floor.</p>
                <p>"...Well, I assume you guys heard some of it already." She sighs, crossing her arms in front of her chest. "Yunge offered me immunity if we switched over to work for him."</p>
                <p>"Obviously, I didn't agree to it. I wouldn't let Vinca accept it, either."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>"I wasn't going to." He sighs.</p>
                <p>"We're not giving up yet. We're still looking for ways to stop the bill from passing." Vinca rubs his temples, obviously troubled. "But I won't let any of you be in danger. I promise."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={yuenris} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">YUENRIS</div>
                <p>"Who knows what he wants from us." She shrugs, but there's a serious look to her face as she speaks. "But I'm assuming it's power."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={vinca} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">VINCA</div>
                <p>He deflates a little from the replies, but tries to keep his chin up.</p>
                <p>"I'm sorry, we're still working it out. We've tried to get another appointment arranged, but..." Another sigh. "It's been difficult."</p>
                <p>"But we'll keep trying."</p>
            </div>
        </div>

        <p>You spend another few minutes at the teacher's lounge, discussing possible plans for action. None of them seem quite promising just yet, but you decide to go back for the day and brainstorm elsewhere with your other peers.</p>
        </div>

        <hr />

        <div className="story-big">
            <div>Later that afternoon...</div>
        </div>

        <div className='story-body'>
        <p>All of a sudden, you feel your phone vibrate.</p>
        <p>You check your phone and notice a direct message request. It's from someone named Halynn.</p>

        <div className='story-speech npc'>
        <div className='story-avatar'>💬</div>
            <div className="story-speech-text text">
                <div className="story-speech-name">HALYNN</div>
                <p>Tomorrow. Defense Ministry. 09:00 A.M.
                <br></br>
                Make it count.</p>
            </div>
        </div>
        <p></p>
        </div>
        
        <hr />

        <div className="story-big">
            <div className="time">09:00 A.M.</div>
            <div>Ministry of Defense</div>
        </div>

        <div className='story-body'>
        <p>You arrive at the Ministry of Defense.</p>

        <p>The building stands coldly before you. Monochrome grey walls lacking in any decoration and colour, paired with security guards that scrutinise your every move—your every breath—creating an atmosphere that feels like the very definition of the word uninviting.</p>

        <p>Inside, Nikola Yunge awaits.</p>
        
        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p>"...So! Halynn worked very hard to grant us this audience with the minister, so let's make this a good discussion, shall we?"</p>
                <p>Your senior, Preston, beams at you. Despite the depressing atmosphere, he's doing his best to hype you all up.</p>
                <p>"Remember, no violence unless they attack you first! If anything happens, group with your friends and escape the scene as quickly as you can."</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Scottie`}><img src={scottie} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">SCOTTIE</div>
                <p>"What do you mean unless they attack us?! We're just sitting ducks?" Pissed off by this Preston guy.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p>"Ideally there would be no attacking at all..."</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Hong`}><img src={hong} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">HONG</div>
                <p>She'll find a voidpacted friend to stand near. Meat shielding, if you will.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p>"Good call, junior Hong! Stay close to your voidpacted friends. We must keep each other safe."</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">ERIS</div>
                <p>"What kinda snazzy connections you both have to make this happen? Meet someone in prison?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p>"Never underestimate your seniors, dear junior! We are very capable people."</p>
            </div>
        </div>

        <p>You make your way inside the building.</p>
        <p>Security guards lead you through winding corridors, up a passcode elevator, and—finally—to Yunge's office.</p>

        <div className='story-speech npc'>
        <img src={preston} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">PRESTON</div>
                <p>"Remember everyone, we must act cordial and polite...!" Preston kindly reminds as they reach Yunge's doors.</p>
                <p className="small">"Even if we may not want to."</p>
            </div>
        </div>

        <p>An accompanying security guard knocks. After a moment, they open the door.</p>

        <p>You enter the office.</p>

        <div className="special-box"><div className="music"><a href="https://www.youtube.com/watch?v=QVgSxg6po7Q&ab_channel=PathtoNowhere-Topic" target="_blank" rel="noopener noreferrer">♫</a>
        </div>
        <p>Immediately, you feel the atmosphere change.</p>
        </div>

        <p>The office is dimly lit, save for light pouring in from a half-covered window to the other side of the room. Underneath that, with elbows settled over a large mahogany desk as he stares at you one by one, sits Nikola Yunge.</p>

        <p>His gaze stays on you, like a predator eyeing its prey.</p>

        <div className='story-speech npc'>
        <img src={yunge} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">NIKOLA YUNGE</div>
                <p>"...I do not recall agreeing to such an audience." He speaks, voice low and tempered.</p>
                <p>"Speak, quickly."</p>
            </div>
        </div>

        <p>Around you, your classmates clamor to ask questions, state demands, offer deals. None of it is of any use.</p>

        
        <div className='story-speech npc'>
        <img src={yunge} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">NIKOLA YUNGE</div>
                <p>"Like students like professors." The tone in his voice is clear as he speaks—unamusement.</p>
                <p>"Is that all you have to say?" Yunge asks, eyes narrowing. "For students of such an academy, I expected better. But I suppose that is my mistake. I should not have expected much from a school that allows voidpacts in the first place."</p>
                <p>"Perhaps an extended reevaluation of Voxenfelle is due." A gloved finger taps the mahogany desk once, twice. "I am sure the board of education will be more than willing to work with us on a new curriculum. One that works in tandem with our new anti-voidpact law."</p>
            </div>
        </div>

        <p>Yunge tilts his chin towards the security guards by the door. Soon enough, they're forcing you out of his office.</p>

        <p>With heavy hearts, you start to make your way back to the building's exit.</p>

        <p>As your feet shuffle through the corridor, you notice a few people coming from the opposite direction. They seem to be escorting someone.</p>

        <p>You stare at the small crowd. As you close the distance, recognition slowly dawns on you.</p>

        <p>Then, the figure meets your gaze.</p>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar black'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">???</div>
                <p>"Ah—"</p>
            </div>
        </div>

        <p>The Minister of Aura, Rowan S. Sullivan, stares back at you.</p>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"You're—"</p>
                <p>Rowan's eyes go wide in shock.</p>
                <p>"You're students—f-from Voxenfelle!"</p>
            </div>
        </div>

        <p>He shuffles past the guards, making a beeline towards your party.</p>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"I'm—"</p>
                <p>"My name is… Rowan… I'm the Aura Minister."</p>
                <p>"Can we… ah… talk? Um—"</p>
                <p>"B-But not…"</p>
                <p>He warily glances at the police officers behind him.</p>
                <p className="small">"Not here."</p>
            </div>
        </div>

        <p>Rowan looks back towards your crowd, desperation panting his face clear as day. He makes no effort in hiding it: he needs your help.</p>

        <div className='story-speech'>
        <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"Follow us." BOSSING HIM AROUND? "And we will hear you, Rowan Sullivan."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>YOU DON'T EVEN KNOW THIS PLACE</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"...No, I can't... I can't come with you." He takes the offered handkerchief with a nervous thanks, wiping his brow before continuing.</p>
                <p className='small'>"Sorry. Come with me."</p>
            </div>
        </div>

        <div className="special-box"><div className="music"><a href="https://www.youtube.com/watch?si=n5f7eQriIaU_qTYI&v=-ZNJ31OSPM8&feature=youtu.be" target="_blank" rel="noopener noreferrer">♫</a>
        </div>
        <p>You find yourselves in what looks to be an old, unused conference room. No cameras in sight.</p>
        </div>

        <p>Rowan locks the doors once you're all inside, making sure nothing can leak out, and—most importantly—that nothing can peek in.</p>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p><i>"...Sigh."</i></p>
                <p>After making sure everything was secure, he turns to face you.</p>
                <p>"Um… thank you for coming with me."</p>
                <p>"I, ah…"</p>
                <p>"O-Oh, I'm sorry, you must be confused. If you'd like to ask me anything…"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>She holds up a hand.</p>
                <p>"Before we begin, apologise and express your gratitude. Many students here dislike you for your incompetency, others have saved your life. They deserve your respect."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"O-Of course. I, um, I'm very grateful--you saved my life." Though his voice is weak, the gratitude in it is sincere. "I'm sorry. I--I had to bring you here. Um, it's--"</p>
                <p className='small'>"They're... they're always listening, so..." He gulps.</p>
                <p>"I wanted to talk to you... about the--the bill. About the voidpacts."</p>
                <p>"You--did you talk to Yunge just now? To stop him?"</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Tomoya`}><img src={tomoya} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">TOMOYA</div>
                <p>"We were given a chance to speak to him, but as you'd expect, he had no interest in listening to us."</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">ERIS</div>
                <p>"Wait, wait. Something pretty important, right? Mr. Sullivannn, how do you reaaally feel about the Voidpacted? Since you had your run-in with the army and all. Before I agree to a-n-y suspicious political deals in camera-less rooms without even a LAWYER present! ... I'd like to know? 'Cause a lot of those people pacted because of y-o-u."</p>
                <p>"See?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"I--" Rowan closes his eyes, pressing his knuckles to his temple. "I don't have a-any ill will towards voidpacts."</p>
                <p>"I don't want..." He takes a deep breath. Inhale, exhale. It feels like he's on the edge of a nervous breakdown. "I don't want this bill to pass... e-either. I never... I never have."</p>
                <p>"But my--my hands are tied. I..."</p>
                <p>"I've tried, to stop it, but Yunge--he---"</p>
            </div>
        </div>

        <div className="special-box"><div className="news-icon"><Link to={`/FellePress/12`}>📰</Link>
        </div>
        <p>You recall something from a <Link to={`/FellePress/12`}><u>recent news article</u></Link>: that Nikola Yunge launched the police at Sullivan right before the bill's readings.</p>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"I'm sorry, I--I know it must be hard to trust me but---" He holds his head in his hands. <i>"Oh, Hylia..."</i></p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Dingo`}><img src={dingo} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">DINGO</div>
                <p>? "Do you want us to..." He shadowboxes. "The police?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"N--no!"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Crimson`}><img src={crimson} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Crimson</div>
                <p>"We can kill Yunge." Helpfully.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>ROWAN SHAKES HIS HEAD.</p>
                <p>"N-No! You'd get yourselves killed!"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">ERIS</div>
                <p>"Mr. Sullivannn?" He drops the sing-song voice. "Begging's cute and all but what can you do for us? Hm? You called us here because you have something, right?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"I have… e-evidence. About Yunge."</p>
                <p>"Nikola Yunge is…"</p>
                <p>"Not… a good man." Stating the obvious. "I know I've done—"</p>
                <p>"I've done… terrible things, due to my… my incompetence." Rowan takes a deep, shaky breath. "And I can never atone for that in my lifetime, ever."</p>
                <p>"But Yunge, he—"</p>
                <p>Sullivan pauses, trying to pace himself.</p>
                <p>"I've seen people go missing."</p>
                <p>"People who… went against him, o-or went against his plans."</p>
                <p>"I was… safe, because my family is well known. But…"</p>
                <p>"Even that isn't going to last." He casts his gaze down, a helpless look settling over his face.</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eden`}><img src={eden} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eden</div>
                <p>"What kind of people are we talking?" Gaze sharp--if these were average, well-known workers, and no one's ever raised a fuss before? Yunge is more dangerous than she'd realized.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Smaller politicians... o-other people who might be... important--but not as important as him..."</p>
                <p className='small'>"B-But he also tried to kill me..."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">SATELLA</div>
                <p>She ponders more.</p>
                <p>"…Do you have any ideas on where the missing people were taken to?"</p>
                <p>"We can find them." Offers a impromptu mission.</p>
            </div>
        </div>
        
        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text" title="nelle doesn't know names">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"The missing people... are dead." He looks like he's about to throw up any second now.</p>
                <p>He mentions the names of mildly important people and/or smaller politicians who have died from either accidents or natural causes over the years.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"You are a waste of a minister; you have taken this position with the promise to lead your people--I do not care if you were forced into it by anyone, it is yours now, and if you had a single decent bone in your body, you would use it for the sake of the people you are meant to protect. You know nothing of ownership. These people are yours. The country may very well be better off with your death."</p>
                <p>His very existence is an insult.</p>
                <p>"But you are alive. You remain capable of change."</p>
                <p>"We will look into Yunge further. Not for you, but because informing us has been the one decent thing you have done for your country. Remain vigilant. When the time comes, I hope you are brave enough to do what must be done."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Rider`}><img src={rider} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Rider</div>
                <p>"Y'know, you really deserve to die when you're this incompetent," they say breezily. "Look at you with all the power in the world and you gotta go crawling to a buncha kids for help. People rely on you! Did ya think being minister was gonna be a walk in the park? Real people were really, really relying on you - then and now. They a joke to you? You just liked how the position looked on your resume?" They tilt their head curiously. "You really deserve to die for running for the position when you know you're this incapable. Irresponsible of you. Real irresponsible!"</p>
                <p>"We're gonna help you, only cuz you can do something real good for us if you're real smart. But really - no matter what you do, from here on out, it's always gonna have been better if you were just dead!"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"He is a waste of space, but if he is going to be a tool in this game, he may as well be our tool."</p>
                <p>She looks upon the miserable 40 something year old man.</p>
                <p>"You will be ours, Rowan Sullivan. We will use you for the right thing."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Rider`}><img src={rider} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Rider</div>
                <p>They chuckle somewhere behind TK. It sounds like agreement.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar dark'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Did," he opens his mouth, still staring at the ground.</p>

            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar darker'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p></p>
                <p className='small'>"Did you think I wanted to be here...?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar dark'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Did you think I didn't---" A breath, shaky. "That I hadn't thought of that before? That I--that I deserve to die? You think I haven't---"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p className="big"><i><b>"You think I haven't tried?!"</b></i></p>
            </div>
        </div>
        
        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>Rowan tugs at his hair, closing his eyes as he all but spirals.</p>
                <p>"I <b><i>tried</i></b>-- I tried again and again and again and again and still they bring me back each time and still I see them every time I sleep every time I close my eyes every time I eat and breathe and walk and---"</p>
                <p>He falls to his knees, covering his face with his hands. Then, he starts to cry.</p>
                <p>"I don't want to be here, I've never wanted to be here, and I've tried so many times to get out but I can't because they won't let me and I have to live with every single death I've failed to prevent and every day I wish I were dead -- <i>I really really wish I were dead</i> -- but I <i>can't</i> and I--"</p>
                <p>For a moment, Rowan chokes on his own tears.</p>
                <p>"But I'm--I'm <i>trying</i>, okay? For once I wanted to--"</p>
                <p>"I thought I--I thought I could <i>help</i>. I thought I could actually <i>help</i>. " Another sob. "But even then I--he--"</p>
                <p>Then, he falls quiet, as if trying to calm himself down.</p>
                <p>"...I tried to get it to the press. My evidence."</p>
                <p>"I had a--an investigator, help me."</p>
                <p>"But Yunge was having none of it."</p>
                <p>Rowan lowers his hands from his face, tear marks streaking both his cheeks.</p>
                <p>"So he killed them."</p>
                <p>Rowan glances back at you all. He looks miserable.</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/October`}><img src={october} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">October</div>
                <p>Every reaction that weeps out of Sullivan sinks into October, heavier and heavier with disappointment. Seeing a grown man cry. They look to Eden instead, to see if she'd know what to do about something so... pathetic.</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eden`}><img src={eden} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eden</div>
                <p>It's uncomfortable, to put it simply, watching this man break down in front of them. She doesn't think this out of malice or cruelty, but it really, really is. She glances back at October, her face pulling tight in a frown. They may be able to sense her hesitance, her awkward footing as she shifts back to Rowan.</p>
                <p>It's uncomfortable for other reasons, too. The implication that he can't die. The outright admission that Yunge is killing people who stand in his way. The situation grows darker by the second, and she still doesn't know <i>what to do</i>.</p>
            </div>
        </div>

        <div className='story-speech' title="🍊">
        <Link to={`/characters/Eden`}><img src={eden} 
            className='story-avatar'
            style={{ border: '2px solid #FFF8AA', borderRadius: '50px' }}
        /></Link>
        <div className="story-speech-text">
            <div className="story-speech-name">Eden</div>
            <p>So for now, she does what she can. Eden steps forward, hesitantly, and with her aura, creates an orange, because Rowan is so pathetic and shrimpy he seems like he needs it. She leans down to hand it to him.</p>
        </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eden`}><img src={eden} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eden</div>
                <p>"If they're keeping you alive, it means you're important, Rowan," Eden starts, after a beat. "If you're still alive--even if you <i>want</i> to die--it means you need to do whatever you can to prove that. Your life is yours, and just because they have you on a leash doesn't mean you can't still help...especially if they <i>won't let you die</i>."</p>
                <p>And it's dark, she knows--but if they keep him around, then she wonders if maybe he shouldn't act out, just a bit. To help them. (Because if they finally have enough and kill him too, well--it doesn't seem like he'd be that upset about it.)</p>
                <p>An awkward pat to his shoulder. "So...we'll do what we can help you. But can you help <i>us</i>? Is there some way we can stay in contact? Can you get us that evidence?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>She does not care for his feelings. What she cares for is--</p>
                <p>"--what do you mean they brought you back each time?" Her words come out slow, calm, but her pulse quickens. "You died and they raised you from the dead? Who? How?" </p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>Slowly, his sobs start to quiet.</p>
                <p>"I'm sorry," he speaks between breaths. "Thank you." He doesn't deserve this kindness, Rowan knows this well. Still, he thanks them.</p>
                <p>"I do... have a plan, somewhat." Then, a glance to TK. "It's, um... a relative's aura." Rowan sighs. "My family has been in politics for a very long time. Most of my actions are... dictated, by them."</p>
                <p>"I... I still have the evidence. It's at my office safe, on a flash drive."</p>
                <p>"It's not... a lot, really. But it's enough to get even him arrested." Rowan gulps. "...But like I said, Yunge would never let it see the light of day. I've tried it before. He has eyes and ears everywhere."</p>
                <p>"But,"</p>
                <p>Rowan takes a deep breath. He raises his head, looking at you all properly.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"—he doesn't have anyone at Voxenfelle."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>He continues speaking, expression settling into something more serious.</p>
                <p>"I've seen the… articles, from your school… Felle-Press? A lot of people read them, even the general public."</p>
                <p>"Your school is—you're the only one who has voidpacted as students. And with the bill…" His eyes narrow. "Everyone has their attention on Voxenfelle right now."</p>
                <p>"I… I cannot ask for your forgiveness, I know that."</p>
                <p>"But I am asking for a bit of your trust."</p>
                <p>Rowan straightens his posture. He faces you all directly as something sincere paints over his tear-streaked face. "I don't want to see people die." <i>Not anymore.</i></p>
                <p>"I... I can get it for you within the week, safely, but." Realisation dawns in him. He drops his face into hands again, a miserable sigh leaving his lips.</p>
                <p>"This will put a target on your backs. I can do... what I'm able, to delay information from reaching Yunge, for as long as possible. But."</p>
                <p>Rowan glances up, haggard. "He might still come after you all."</p>
            </div>
        </div>

        <div className='story-speech' title="You can literally ignore her sorry this isn't relevant.">
        <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"He is already after us. Your relative, Sullivan. What is their name? How long have you lived?"</p>
            </div>
        </div>

        <div className='story-speech npc' title="[NAME HERE BC I DONT KNOW YET]">
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"... I've lived for... well, my age." 40 years.</p>
                <p>"I don't... I'm not immortal or anything. They just--bring me back, from near death." He looks a little traumatized by it.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">SATELLA</div>
                <p>"…We will do our best, Rowan. The evidence will be in safe hands, don't worry."</p>
                <p>"Do you have people you can trust to protect you? If any signs that we negotiated with you goes out…Yunge might…" She can't help but think about his well-being.</p>
                <p>"Your family…do they care for you?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>Then, with a solemn smile, he shakes his head. "No, I don't think they do."</p>
                <p className='small'>"But I have... people, I can trust. At least one."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">SATELLA</div>
                <p></p>
                <p className='small'>"…May I know who that is? To reach out to them to know that you are safe." This is sincere. She is a medic afterall.</p>
                <p>"It's alright. Having a family that cares for you doesn't need to be by blood." I can be your family.</p>
                <p>"I'll let the professors know to be on high alert." She makes note to report to Vinca later right away.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p className='small'>"Um... Rudolph. Rudolph Hart. He... he works at the academy."</p>
                <p>"...Thank you. I don't think I've--gotten your name."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">SATELLA</div>
                <p>"Satella…Satella Curassavica. An aspiring doctor." She gives a firm nod to show she is here to help. "I'll be sure to reach out to him."</p>
                <p>"…Stay safe Rowan. Live on, okay?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Beatrix`}><img src={beatrix} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">BEATRIX</div>
                <p>"What does the name Cain mean to you?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Cain... um, oh--yes. The... the boy with a sword." Rowan recalls. "He works... for Yunge. He's an ex-convict. Yunge... pulled some strings, to get him out of there."</p>
                <p className='small'>"...He also tried to kill me."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Rider`}><img src={rider} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Rider</div>
                <p>"He pull him out cuz he's good at killing people or cuz he's easy to control?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"..The former."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"Do you know who a 'her' may be that Cain would refer to? One who would want Voidpact dead."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Pomme</div>
                <p>"Wait--" He hesitates, a frown crossing his face. There's an uncertainty in his gaze as if he doesn't know what to say for once.</p>
                <p>"Is there--when you were looking into Yunge, was there anything on his family?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Oh."</p>
                <p>Rowan's expression twists. Instead of fear, his face shows something akin to commiseration instead, turning to Pomme and TK.</p>
                <p>"…He was probably referring to Viktoriya." A nod, towards Pomme.</p>
                <p>"She's Yunge's subordinate… and his daughter."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"I see."</p>
                <p>She looks curiously to Pomme, brief. How did he know? </p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Pomme</div>
                <p>His breathing becomes shallow. "....That's not possible."</p>
                <p>"I've never seen--if she was working for him--" Pomme cuts himself off. <i>"How do you know?"</i></p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Crimson`}><img src={crimson} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Crimson</div>
                <p>She looks at Pomme.</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eden`}><img src={eden} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eden</div>
                <p>She eyes Pomme, curious.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Dingo`}><img src={dingo} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">DINGO</div>
                <p>"You know that guy's kid?!"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Eris`}><img src={eris} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">ERIS</div>
                <p>"Wait, you know her?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Pomme</div>
                <p>"--Not important," he says dismissively, making a point not to look at the others. His gaze remains fixed on Rowan.</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"Does she have an aura? Any weaknesses?"</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Beatrix`}><img src={beatrix} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">BEATRIX</div>
                <p>"How loyal would you say they are to him? To his vision?</p>
                <p>If one day he…" she draws an index horizontal over her pale neck, smiling. "… do you think they'd continue his work? Or would they behave like headless chicken?" </p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Cain is... I don't think he's very loyal. Yunge has him because he pays him well and lets him live an easy life. Viktoriya..." Rowan purses his lips.</p>
                <p>"She has an aura. I'm not sure what it is, but."</p>
                <p>"She's more loyal than Cain is." Then, a beat passes. His eyes look back to Pomme. "I've seen her with him, on many occassions."</p>
                <p>"...You knew her?" Something apologetic passes his face. "So you know about..."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Pomme</div>
                <p>"Know about what? <i>What?</i>" Pomme steps forward, barely resisting the urge to grab Rowan by the arms and shake him. "I lost contact with her years ago, but--"</p>
                <p>"--There's no way she's being loyal to him of her own free will." This is said more for the sake of those present than for Rowan. "She's not that kind of person."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Well... she might not be." Rowan sighs. "I don't--I don't think she <i>should</i>, knowing what he did to her."</p>
                <p>"A lot of people know the story. It's an open secret, almost." He starts, voice growing sadder by the second. "Yunge..."</p>
                <p>"A few years ago, Yunge forced his daughter to fight a voidwalker. It... it doesn't sound very bad just from that, what with him being a noble and all."</p>
                <p>"But,"</p>
                <p>"Viktoriya didn't have her aura yet. She almost died. <i>She would've.</i>"</p>
                <p>"She manifested an aura at the last second, which saved her. But..." Rowan sighs.</p>
                <p>"I believe she's been working for him ever since."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"How convenient. Are you certain it is an aura and not a pact?"</p>
                <p>She recalls story after story: a voidwalker came, and I gave to the void, <i>I had no choice</i>. It's all she's heard for days.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"Yunge would've killed her himself if she pacted."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"Mother killed by a voidpact?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>He shakes his head. "No, his family is alive."</p>
            </div>
        </div>
        
        <div className='story-speech'>
            <Link to={`/characters/Beatrix`}><img src={beatrix} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">BEATRIX</div>
                <p>She curls a strand of hair around her finger, thoughtful.</p>
                <p>"Why is it that he has such a hatred of voidpacts, then?"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>Rowan shakes his head again, apologetic. "That I... don't know. I'm sorry."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Pomme</div>
                <p>"Doesn't matter which it is--we have to save her," he says firmly, his hands clenching into fists until knuckles turn white.</p>
                <p>All the possible things that might have happened to her have always haunted him, but knowing it for certain now doesn't make it any easier. The feeling of failure settles in his gut. He shouldn't have left without her. He shouldn't have given up.</p>
                <p>"She was--" A pause. "We were friends." Hesitant. </p>
                <p>"And--if we can get her on our side, then we'll have more evidence to Yunge's crimes."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"How may we best contact you? We will refrain unless it is an emergency so as to not endanger the line."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"I can give you... my number, ah, but." He frantically scribbles something on a piece of paper. "You can also reach me from Rudolph, if you need to."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>"I am not going through your lover to reach you. That is a waste of time."</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>"He's not my---"</p>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Tomoya`}><img src={tomoya} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">TOMOYA</div>
                <p>"I will go through your lover. Worry not."</p>
            </div>
        </div>

        <div className='story-speech'>
            <Link to={`/characters/The%20Keeper`}><img src={tk} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">The Keeper</div>
                <p>She memorizes the number and then eats the paper.</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <p>Belatedly, after the questions have ceased, Rowan makes his way over to Eden. "Thank you for the... orange," he bows his head a little. "I can't give you much, but--"</p>
            </div>
        </div>

        <div className='story-speech npc'>
        <img src={rowan} className='story-avatar'
        style={{ border: '2px solid #ff9214', borderRadius: '50px' }}></img>
            <div className="story-speech-text">
                <div className="story-speech-name">Rowan S. Sullivan</div>
                <div className="story-with-image">
                    <p>A faint orange glow casts itself over his body. He hands something small over to Eden, nestled in both his hands.</p>
                    <img className="story-img-small spoiler" src="https://i.ibb.co/JqhnLGN/SPOILER-Tara-Treasures-Felt-wombat-toy-Mini-Zoo-57672-Photoroom.png"></img>
                </div>
                <br></br>
            </div>
        </div>

        <div className='story-speech'>
        <Link to={`/characters/Eden`}><img src={eden} className='story-avatar'></img></Link>
            <div className="story-speech-text">
                <div className="story-speech-name">Eden</div>
                <p>She blinks, surprised, taking it between both of her hands.</p>
                <p>An orange had been second nature for her—it's her aura, after all. Everyone can use a good fruit now and again, and it tastes extra sweet when you're already feeling bad.</p>
                <p>She hadn't expected anything in return. No one ever really gives her anything in return, because they don't have to. She's already always happy to sweat or bleed for others, and making flowers or fruit is much easier than that.</p>
                <p>So the tiny bear that's placed in her hands is a surprise. It spikes discomfort, brief, again—less because of the bear, and more because….</p>
                <p>(He had cried and sobbed and outright told them all his wish for death, and then turned around to give her something so tiny and soft. She wonders what he would be like, outside of politics. She wonders what he would be like without Yunge's fist around his heart.)</p>
                <p>(She thinks, guiltily, that maybe it's a good thing to remember there will always be more people who need help. Not just voidpacts.)</p>
                <p>"—Thanks," is all she ends up saying out loud, closing her hands around it. "…It's really cute. Uh, hey, if you ever need help with anything, feel free to send me a message, too. Even, uhhh…" It's still a little awkward trying to comfort a grown man, but she rallies. "Even if you just need another orange, or something.</p>
        </div></div>

        <p></p>
        </div>

        <hr />

        <div className="story-big">
            Epilogue
        </div>
        <div className='story-body'>
            <p>After some more talks with Sullivan, you eventually make your way back from the ministry. A number of you leave with small souvenirs in hand, including Sullivan's number, while others leave with something heavy gnawing at their hearts.</p>
            <p>Later in the week, a package will arrive at the academy's doorstep, containing a small and inconspicuous flash drive. Despite its size, it may very well decide the future of voidpacts… and the future of Astralena itself.</p>
            <p>With opportunity in hand, a chance seems to have opened up in your futures—but the fight isn't over yet. Trouble brews on the horizon: Yunge is coming for you.</p>
            <p>But although the air stays thick with fear, something akin to hope starts to bloom in Voxenfelle Academy.</p>
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
                <Link to={`/story/Candle Ceremony II`}>🠄 Previous</Link>
                <Link to={`/story/Two Rooks I`}>Next 🠆</Link>
            </div>
            </div>

    </div>
  );
}

export default AnAudience;
