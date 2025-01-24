// ICONS
const vinca = 'https://i.ibb.co/RYW2TGr/Z-VINCA.webp';
const rin = 'https://i.ibb.co/yFNT4Zy/Illustration33.webp';
const arias ='https://i.ibb.co/DwPSFNL/ZZ-ARIAS.webp';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Story/Story.css';
import { Link } from 'react-router-dom';
import { csrfFetch } from '../../../store/csrf';

function SeasonI() {

    const [hasAttended, setHasAttended] = useState(false);
    const story = 'Season I Summary';
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
    <div>
    <div className="main-content">
        <a href="#start"><button id='scroll-to-start'>🠉</button></a>
        <a id="start"></a>
        <div className='story-body'>
          <p style={{fontSize: '50px', width: '100%', textAlign: 'center', fontFamily: "'B612 Mono', monospace"}}><b>SEASON I SUMMARY</b></p>
        </div>
        <div className="story-big">
            <div>SOULBONDING EXERCISE</div>
        </div>
        <div className='story-body'>
          <p>As the end of the school year drew close, all students began preparing for the upcoming finals before the freedom of summer break. For the current first years, Professor Eden Vinca announced a change to the traditional written exam for his Applied Magics class: a trial Soulbonding activity.</p>
          <p>For a week, his first-year students were sorted into three different squads and tasked with the assignment to find a temporary Soulbond partner to compete with in the 137th Felle-Festival tournament. They were barred from choosing someone on the same team, and had to turn to opposing squads to find a suitable partner within the week.</p>
          <p>The greatest challenge came with anonymity, as students had to leave their identities at the door and communicate with the other teams without knowing who exactly the other person was.</p>
        </div>

        <hr />

        <div className="story-big">
            <div>END OF YEAR PARTY</div>
        </div>
        <div className='story-body'>
          <p>After the week of anonymous correspondence concluded, all students prepared for the in-person meetup - in the form of a ball - to finally see their chosen partner, and any other friends or enemies made along the way, face-to-face.</p>
          
          <div className='cutscene'>
          <div className='story-body'>  
          <p><b>🥂 Invitation</b></p>
            <p>Professor Vinca has finally shared details regarding the weekend meetup. To celebrate the end of the semester, he's decided to be festive and throw a school ball for the first years!</p>
            <p>The ball will be held in the evening, at the school's Millennial Gardens Hall. The dress code is, of course, formalwear. Make sure to have your soulbond vows ready and come wearing your best suit/dress/etc.</p>
            <p>And remember, <u>NO EXPLOSIONS</u>!!</p>
          </div>
          </div>

          <p>More importantly, it was where students had the opportunity to officially Soulbond during a ceremony watched over by Professor Vinca. Those who could not find a partner in time were randomly assigned one that night.</p>

          <div className='cutscene'>
          <div className='story-body'>  
          <p><b>✨ SOULBONDING CEREMONY</b></p>
            <p>You step into the ceremony room with your would-be pair...</p>
            <p>The room is small. It seems to only be able to comfortably fit around five people at most. The lights are dim, with most of it illuminating an open circular space in the centre. Despite being an enclosed space, it smells faintly of morning dew.</p>
            <p>Professor Vinca stands to the side, waiting.</p>

            <img className='story-cg' src="https://i.postimg.cc/9QS8mtRz/ovQeIHI.png"></img>

          </div>
          </div>

          <p>While this was always meant to be a temporary assignment, some pairs found lifelong bonds through it.</p>
          <p>Meanwhile, with others enjoying the night and everything the Millennial Gardens Hall had to offer, some students met a second-year student, named Rin, who was attending as their senior helping with the party.</p>

          <img className='story-cg' src="https://i.postimg.cc/Twvtmdc6/CG-1.png"></img>

          <p>After some conversation with Rin, students learned more about the consequences of the 130th Felle-Fest tournament, where a student with no aura became the winner.</p>

            <div className='story-speech npc'>
                <img src={rin} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Rin</div>
                <p>"Even from outside the school, yeah. They opened the tournament for people to come and spectate a few years ago, right?" Rin folds his arms, trying to remember. "And <i>that</i> tournament happened within the first few years, when the hype was at its peak. So you can imagine what happened when all those people, <i>most of them being hunters themselves</i>, had to watch a non-aura user win the tournament."</p>
                <p>"<i>Boom</i>." He makes an explosion gesture with his hand.</p>
                </div>
            </div>

            <div className='cutscene'>
            <div className='story-body alt-font'>
                <Link to={`/FellePress/4`}><div className="special-box"><div className="news-icon">📰</div>
                <p>READ 'THE FELLE-FESTIVAL TOURNAMENT:  A BRIEF REVIEW' </p>
            </div></Link>
            </div>
            </div>
        </div>
        <br></br>
        <hr />
        <div className="story-big">
            <div>137th FELLE-FEST TOURNAMENT / VOID ARMY ATTACK</div>
        </div>
        <div className='story-body'>
          <p>During the final round of the 137th Felle-Festival tournament, a strange non-aura-made dome covered the arena and the audience.</p>
          <p>In the midst of all the chaos, students assembled into three different sections of the arena before being met with the faces of the Void Army. There, they revealed they set bombs in Voxenfelle Stadium, and the students were tasked with occupying their opponents while disarming the bombs.</p>

          <div className='cg-box'>
            <div className="special-box center"><div className="music"><a href="https://youtu.be/178kXgqCFEg?si=Z6Bq72YDQGglDcdR" target="_blank" rel="noopener noreferrer">♫</a>
            </div><p className='big alt-font'>Tera deflects all attacks, and gets into position.</p>
            </div>
            <img className='story-cg' src="https://i.postimg.cc/02XZndCZ/tera-cg.png"></img>


            <div className="special-box center"><div className="music"><a href="https://youtu.be/178kXgqCFEg?si=Z6Bq72YDQGglDcdR" target="_blank" rel="noopener noreferrer">♫</a>
            </div><p className='big alt-font'>Chou-Chou readies her parasol.</p>
            </div>
            <img className='story-cg' src="https://i.postimg.cc/05fVMqMT/chou-chou-cg.png"></img>
            

            
            <div className="special-box center"><div className="music"><a href="https://youtu.be/178kXgqCFEg?si=Z6Bq72YDQGglDcdR" target="_blank" rel="noopener noreferrer">♫</a>
            </div><p className='big alt-font'>Rin sheds his uniform, revealing red streaks across his chest.</p>
            </div>
            <img className='story-cg' src="https://i.postimg.cc/QM1bXLZn/rin-beastmode-cg.png"></img>


            <p className='big alt-font'><b>It slices away at the falling debris, clearing a path for themselves.</b></p>
            <img className='story-cg' src="https://i.postimg.cc/Hsn9r8CM/hound-cg-3.png"></img>
            
            <p>Chou-Chou swipes something from the bleachers nearby: a microphone. She taps it once, twice, loud and clear through the arena's speakers.</p>
            <p><i>"Ehem--testing, testing!"</i></p>
            <p>Then, she locks her gaze onto the cameras, raises an arm up, and waves.</p>
            <p>"Hi everyone!" She beams, cheerfully, with a smile. "We're-- erm, what was our speech again...?" Chou-Chou blinks to herself, confusion passing for a second, before a flash of remembrance hits her. "Oh, right."</p>
            <p>"We're the Void Army, and we're here to declare war!" She pauses, for dramatic effect.</p>
            <p className='big alt-font'><b>"War... on hunters, aura users, and all of Astralena!"</b></p>
            <img className='story-cg' src="https://i.postimg.cc/DZCbh50M/group-pic-cg.png"></img>
            <p>"The Void Army seeks to represent all of you who feel like you've been let down!"</p>
            <p>"By hunters, aura-users, Hylia, and the world~"</p>
            <p>"We're here to bring change to the country! A better system! One where Hunters and aura users have no use, at all!"</p>
            <p>"...I think there's more to the speech, but I kind of forgot." She frowns.</p>
            <p>"But! The bottom line is that we're declaring war, and all of you are free to join us on our mission!"</p>
            </div>

            <div className='cutscene'>
            <div className='story-body alt-font'>
                <Link to={`/FellePress/4`}><div className="special-box"><div className="news-icon">📰</div>
                <p>BREAKING NEWS: TERRORISTS CRASH FELLE-FEST TOURNEY. SPIKE IN VOIDWALKER ATTACKS.</p>
            </div></Link>
            </div>
            </div>
            <p>Although students were able to disarm the bombs in time, 120 were injured and 24 were severely wounded from the general destruction.</p>
            </div>

            <br></br>
            <hr />
        <div className="story-big">
            <div>MEETING ARIAS</div>
        </div>

        <div className='story-body'>
          <p>A day after the Void Army attack on Voxenfelle Academy, the students were called to the Holy Temple for an audience with the High Priest, Arias.</p>
          <p>Large, large, much larger than life. Carved in a benevolent pose, made of flawless white marble, Her expression is gentle and kind, with eyes closed as if in a light slumber.</p>
          <p>A hand lays on Her chest while the other stretches outwards, as if giving out mercy to those below Her — as if giving out Her blessings.</p>
          <p>Inside the temple, you have all the room you could ever have. You could take your place here and there would still be more for others; this could be your home and you would not be selfish for wanting it. A second wind stirs up your emotions and your heart calms. How peaceful, how breezy. Your footsteps echo throughout the main hall, but the sound becomes unimportant in the face of the sight before you.</p>
          <p>You see an ethereal figure bathed in white. Their hands are clasped together in what could only be prayer.</p>

          <img className='story-cg' src="https://i.ibb.co/27FFyXz/priest-cg.png"></img>

          <p>There, Arias answered several pressing questions the students had at hand. They learned from him that the Void Army was in preparation for some time, with Hound as their leader, and was being monitored by both church and government. </p>
          <p>He also revealed that the infiltrators were not in possession of Aura. Instead, the powers everyone witnessed at work during the tournament were blessings from the Void. This allowed them to obtain abilities far stronger than most aura and cast them without a color glow.</p>
          <p>He also revealed that the infiltrators were not in possession of Aura. Instead, the powers everyone witnessed at work during the tournament were blessings from the Void. This allowed them to obtain abilities far stronger than most aura and cast them without a color glow.</p>

          <div className='story-speech npc'>
                <img src={arias} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Arias</div>
                <p>"Yes, I have heard of the term before." Silent aura casting. "I suppose you could say it is... inaccurate."</p>
                  <p>"Power from the void," he continues, expression steeling to something more serious. "Is something that has been banned for many years now. Decades, even."</p>
                  <p>"Those who attempt it will lose their souls."</p>
                  <p>"Then, their bodies shift and morph, transforming into something you cannot refer to as 'human'. And finally..."</p>
                  <p>"...a Voidwalker is born."</p>
                </div>
            </div>

          <p>He then revealed the successful capture of one of the Void Army by Vinca: Rin, who was now in custody of the academy, before later being transferred to the Hysse Supermax Prison.</p>
          <p>Finally, once everything was said and done, Arias left the students with one final request:</p>

          
          <div className='story-speech npc'>
                <img src={arias} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Arias</div>
                <p>"Please, put a stop to them, once and for all."</p>
                </div>
            </div>

        </div>

        <div className="story-big">
        <div>HOUND FIGHT</div>
        </div>

        <div className='story-body'>
          <p>As the hunters around the world move into action to deal with an increase in voidwalker threats, the situation in Astralena falls heavily into the hands of the students within. #Shounen</p>
          <p>After investigation, students are able to confirm with their professor, Eden Vinca, that the leader of the Void Army, Hound, is Vinca’s old friend (and desired soulbond, Yuenris Lafaye). Vinca asks for them to save Yuenris and says that the Yuenris he knew would not be doing these things.</p>

          <div className='story-speech npc'>
                <img src={vinca} className='story-avatar'></img>
                <div className="story-speech-text">
                <div className="story-speech-name">Vinca</div>
                <p>"...We didn't get to graduate together," softly. "Yuenris dropped out after winning the tournament. She disappeared afterwards, and stopped contacting me then as well."</p>
                <p>"I..." He shakes his head.</p>
                <p>"I was surprised to see her that day, at the tournament." The terrorist attack. "I recognized her right away. Her stance, her posture, the way she wielded her sword..." <i>Her gallant figure as she left the arena</i>, "I knew right away that it was Yuenris." At this, his expression twists. "I didn't think I'd see her again."</p>
                <p>"I'm telling you all this because I want you understand her,"</p>
                <p>"--And because I want you to stop her."</p>
                </div>
            </div>

            <p>The students are given information from Head Priest Arias that Hound has been spotted at an abandoned building and so go there to meet her. Once arriving, they fight Hound and break her mask, only to realize that Hound’s mask has been controlling her the whole time. </p>

            <div className='cg-box'>
            <iframe width="854" height="480" src="https://www.youtube.com/embed/zOZPjAhJqXw?si=F-ErNyGGSqm8PkW4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className='big alt-font'><b>Hound—no.</b></p>
              <img className='story-cg' src='https://i.ibb.co/tbTSpsm/hound-cg-mask-1.webp'></img>
              <p className='big alt-font'><b>Yuenris Lafaye stares back at you, dazed.</b></p>
              <img className='story-cg' src='https://i.ibb.co/zfs8P0h/hound-cg-mask-2.png'></img>
            </div>
            <p>After trying to take the mask back for investigation, it shatters - spilling black smoke that shoots upwards with the sound of the Void. It then flies away, returning to somewhere else in the city.</p>
            </div>
            <br></br>
            <hr />
        <div className="story-big">
        <div>ARIAS/THE HOLY TEMPLE</div>
        </div>
        <div className='story-body'>
        <p>The students are invited to visit the Holy Temple where they learn that Arias sent them to fight Hound in order to get them killed and that he was behind the creation of the Void Army. He then attempts to kill them all instead—his body seemingly taken over by the Void speaking through him.</p>
        <div className='cg-box'>
            <div className='big alt-font'>
              <p style={{fontSize: '20px'}}>"Blood for blood..."</p>
              <p>"You will pay with yours..."</p>
              <p style={{fontSize: '40px'}}><b>"FOR THE VOID."</b></p>
              </div>
              <img className='story-cg' src='https://i.ibb.co/p0m5ynt/priest-cg-3.png'></img>
        <div className='story-body'>
          <br></br>
        <p style={{color: 'grey'}}><i>After a violent battle, Arias makes mention of a ‘Society’.</i></p>
          <p>Arias looks at you all, his face filled with anger, rage, resentment, pain, and everything in between. A picture of...something.</p>
          <p>You're not quite sure what it is.</p>
          <p>With one final blow, Arias collapses, his body starting to disintegrate.</p>
          <p>"For the society, I..."</p>
          <p>His body crumbles, tendrils dropping to the ground and receding into him once more.</p>
        </div>
        </div>
        <p className='alt-font'><b>NOTE: This fight was not made public. Only those who were there and upper government are aware that it happened. The official press statement is that the High Priest Arias was severely injured from a voidwalker attack on the church and he cannot return to his duties yet.</b></p>
        </div>

        <br></br>
        <hr />

        <div className="story-big">
        <div>EPILOGUE</div>
        </div>

        <div className='story-body'>
          <p>High Priest Arias has been defeated.</p>
          <p>Thanks to Hong and Makoto's call to Professor Vinca, emergency help was quickly dispatched to the temple. Medics as well as some of the academy's teaching staff soon arrive to the scene. Authorities followed soon after to investigate.</p>
          <p>Renzhi's recording is then submitted to the authorities as proof. Though you don't know what will happen from it, the recording is enough to prove your innocence as to what happened at the temple. Apparently, Yuenris has also woken up and testified for you. It seems High Priest Arias was behind everything, including the creation of the Void Army itself. Voidwalker attacks have also dropped greatly after the defeat of the high priest, further proving the connection.</p>
          <p>Before Arias's remains were taken away, Juniper finds his pendant, remained unscathed and pristine despite the rest of his body. A strange symbol is engraved on the back with unfamiliar letters. You don't recognize the language, but you remember Arias's last words before his death: something about a society.</p>
          <p>Once everything has calmed, Professor Vinca takes the students back to the school. He expresses his regret at not having accompanied you to the temple, but most importantly, he's glad that you all made it out alive. When you're all better, he promises to treat everyone to hotpot in the city. It seems like it'll be fun.</p>
          <p>Unanswered questions remain, and though you feel as if you haven't found all the pieces to the puzzle yet, what matters now is the fact that you're alive and well. What awaits you tomorrow and in the future? Will you ever find all the answers to what transpired over the last week? It seems only time, and fate, will tell.</p>
          <p>And so another day passes by, in Voxenfelle Academy. </p>

          <p style={{fontSize: '50px', width: '100%', textAlign: 'center', fontFamily: "'B612 Mono', monospace"}}><a href="https://www.youtube.com/watch?v=tNU4d_fTn24&ab_channel=VoxenfelleAcademy" target="_blank" rel="noopener noreferrer"><u>📽️ [FINALE: END]</u></a></p>
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
                <Link to={`/story/Candle Ceremony I`} style={{marginLeft: '3%'}}>Season 2 🠆</Link>
            </div>
            </div>
            <br></br>

    </div></div>
  );
}


export default SeasonI;
