// ICONS
const halynn = 'https://i.ibb.co/HHMBvp1/d45624a2615fa8c067cb8be100ac0332.webp';
const pomme = 'https://i.ibb.co/v4m2QpF/vfx-pomme-picrew.png';
const jay = 'https://i.ibb.co/Mcb6x78/JAY.png';
const tera = 'https://i.ibb.co/4MqGT55/image.png';
const taeyong = 'https://i.ibb.co/XVx1rvs/TAEYONG.png';
const black ='https://i.ibb.co/MSWT8Hw/vine-black-painted-swatch-300x300.jpg';
const rin = 'https://i.ibb.co/yFNT4Zy/Illustration33.webp';
const vika = 'https://i.ibb.co/KKdR9KM/image.png';
const vikapire = 'https://i.ibb.co/CmXCxK2/image.png';
const danny = 'https://file.garden/ZfftGQ_uZRgXD6g5/Voxenfelle/IMG_9306.png';
const milky = 'https://i.ibb.co/XYQpcT6/MILKY.png';
const oma = 'https://i.ibb.co/mCkGm10/OMA.png';
const renzhi = 'https://i.ibb.co/GxwpWYd/RENZHI.png';
const satella = 'https://i.ibb.co/QnQr8YJ/SATELLA.png';
const yunge = 'https://i.ibb.co/bPPmbmS/image.png';
const cain = 'https://i.ibb.co/TbPWcmn/image.png';
const preston = 'https://i.ibb.co/HxHWzWP/atlas-picrew-1.webp';
const clover = 'https://i.ibb.co/Y01zHmf/clove-normal.png';
const hong = 'https://i.ibb.co/1rDC4hx/HONG.png';
const crimson = 'https://i.ibb.co/wQgpXYL/crimson4.jpg';
const tk = 'https://i.ibb.co/syKYjns/tkuni.png';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../../store/csrf';

