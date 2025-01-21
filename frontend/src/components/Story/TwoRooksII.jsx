// ICONS
const pomme = 'https://i.ibb.co/v4m2QpF/vfx-pomme-picrew.png';
const taeyong = 'https://i.ibb.co/XVx1rvs/TAEYONG.png';
const black ='https://i.ibb.co/MSWT8Hw/vine-black-painted-swatch-300x300.jpg';
const rin = 'https://i.ibb.co/yFNT4Zy/Illustration33.webp';
const vika = 'https://i.ibb.co/KKdR9KM/image.png';
const vikapire = 'https://i.ibb.co/CmXCxK2/image.png';
const tera = 'https://img.notionusercontent.com/s3/prod-files-secure%2Fe99cfe6f-3fec-4c86-b805-3235000eb51a%2Fe964770d-173f-44ad-b756-68a4cbcdce86%2FZ_TERA.png/size/w=2000?exp=1737483683&sig=ee66aNpDSsKvtNDobUwblj3iQlFIPKuVBNVkAi6sPu0';


import '../Story/Story.css';
import { Link } from 'react-router-dom';

function TwoRooksII() {

  return (
    <div className="main-content">
      <a href="#start"><button id='scroll-to-start'>🠉</button></a>
      <a id="start"></a>

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

            <a id="fight"></a>
            <div className="story-big">
            <p>You stay behind to fight Viktoriya.</p>
            </div>
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
              <p className='alt-font'>Note: this was a bot-assisted encounter that required multiple people to play and cannot be fully recreated in recap.</p>

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

              <p>The Flash Drive team find themselves back outside.</p>
              <p>In front of you is Viktoriya, half-transformed into a vampiric, almost bestial form. Across from her are your peers, injured as they try to snap their friends back to their senses.</p>
              <p>But you've succeeded—and now, it's checkmate.</p>

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

              <div className='center big'>WIP logging. Attendance will be added once completed.</div>

            </div>

        <div className="story-end">
            <hr />
            <div className="story-footer">
                <Link to={`/story/Two Rooks I`}>🠄 Previous</Link>
                <Link to={`/story`}>Home 🠆</Link>
            </div>
            </div>

    </div>
  );
}

export default TwoRooksII;