function TwoRooksII() {
  const [hasAttended, setHasAttended] = useState(false);
  const story = 'Two Rooks II';
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
  

  const [fight, setFight] = useState(true);
  const chooseRoute = () => {
    setFight(!fight);
  }

  return (
    <div className="main-content">
      <a href="#start"><button id='scroll-to-start'>🠉</button></a>
      <a id="start" className='jumps'></a>

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

            </div>

            <a id='toggle' className='jumps'></a>
            <div className='route-btn-box'>
              <p className="route-text">
                {fight ? 'You stay behind to fight Viktoriya.': 'You leave to handle the flashdrive.'}
              </p>
              
              <button className='route-btn' onClick={chooseRoute}>
              {fight ? 'Switch to Flash Drive' : 'Switch to Fight'}
            </button></div>
            


            {fight ? ( 
            <div>

            <div className='story-body'>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>"....."</p>
                  <p>She watches as you split off into two teams, expression unchanging.</p>
                  <p>"...So be it."</p>
              </div>
              </div>

              <p>The clock ticks...</p>
              <p>Viktoriya has come to end it all.</p>
              <p>It's do or die. Make your stances now before time runs out.</p>
              <div className='alt-font'><p>Note: this was a bot-assisted encounter that required multiple people to play.</p>
              <p>It's your turn to stall for time and stay alive. Vika's aura poisons her opponents over time. Students had to divide between attacking and healing.</p></div>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>Viktoriya unsheathes her canesword, body glowing a deep purple.</p>
              </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Pomme</div>
                      <p>He tries to meet Viktoriya's gaze.</p>
                      <p>"Vika--you know it's me, don't you?" Desperate.</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>A hiss leaves her mouth. Viktoriya's hand twitches.</p>
                  <p>She does a combination of parrying with her cane and taking hits head on, shielding with her forearms. Recognition flashes momentarily at the sight of a familiar face. Her eyes narrow.</p>
                  <p>"--Pomme."</p>
                  <p>As half of you become poisoned, you notice the veins on her face turning a deep purple, matching her glow.</p>
                  <p><i>"Stand down."</i></p>

                  <p>You realize it as time goes on - with every new hit and stab and shot.</p>
                  <p>Viktoriya is growing stronger.</p>
                  <p>A low rumble emanates from her throat, followed by a hiss at Rilk's knife. It sounds almost animalistic.</p>
                  <p>The sliver of emotion stops at recognition. A cold focus takes over her once again as she swings her cane widely, slashing at anyone nearby.</p>
              </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Taeyong`}><img src={taeyong} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Taeyong</div>
                      <p>Thanks to Seraphina's help, their body clears of the poison enough that they no longer worry about charging forward, throwing their body into the heat of battle. It's a familiar feeling for them, but this time, it's against another human -- an Aura user at that.</p>
                      <p>Their brows furrow, and just before they reach her, they unsheathe the blade from their cane and swing at her body. It cuts sharp, directly at her torso. They let out a breathy laugh.</p>
                      <p>"...I hear we're awfully similar, you and I. Who do you think has it worse?"</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>Taeyong's question is met with a momentary glance. As the slice meets her torso, they feel how fortified her body is -- unlike a normal human body. Possibly her aura's doing, but the poison...</p>
                  <p>As some of you strike closer to her face, you notice a glint behind her lips. Were her canines always that prominent?</p>
                  <p>With sheer strength, she shakes the lot of you off, and goes in for another swing.</p>
              </div>
              </div>

              <p>Your attacks continue to hit.</p>
              <p>Slowly but surely, you weather Viktoriya down. After all, she can’t parry against all of you—even with her strength, it’s still one against a dozen.</p>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p><i>“Haah… Ha…”</i></p>
                  <p>A weary gaze finds Pomme’s. For a moment, her expression shifts. For a moment, some semblance of humanity returns to her rigid face.</p>
                  <p>For a moment, something seems to waver.</p>
              </div>
              </div>

              <div className='story-speech npc'>
              <img src={black} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">---</div>
                  <p className='alt-font'>Suddenly, the sound of static crackles.</p>
              </div>
              </div>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>Viktoriya glances towards her ear.</p>
                  <p>“Wh...What?”</p>
                  <p>“No, no, I can’t.”</p>
                  <p>“But I—”</p>
                  <p>Her voice raises in protest, but before anything else can be said—</p>
              </div>
              </div>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p><i>”Agh!”</i></p>
              </div>
              </div>

              <div className='story-speech npc'>
              <img src={vika} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>Viktoriya winces, hands shooting up to grab onto her head. Cold sweat beads at her forehead, dripping down her face.</p>
                  <p>A raw fear takes over her entire body.</p>
                  <p><i>”Haah… haah…”</i></p>
                  <p><i>“U—”</i></p>
                  <p>“Understood.”</p>
                  <p>A gloved hand drags itself down her face. Viktoriya takes her cane again, only to discard it somewhere to the side.</p>
                  <p>The air thrums. Viktoriya’s body glows stronger, as if she’d been holding back this entire time.</p>
              </div>
              </div>

              <div className='cg-box'>
              <div className="special-box center"><div className="music"><a href="https://discord.com/channels/1257270473541156956/1300518238572249098/1331235028159565835" target="_blank" rel="noopener noreferrer">♫</a>
              </div><p className='big alt-font'>Viktoriya Yunge stares back, transformed.</p>
              </div>
              <img className='story-cg' src="https://i.ibb.co/GC5fLx4/vika-beastmode.png"></img>
              </div>

              <p>Slowly, her body begins to change.</p>
              <p>Dark matter envelops her limbs. It starts from her feet, up to her legs, then to her torso and arms—her body turns sharper, lither, like an apex predator.</p>
              <p>Claws protrude from fingers. It continues up, up, upwards.</p>
              <p>And finally, it ends at her face.</p>
              <p>The atmosphere changes. You feel it in your bones.</p>
              <p>It’s do or die now.</p>

              <div className='story-speech npc'>
              <img src={vikapire} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>Vika suddenly stops.</p>
                  <p>"I've had enough."</p>
              </div>
              </div>

              <p>MAVIS, TAEYONG, ERIS, EDEN, HARVEY, OMA</p>
              <p>Suddenly, the numbness flares.</p>
              <p>You lose control of yourself.</p>

              <div className='story-speech npc'>
              <img src={vikapire} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Viktoriya Yunge</div>
                  <p>Vika suddenly stops.</p>
                  <p>A clawed hand grabs onto Danny’s polearm before throwing it to the side… but Kay’s strike is enough of a distraction for Crimson to finish what you started. The earpiece clatters to the ground below.</p>
                  <p><i>“Urgh—”</i></p>
                  <p>…But this close is dangerous. Viktoriya snarls, attempting to drag you closer to her, teeth ready to sink in for blood.</p>
              </div>
              </div>

              <p>Suddenly, there's a ping on your phone and the intercoms buzz with word from your teammates.</p>

              <div className='story-speech'>
              <img src={black} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">FLASH DRIVE TEAM</div>
                  <p className='alt-font'>"We uploaded everything onto Felle-pres-. O-jective co-pleted on our en-. How's everyone faring ov-r there?"</p>
              </div>
              </div>

              <div className='story-speech reverse'>
              <img src={black} className='story-avatar'></img>
                  <div className="story-speech-text text">
                      <div className="story-speech-name">ATTACK TEAM</div>
                      <p>"THIS BITCH KEEPS BITIN- PEOPLE AND BRAINWASHIN- THEM."</p>
                  </div>
              </div>

              <div className='story-speech'>
              <img src={black} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">FLASH DRIVE TEAM</div>
                  <p className='alt-font'>"What? We're c-ming over. Hold on."</p>
              </div>
              </div>

              </div>
              </div>
              
              ) : ( 
              <div>
                <div className='story-body'>
                <p>With half of the students staying behind to fend off Vika, your team is tasked to run to the school's news room and reveal the contents of the flash drive!</p>

                <p>Fueled with adrenaline, a flurry of thoughts run through your head as you race across the garden grass. <i>Are your classmates safe? Should you have stayed back to help them? And is the flash drive safe in this team's hands?</i> You're left to ponder these worries.</p>
                <p>These routes have been covered during the evacuation drill. Are you familiar with them? The news room should be just past these buildings.</p>
                <p><i>And what of the contents inside the drive? Can they really be trusted? Does this truly belong to Sullivan or is it a fake?</i></p>
                <p>You discuss this with your peers as you run.</p>
                <p>Finally, the news room is in sight! There's only one path forward now. Are you ready?</p>
                <p>Not many other students are present, given that it's the weekends, which means you're able to access a computer with fairly little fight.</p>
                <p>It's slow to boot up...</p>
                <p>Were the computers always this slow? You might be feeling antsy from all the waiting...</p>
                <p>Finally, a login screen shows up for someone to put in their student credentials. After that, the home screen appears! Time to check out the flash drive!</p>
                <p>Let's hope there aren't any viruses...</p>

                <p>You manage to bypass Sullivan’s protective measures! Finally, the evidence is laid out to you.</p>

                <p className='alt-font'>Note: this was a bot-assisted puzzle involving searching through Sullivan's encrypted flashdrive that has not been transferred to site yet. If you wish to play, do so in server.</p>

                <p>You manage to bypass Sullivan’s protective measures! Finally, the evidence is laid out to you.</p>
                <p>Your senior and the leader of Felle-Press, Halynn. stares back at you.</p>

                <div className='story-speech'>
                  <Link to={`/characters/Jay`}><img src={jay} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Jay</div>
                      <p>"We finally cracked all the bullshit riddles Sullivan encrypted his hard drive with. This thing has all of Yunge's dirt on it. What's the fastest way to circulate this?"</p>
                  </div>
              </div>

              <div className='story-speech npc'>
                <img src={halynn} className='story-avatar'/>
                <div className="story-speech-text">
                    <div className="story-speech-name">Halynn</div>
                    <p>“Ohhh… ohhh!!!” Her eyes light up immediately.</p>
                    <p>“I got this! Leave it to me!”</p>
                    <p>She runs over to the computer and takes a seat.</p>
                    <p>With fingers as fast as lightning, she starts to type up an article.</p>
                    <p>"Just a little more... just a little moreee.....!"</p>
                    <p>"Aaaand---"</p>
                    <p>Halynn slams the ENTER button, a grin spreading across her face.</p>
                    <p>A notification pops up on the screen.</p>
                    <p className='alt-font'>UPLOAD COMPLETE</p>
                </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Jay`}><img src={jay} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Jay</div>
                      <p>"LET'S <i>GO.</i>" 🔥 🔥 🔥 🔥</p>
                      <p>He picks Halynn up and twirls her around like a trophy!!! 🔥</p>
                  </div>
              </div>

              <div className='story-speech npc'>
                <img src={halynn} className='story-avatar'/>
                <div className="story-speech-text">
                    <div className="story-speech-name">Halynn</div>
                    <p>She's twirled!!!</p>
                </div>
              </div>

              <p>With the article uploaded, you breathe easy. It's time to go back to your friends!</p>
              <p>Maybe you should check in on them while you make your way there.</p>

              <p>Suddenly, there's a ping on your phone and the intercoms buzz with word from your teammates.</p>

              <div className='story-speech reverse'>
              <img src={black} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">FLASH DRIVE TEAM</div>
                  <p className='alt-font'>"We uploaded everything onto Felle-pres-. O-jective co-pleted on our en-. How's everyone faring ov-r there?"</p>
              </div>
              </div>

              <div className='story-speech'>
              <img src={black} className='story-avatar'></img>
                  <div className="story-speech-text text">
                      <div className="story-speech-name">ATTACK TEAM</div>
                      <p>"THIS BITCH KEEPS BITIN- PEOPLE AND BRAINWASHIN- THEM."</p>
                  </div>
              </div>

              <div className='story-speech reverse'>
              <img src={black} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">FLASH DRIVE TEAM</div>
                  <p className='alt-font'>"What? We're c-ming over. Hold on."</p>
              </div>
              </div>

                <p>The Flash Drive team find themselves back outside.</p>
                <p>In front of you is Viktoriya, half-transformed into a vampiric, almost bestial form. Across from her are your peers, injured as they try to snap their friends back to their senses.</p>
                
                </div>
                </div> 
              )}

              

              <div className='story-body'>
              <a href="#toggle"><p className='alt-font center'><b>🠉 JUMP BACK TO ROUTE TOGGLE?</b></p></a>
              </div>

              <br></br>

              <div className="story-big">
                <div>But you've succeeded—and now, it's checkmate.</div>
              </div>
              <div className='story-body'>
              <p>Suddenly, Tera's voice crackles through the intercoms.</p>

              <div className='story-speech npc'>
              <img src={tera} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">Tera</div>
                  <p className='alt-font'>"Reporting. Yunge's crimes have been exposed, and the article has gone viral online.”</p>
                  <p className='alt-font'>“It’s over. We did it.”</p>
                  <p>Then, a brief pause follows. With it, Tera’s voice turns a touch softer.</p>
                  <p className='alt-font'>“Pomme, now’s the time.”</p>
                  <p className='alt-font'>“Maybe you can still reach her.”</p>
              </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Milky`}><img src={milky} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Milky</div>
                      <p>She runs as fast as her DEX stat allows, hands hovering over her hammer, ready to attack. Always ready. Perhaps her talents had been a little misplaced with the flashdrive team, but she would've been ready to defend them. Revealing the truth is paramount, after all, for the lives of many of her fellow classmates.</p>
                      <p>Milky doesn't pretend like she knows most, or really, any of them. But if there's one thing that had been instilled in her mind from an early age, it's to fight against corruption. She isn't quite sure if that's what they had meant, but if not pushing back against a literal corrupt politician, then what is?</p>
                      <p>Milky doesn't trust Voxenfelle, or their hunter society just yet. But she trusts Yunge even less. Who could stand behind someone who chooses such violence without a second thought? There's no sense in that ruthlessness.</p>
                      <p>She bursts outside with her fellow students, her chest heaving as she beholds the battlefield. So often she had chosen violence to solve her problems, and this once, she had avoided it. Milky will reckon with that weird feeling settling in her stomach later. She catches her breath. Exhale. Inhale.</p>
                      <p>"The paper trail is public!!!" She tries projecting her voice, beyond the violence. "It's over! Stand down Yunge!"</p>
                  </div>
              </div>

              <p>Milky's voice drags Viktoriya out of her focus. Rilk's knife finds purchase and grazes her shoulder, causing her to step away.</p>
              <p>Immediately, all controlled students come back to their senses.</p>

              <div className='story-speech'>
                  <Link to={`/characters/Danny`}><img src={danny} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Danny</div>
                      <p>Daniel stops manhandling Oma the moment the others come in, shoving him back. He smirks. "Don't make me wrangle you again."</p>
                      <p>Danny's pulling Yunge's earpiece out of his pocket and briefly pressing it against his ear, listening.</p>
                      <p>Milky doesn't trust Voxenfelle, or their hunter society just yet. But she trusts Yunge even less. Who could stand behind someone who chooses such violence without a second thought? There's no sense in that ruthlessness.</p>
                      <p>Is Yunge still on the other end? How functional is the earpiece right now?</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={black} 
                  className='story-avatar'/>
              <div className="story-speech-text">
                  <div className="story-speech-name">You hear a voice, garbled by static.</div>
                  <p className='alt-font'>"Vi--ya--Vik-!"</p>
              </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Oma</div>
                      <p>"Casanova." He squints. Feeling through his injuries, what doesn't add up, the blank in between memories. "What did you do-?!"</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Danny`}><img src={danny} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Danny</div>
                      <p>Cupping his hand around the earpiece, muffling the mic. "I didn't do anything dude. She did." Pointing at Vika. "I just held you back so you didn't shoot at the whole room."</p>
                      <p>He now steps away, attention shifting over to one of the new additions to the party. "Renzhi! Catch!" Daniel tosses the earpiece over to him.</p>
                      <p>"I'd give it to Mr. Tera, but you're the next best thing. Yunge's on the other line." Have anything to say?</p>
                  </div>
              </div>
              
              <div className='story-speech'>
                  <Link to={`/characters/Renzhi`}><img src={renzhi} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Renzhi</div>
                      <p>Renzhi tenses, eyes sweeping the battleground— only looks for one person, really, the tiles of his necklace rearranging itself, revealing a small button underneath his hands — but he sees it and lets go, allowing the necklace to slide back together, a metallic heartbeat encased in iron as he casts his glance elsewhere, looking for other places to help.</p>
                      <p>He swivels the cannon with the electric net towards Viktoriya but does not press the button yet, conflicted. Hurting her now is like pushing a thumb against a bruise; no real reason other than to hurt.</p>
                      <p>His shoulders sag, and the cannon hits the ground with a heavy thud, dust buffeting around its structure.</p>
                      <p>Renzhi catches the earpiece and looks down at it. What can he even do — what can he even say — his fingertips feel cold.</p>
                      <p>"Thanks." Stiff.</p>
                      <p>He tries to fix the signal of the earpiece to hear the other line better, not speaking as he lifts it to his ear.</p>
                  </div>
              </div>

                <div className='story-speech npc'>
                <img src={yunge} className='story-avatar'></img>
                    <div className="story-speech-text">
                        <div className="story-speech-name">NIKOLA YUNGE</div>
                        <p className='alt-font'>"Viktoriya, answer me! Viktoriya--!"</p>
                    </div>
                </div>

                <div className='story-speech'>
                  <Link to={`/characters/Renzhi`}><img src={renzhi} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Renzhi</div>
                      <p>His expression is cold as he hears who exactly is on the other end.</p>
                      <p>Considers being cruel — telling him they broke her neck. Why stop at a bruise? Why not open a wound?</p>
                      <p>Do you want to know how it feels, Yunge? To be <i>afraid?</i></p>
                      <p>His fingers type on his phone one-handed, having connected the earpiece to a remote device, allowing Tera to triangulate on Yunge's location while the signal was still active.</p>
                      <p>"She is currently incapacitated. You are speaking to a student of Voxenfelle Academy.</p>
                      <p>Your plan has failed. Your future plans <i>will</i> fail. I suggest turning yourself in to be granted leniency in court proceedings." He tries to keep his voice calm, and calm it is — logical, proper, and conversational. The voice of objective truth.</p>
                  </div>
              </div>
              
              <div className='story-speech npc'>
                <img src={yunge} className='story-avatar'></img>
                    <div className="story-speech-text">
                        <div className="story-speech-name">NIKOLA YUNGE</div>
                        <p>Brief silence, followed by the sound of something breaking from the other line. Distantly, you hear Nikola Yunge shouting.</p>
                        <p className='alt-font'><i><b>"You'll pay for this."</b></i></p>
                        <p>The line cuts off.</p>
                    </div>
                </div>

                <div className='story-speech'>
                  <Link to={`/characters/Taeyong`}><img src={taeyong} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Taeyong</div>
                      <p>There are too many happy reunions, people running off to find their friends and make sure they're okay, all the while some others are going out of their way to yell <i>encouragements</i> at Vika, Pomme too. They click their tongue, still looking at the other.</p>
                      <p>Moving past the embarrassment they just felt — which Pomme can feel too — they finally gather themself enough to lean against their blade, forcing themself up. They push through the aches and pain — a brief reminder of the years long injuries while the new ones sear into their body — to peel themself off of Pomme.</p>
                      <p>"...Idiot," they grumble, and extend their hand out for him, intent on helping him up too. "...Go save your stupid friend."</p>
                      <p>They'll get him back for that shot later.</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Pomme</div>
                      <p>His will travels down the tether connecting them like electricity. I'm not leaving you alone. <i>Don't give up.</i></p>
                      <p>The blade sinks into the ground next to his head and he grins, bright and sharp. "You're not getting rid of me that easily." Pomme takes their hand and rises to his feet, hesitating at the threshold. An uninvited guest refusing to make their exit. <i>We could be friends, too.</i></p>
                      <p>And then he turns away, eyes searching for Viktoriya until they finally catch her solitary figure, standing amidst the chaos.</p>
                      <p>She's changed so much over the years. To the point she's almost unrecognizable. Her kind smile replaced with sharp, animalistic canines meant to tear flesh. Soft eyes replaced with a dead gaze. A scar across her face to always remind her of what's been done. But she's not the only one. They've both lost pieces of themselves that can never be replaced.</p>
                      <p>There's an emptiness in them that can never be filled. Grief, loss, absence where there should have been a parent. The pain is so much at times it's unbearable. But the pain is a reminder that they're still alive. That they have a beating heart that makes them human. And what is being human but to want?</p>
                      <p><i>If you're alive, then live. If your hands are empty than take. Take and be selfish and live don't bow your head to what fate gives you.</i></p>
                      <p>"Vika." <i>I can wait for you. I've been waiting. But if I could choose--</i> "I miss you." His voice wavers.</p>
                      <p>"And that's <i>really</i> fucking embarrassing to say so--just--don't make me say it again and come here before I make you! You're going to make your mom cry again if you keep on acting like this!" Childish, earnest, warm with the lingering memories of summers long gone.</p>
                      <p>He holds his hand out towards her, and something gleams in his palm: two worn pendants.</p>
                  </div>
              </div>

                            <div className='story-speech'>
                  <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Satella</div>
                      <p>She lowers her weapon slowly. Reaching out to heal the enemy. To remove the turmoil that battle has given to her, to say truce, to say that it is okay to stop fighting now. A hand that dares to remove everything they worked hard for. It's because Satella believed Vika never deserved to experience any of this.</p>
                      <p>"You are not alone, anymore...Vika."</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Oma</div>
                      <p>It takes him a few seconds before piecing two and two together— between the glaring bite mark and its dull ache to the gap in memory and the number of missing bullets he doesn't remember using. He flares, something near-indescribable that's not entirely anger nor disgust; maybe something close to madness. (From not knowing, when he's supposed to know everything about <i>himself</i>. From not knowing what he just did.)</p>
                      <p>He grabs Daniel, almost frantic. "What just happened-?! Was it- Did she control people? Did she control <i>me</i>?" It's a frenzied look, blinked away only when the the earpiece in his hand crackles, and eventually tossed towards Renzhi. And then he notices the rest flocking in. But it's just a glance, before he turns back to Viktoriya, and just as he grabbed Daniel, he shoved him back just as quickly.</p>
                      <p>His ears are ringing. The cacophony of voices are near deafening, but he hears his own quickened breaths as he loads another bullet in his gun; sweat on metal, shaky blinks behind fringes, and a fright that refuses to let this end without proper retribution. Satella be damned for healing the enemy. His line of sight sets on Viktoriya still, while everyone else is distracted, because there are also others still trying to fight and claw their way at her.</p>
                      <p>It's not done yet. Past this, past today, it's not done yet.</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Danny`}><img src={danny} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Danny</div>
                      <p>"Yeah." He didn't stop listening to Oma. He never stopped. He simply had a few priorities to get to.</p>
                      <p>Daniel turns around. (Forgive me?)</p>
                      <p>"But it's not your fault." He's walking towards the middle of Oma's crosshair. "Not your fault unless you make it your burden. Hold your fire."</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Oma</div>
                      <p>"I know it's not my fault." It comes out spitting, and he scowls at Daniel for trying to interfere. "I'm not stupid. But you are! Get out of the fucking way! We're still in danger. As long as she's still alive—"</p>
                      <p>He tries to kick Daniel away.</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Danny`}><img src={danny} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Danny</div>
                      <p>"Most of us were willing to stall her, not get blood on our hands. She was under the influence of whatever got into your head." The kicks do little as Daniel applies pressure against Oma.</p>
                      <p>"What? As long as she's still alive she'll kill... you?" He begins to press his weapon against Oma's gun, grip firm. "Kill us? Or are you afraid that it would happen to someone else?" His lips curl into a smile, wry.
                      </p>
                      <p>It very well could've been your hands on her neck. "You could have done the same thing if we didn't get you back to your senses."</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Oma</div>
                      <p>"EXACTLY!" He kicks Danny again, harder this time. "She can control any of us and make us kill each other! Is that so difficult to understand? Do you want her to?! Why are you even on her side?" And before he Danny can intercept him again, he fires the shot. No hesitation this time.</p>
                  </div>
              </div>

              <p>Oma pulls the trigger.</p>
              <p>You see it whizzing through the air, aimed straight towards Viktoriya. It’s a sure shot, one that won’t miss.</p>
              <p>…Except it never lands, passing straight through her body.</p>
              <p>Then, a silhouette appears in the corner of your vision, glowing—and—smiling.</p>
              <p>A disembodied voice echoes in your mind, and gently, it speaks: “Not her.”</p>
              <p>When you blink, the figure vanishes.</p>

              <div className='story-speech'>
                  <Link to={`/characters/Oma`}><img src={oma} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Oma</div>
                      <p>WHAT!</p>
                  </div>
              </div>

              <div className='story-speech'>
                  <Link to={`/characters/Satella`}><img src={satella} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Satella</div>
                      <p>She lowers her weapon slowly. Reaching out to heal the enemy. To remove the turmoil that battle has given to her, to say truce, to say that it is okay to stop fighting now. A hand that dares to remove everything they worked hard for. It's because Satella believed Vika never deserved to experience any of this.</p>
                      <p>"You are not alone, anymore...Vika."</p>
                  </div>
              </div>
              
              <p>Your words ring true, echoing through the cold wintry air. It reaches Viktoriya, and you can tell that it did—because she falters again, allowing an attack from Kay to land on her other arm.</p>
              <p>She jumps back a few steps, her other hand pressing against the wound to stop the bleeding. Sweat beads down her worn face. She’s tired.</p>
              <p>But then Satella heals her, and Viktoriya’s expression twists.</p>
              <p>Disbelief contorts; shatters and crumbles before it rebuilds itself, taking shape of something else entirely.</p>
              <p>Disbelief contorts, and what’s left behind is a fragile—and impeccably small—piece of hope.</p>

              
              <div className='story-speech npc'>
              <img src={vikapire} 
                  className='story-avatar'
                  style={{ border: '2px solid #5e21a3', borderRadius: '50px'}}/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Viktoriya Yunge</div>
                      <p>“I…”</p>
                      <p>The dark matter recedes from her head. You see it clearly now: her face, a wounded soldier, looking at you for mercy.</p>
                      <p>“I—I can’t.”</p>
                      <p>Her voice, cold and frigid as it were, starts to tremble.</p>
                      <p>“My father, he—”</p>
                      <p>“He’ll—”</p>
              </div></div>

              <p>These hands that have never owned anything in their life. Always the property of another, at the behest of someone else, from birth until her—eventual—death.</p>
              <p>But maybe that’s wrong.</p>
              <p>Viktoriya’s eyes widen, met with the sight of something long lost to the sands of passing time—something she was able to call her own, worn and weathered as it was.</p>
              <p>Her gaze finds Pomme’s hand. Her own twitches.</p>
              <p>Would things change if she were to take it? Could we go back to the past, to how things were before?</p>
              <p>Not wholly, no, but maybe—just maybe—it’ll be enough to matter.</p>

              <div className='story-speech'>
                  <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Pomme</div>
                      <p>His hand remains outstretched, waiting, hoping.</p>
                      <p>"Whatever he does, we'll stop him." <i>You're not alone, anymore.</i></p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={vikapire} 
              className='story-avatar'
              style={{ border: '2px solid #9080a1', borderRadius: '50px'}}/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Viktoriya Yunge</div>
                      <p>Viktoriya’s aura dissipates. Her purple glow pales to nothing as black matter disappears completely.</p>
                      <p>Now, it’s just Viktoriya Yunge.</p>
                      <p>No,</p>
              </div></div>

              
              <div className='story-speech npc'>
                  <img src={vika} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Vika</div>
                      <p>Now, it’s just Vika.</p>
              </div></div>

              <p>She raises her hand. Hesitant, as it reaches for Pomme’s.</p>
              <p>Towards a friend, towards a chance, towards a future—</p>

              <p className='big'><i><b>—BANG!</b></i></p>

              <p>Suddenly, a noise rings through the air.</p>

              <div className='story-speech npc'>
                  <img src={vika} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Vika</div>
                      <p>“—”</p>
                      <p>Viktoriya glances downwards. Red starts to bloom from her abdomen, blood seeping through her clothes as it spreads wider and wider.</p>
                      <p>“Po—”</p>
                      <p>“Pomme—”</p>
              </div></div>

              <p>She collapses to the ground. From behind her, a familiar laugh echoes mockingly.</p>
              <p>Cain.</p>

              <div className='story-speech npc'>
              <img src={cain} className='story-avatar'></img>
              <div className="story-speech-text">
                  <div className="story-speech-name">CAIN</div>
                  <p>“Whew, was starting to get real sappy in here, huh?”</p>
                  <p>He barks out a laugh. In his hand is a gun, freshly fired as smoke wafts from the tip.</p>
                  <p>“You know, Vika, your daddy was always worried about you. You and that <i>squishy heart</i> of yours.”</p>
                  <p>“Good thing he had me keep an eye on you, huh?”</p>
              </div>
              </div>

              <div className='story-speech npc'>
                  <img src={vika} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Vika</div>
                      <p>“Ca–Cain…”</p>
                      <p>Viktoriya writhes on the ground, clutching her abdomen in pain.</p>
              </div></div>

              <div className='story-speech npc'>
              <img src={cain} className='story-avatar'></img>
              <div className="story-speech-text">
                  <div className="story-speech-name">CAIN</div>
                  <p>“Hm? What, acting surprised? Come on, you should’ve at least seen this coming! Is that pretty little head of yours just there for show or what?”</p>
                  <p>“You know, everyone thinks I’m the wild card here, but it’s definitely you, isn’t it? I mean, you don’t see me buttering up with dead people walking.” He scoffs.</p>
                  <p>“But anyway!”</p>
                  <p>Cain lifts his gun. This time he aims it at Viktoriya’s head.</p>
                  <p>“Been fun and all, Vika, but orders are orders. No hard feelings, alright?”</p>
                  <p>He cocks the gun, expression cracking into a grin.</p>
                  <p>“I’ll tell your daddy you said hi.”</p>
              </div>
              </div>

              <p>It plays out in slow motion.</p>
              <p>Cain’s finger moves.</p>
              <p>He starts to pull the trigger, and—</p>


              <div className='story-speech'>
                  <Link to={`/characters/Kay`}><img src={satella} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Satella</div>
                      <p>Satella's movements are dissimilar to Rilk's and his own, and the distinction takes only a fraction of a second to register: foe. The next blow veers past Vika, headed directly for Satella --</p>
                      <p>Not to simply interrupt, but to <i>wound</i>.</p>
                      <p>No time to switch the side of his weapon or cut the force behind the strike. Vika has not surrendered, still stands amongst them with her fangs bared, <i>hostile</i>-- so everything still on the line, and he doesn't deal in half-measures. </p>
                  </div>
              </div>
              
              <div className='story-speech npc'>
              <img src={black} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">???</div>
                      <p className='big'>“HALT!”</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={cain} className='story-avatar'></img>
              <div className="story-speech-text">
                  <div className="story-speech-name">CAIN</div>
                  <p>“?!”</p>
              </div>
              </div>

              <p>Suddenly, you hear the sound of footsteps clamouring towards the gate. Five, ten, twenty, maybe even thirty—the sounds are never ending.</p>
              <p>Then, a familiar face falls into view.</p>
              <p>Blond hair glistens under the light as an all too familiar senior flashes you a million-dollar smile.</p>

              <div className='story-speech npc'>
              <img src={preston} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">PRESTON</div>
                      <p className='large'>“Preston Reed Williams has come to your rescue!”</p>
                  </div>
              </div>

              <p>A barrage of large men in suits surround Cain as dark sunglasses obscure their faces.</p>

              <div className='story-speech npc'>
              <img src={preston} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">PRESTON</div>
                      <p className='big'>“Cain Kastana, you are hereby under arrest!”</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={clover} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">CLOVER</div>
                      <p>“Sir, only police are allowed to say that.” A green haired senior dressed similarly to a maid whispers from Preston’s side.</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={preston} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">PRESTON</div>
                      <p className='big'>“Oh, is that so? My apologies.”</p>
                      <p>Preston coughs and tries again.</p>
                      <p className='big'>“Cain Kastana, we are hereby bringing you to the authorities who will then put you under arrest!”</p>
                      <p>“Heh! Take that!”</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={clover} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">CLOVER</div>
                      <p>"Masterful work, sir!"</p>
                  </div>
              </div>

              <div className='story-speech npc'>
              <img src={preston} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">PRESTON</div>
                      <p>"Greetings, my lovely juniors! I hope this criminal has not given you all too much grief?" He turns to greet you all with a smile.</p>
                  </div>
              </div>

              <div className='story-speech npc'>
                  <img src={vika} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Vika</div>
                      <p>She winces from the pain, face even paler now from all the blood loss -- but the healing helps.</p>
                      <p>It's hard for her to form words, but her eyes glance over to the student healers, before finally ending on Pomme. Then, she closes her eyes, and nods weakly---gratitude, towards all of you.</p>
                      <p className='small'>"Thank--thank you."</p>
              </div></div>

              <div className='story-speech'>
              <Link to={`/characters/Kay`}><img src={hong} 
                      className='story-avatar'/></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Hong</div>
                      <p>Blood pounds at her temple, floods Hong's mind with doubt. The split second glimpses of her classmates on the ground, in the air, hands outstretched, weapons bared. <i>I can't hesitate</i>. Just as Hong is squeezing the trigger ---</p>
                      <p>Cain's weapon flies, and the area floods with figures.</p>
                      <p>"..." Hong keeps her weapon pointed at Cain, but cautiously walks toward Vika with the rest of their classmates. Eventually, he stows her weapon.</p>
                      <p>He should help round up the other injured. Who else is hurt and still needs help? Are Rin and Chou-chou near?</p>
              </div></div>

              <p>Rin and Chou-chou are nearby! Chou-chou haggardly tries to get back on her feet, shaking the still-unconscious Rin awake.</p>

              <div className='story-speech'>
              <Link to={`/characters/Crimson`}><img src={crimson} 
                      className='story-avatar'/></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Crimson</div>
                      <p>She’s barrelling towards Cain like an unstoppable force to punch him in the face— ain’t no way you’re going to jail unscathed!!!!</p>
              </div></div>

              <p>The punch lands! Cain crumples to the floor with an "oof".</p>

              <div className='story-speech'>
              <Link to={`/characters/Crimson`}><img src={crimson} 
                      className='story-avatar'/></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Crimson</div>
                      <p>AND SHE PUNCHES HIM AGAIN AND KICKS HIM AND KICKS HIM AGA</p>
                      <p>“THIS IS FOR WAR—“ KICK. “AND FOR SHOOTING VIKA IN OUR SHOUNEN MOMENT.” KICK. “AND THIS ONE FOR BEING A BITCH—“ KICK.</p>
                      <p>“HE SHOULD DIE! NOBODY WOULD MISS HIM!” To TK.</p>
              </div></div>

              <div className='story-speech'>
              <Link to={`/characters/The Keeper`}><img src={tk} 
                      className='story-avatar'/></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">The Keeper</div>
                      <p>She waits on standby near Crimson, ready to cage Cain should he make a move to escape again.</p>
                      <p>"Do not kill him, Crimson."</p>
              </div></div>

              <div className='story-speech'>
              <Link to={`/characters/Crimson`}><img src={crimson} 
                      className='story-avatar'/></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Crimson</div>
                      <p>“HE SHOULD DIE! NOBODY WOULD MISS HIM!” To TK.</p>
              </div></div>

              <div className='story-speech'>
              <Link to={`/characters/The Keeper`}><img src={tk} 
                      className='story-avatar'/></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">The Keeper</div>
                      <p>"I would miss him." Decisive. "So do not kill him."</p>
              </div></div>

              <div className='story-speech npc'>
              <img src={preston} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">PRESTON</div>
                      <p>"My word!"</p>
                      <p>"Juniors, please do not kill the un-good man. We must bring him to the authorities in a live state."</p>
                  </div>
              </div>

              <div className='story-speech npc' title="amen">
              <img src={cain} className='story-avatar'></img>
              <div className="story-speech-text">
                  <div className="story-speech-name">CAIN</div>
                  <p>Eventually, Cain passes out.</p>
              </div>
              </div>

              <div className='story-speech npc'>
              <img src={preston} className='story-avatar'></img>
                  <div className="story-speech-text">
                      <div className="story-speech-name">PRESTON</div>
                      <p>"Well, I am glad that you're all alive and well! Professor Vinca received your voice message, but he was much too far to reach the academy in time, so he called me—yours truly—to help.”</p>
                      <p>“Oh, Halynn also texted me about the situation. Your teamwork is astounding! Excellent work, all of you!"</p>
                  </div>
              </div>
              
              <div className='story-speech npc'>
                  <img src={vika} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Vika</div>
                      <p>Vika's mouth opens slightly, as if she's about to say something--but it quickly closes. Her eyes search Pomme's face in all its familiarity/unfamiliarity.</p>
                      <p><i>"Pomme."</i> She breathes, eyebrows knitting together. <i>"You're back."</i></p>
                      <p>She doesn't tear her gaze away, not this time.</p>
              </div></div>

              <div className='story-speech'>
                  <Link to={`/characters/Pomme`}><img src={pomme} className='story-avatar'></img></Link>
                  <div className="story-speech-text">
                      <div className="story-speech-name">Pomme</div>
                      <p>He smiles, simple, content. "I'm back. Sorry it took me so long."</p>
                      <p>Pomme gazes at her, different and the same all at once. See? <i>You're still you.</i></p>
                  </div>
              </div>

              <p>Suddenly, from the corner of your vision, you notice it.</p>
              <p>Snow, gently falling through the air.</p>

            </div>

            <hr />

          <div className="story-big">
            Epilogue
          </div>
          <div className='story-body'>
            <p>As snow comes down around Voxenfelle Academy, a vague sense of relief soon follows suit.</p>
            <p>Tera’s words rang true—Nikola Yunge’s expose went viral, causing waves all across Astralena. A warrant is put out that very same day, and it’s only a matter of time until the authorities put him behind bars. Preston’s bodyguards carry Cain away to the police, and you sense that they’ll both be in jail for a very, very long time.</p>
            <p>Rowan S. Sullivan returns home, but not without thanking every single one of you first. There’s a promise, somewhere, that he’ll do better from now on; that he’ll do everything in his power to ensure the safety of all voidpacts going forward. You decide to keep his word, hoping that maybe—just maybe—he'll be able to make good on it.</p>
            <p>Though it’s only the beginning, you can’t help but feel that a brighter future awaits—one where you can all coexist in peace. As friends, as equals, and most importantly, as people.</p>
            <p>Curtains eventually close on today’s encounter. Cuts heal, bruises disappear, but the memories made today—and the bonds strengthened—will forever remain.</p>
            <p>Tonight, snow falls peacefully over Voxenfelle Academy.</p>
          </div>

          <hr />

          <div className='cutscene'>
          <div className="story-big">SOMEWHERE, SOMEPLACE...</div>
          <div className='story-body'>
            <p>A lone pair of footsteps echo inside a dark room.</p>
            <p>“It looks like Yunge has failed. Unfortunate, isn’t it?”</p>
            <p>A figure walks forward, approaching a large, glowing tube. Liquid flows inside, with bubbles forming and disappearing every so often.</p>

            <div className='story-speech npc'>
                  <img src={black} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">???</div>
                      <p>“It looks like Yunge has failed. Unfortunate, isn’t it?”</p>
            </div></div>
            <p>A figure walks forward, approaching a large, glowing tube. Liquid flows inside, with bubbles forming and disappearing every so often.</p>

            <div className='story-speech npc'>
                  <img src={black} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">???</div>
                      <p>“I suppose we can do without him… after all, that’s what backup plans are for, aren’t they?”</p>
            </div></div>

            <p>Inside, floating gently in the liquid, is a person; hooked to a number of tubes, quietly breathing through a mask.</p>

            <div className='story-speech npc'>
                  <img src={black} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">???</div>
                      <p>“Bide your time, my child. Soon, you’ll step into the world once again, and we will finally take what’s rightfully ours.”</p>
            </div></div>

            <p>A hand reaches out, gently caressing the glass.</p>

            <div className='story-speech npc'>
                  <img src={black} 
                      className='story-avatar'/>
                  <div className="story-speech-text">
                      <div className="story-speech-name">???</div>
                      <p>"So rest your eyes for a while longer,"</p>
                      <p className='big'>"—Arias."</p>
            </div></div>
            
          </div>
          </div>

        <div className="story-end">
        <div className='huge center alt-font cg-box'><b>DEFENSE MINISTRY ARC: END</b></div>
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
                <Link to={`/story/Two Rooks I`}>🠄 Previous</Link>
                <Link to={`/story`}>Home 🠆</Link>
            </div>
            </div>

    </div>
  );
}

export default TwoRooksII;
