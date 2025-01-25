import { useEffect, useState } from 'react';
import './SolstiaStreets.css'

const newsboy = 'https://i.ibb.co/gwVxBFt/Illustration47.png';
const mille = 'https://i.ibb.co/XtWNzzT/Illustration3.png';
const ming = 'https://i.ibb.co/kDHFC9G/Illustration3.webp';

function SolstiaStreets() {
    const [finalDay, setFinalDay] = useState(false);
    const [sing, setSing] = useState(false);
    const [sing0, setSing0] = useState(false);
    const [sing1, setSing1] = useState(false);
    const [sing2, setSing2] = useState(false);
    const [sing3, setSing3] = useState(false);
    const [sing4, setSing4] = useState(false);
    const [hasMap, setHasMap] = useState(false);

    const [start, setStart] = useState(true);
    const [plaza, setPlaza] = useState(false);
    const [park, setPark] = useState(false);
    const [temple, setTemple] = useState(false);
    const [museum, setMuseum] = useState(false);
    const [library, setLibrary] = useState(false);
    const [shopping, setShopping] = useState(false);
    const [business, setBusiness] = useState(false);
    const [pub, setPub] = useState(false);
    const [acoh, setACOH] = useState(false);
    const [harbor, setHarbor] = useState(false);
    const [beach, setBeach] = useState(false);
    const [city_gates, setcity_gates] = useState(false);
    const [outskirts, setOutskirts] = useState(false);
    const [via_del_hylia, setvia_del_hylia] = useState(false);
    const [vicolo_della_stella, setvicolo_della_stella] = useState(false);
    const [lungomare_di_solstia, setlungomare_di_solstia] = useState(false);
    const [viale_degli_amanti, setviale_degli_amanti] = useState(false);
    const [via_della_cometa, setvia_della_cometa] = useState(false);
    const [via_bellatrix, setvia_bellatrix] = useState(false);
    const [east_solstia, seteast_solstia] = useState(false);
    const [lookout_point, setlookout_point] = useState(false);
    const [train_station, settrain_station] = useState(false);

    const [birdHell, setBirdHell] = useState(false);
    const [birdCount, setBirdCount] = useState(3);
    const [birdDeath, setBirdDeath] = useState(false);
    const [fatality, setFatality] = useState(false);

    const [northI, setNorthI] = useState(false);
    const [northII, setNorthII] = useState(false);
    const [northIII, setNorthIII] = useState(false);
    const [northIV, setNorthIV] = useState(false);

    const [northPlaza, setNorthPlaza] = useState(true);
    const [northvicolo_della_stella, setNorthvicolo_della_stella] = useState(false);
    const [northcity_gatess, setNorthcity_gatess] = useState(false);
    const [knowNorth, setKnowNorth] = useState(false);

    const [knowMille, setKnowMille] = useState(false);
    const [milleACOH, setMilleACOH] = useState(true);
    const [milleOutskirts, setMilleOutskirts] = useState(false)

    const [greetMing, setGreetMing] = useState(false);
    const [knowMing, setKnowMing] = useState(false);

    const [barkeep, setBarkeep] = useState(false);
    const [saif, setSaif] = useState(false);

    const [answer, setAnswer] = useState(false);
    const [answer2, setAnswer2] = useState(false);

    const [choice, setChoice] = useState("");
    const [replytext, setReplytext] = useState("");
    const [normal, setNormal] = useState("");
    const [action, setAction] = useState("");

    const [elysiaCount, setElysiaCount] = useState(0);
    const [milleCount, setMilleCount] = useState(0);
    const [dianaCount, setDianaCount] = useState(0);

    const [room, setRoom] = useState(false);

    function rollD20() {
        return Math.floor(Math.random() * 20) + 1;
      }

      const resetStates = () => {
        setFinalDay(false);
        setSing(false);
        setSing0(false);
        setSing1(false);
        setSing2(false);
        setSing3(false);
        setSing4(false);

        setStart(true);
        setPlaza(false);
        setPark(false);
        setTemple(false);
        setMuseum(false);
        setLibrary(false);
        setShopping(false);
        setBusiness(false);
        setPub(false);
        setACOH(false);
        setHarbor(false);
        setBeach(false);
        setcity_gates(false);
        setOutskirts(false);
        setvia_del_hylia(false);
        setvicolo_della_stella(false);
        setlungomare_di_solstia(false);
        setviale_degli_amanti(false);
        setvia_della_cometa(false);
        setvia_bellatrix(false);
        seteast_solstia(false);
        setlookout_point(false);
        settrain_station(false);

        setBirdHell(false);
        setBirdCount(3);
        setBirdDeath(false);
        setFatality(false);

        setNorthI(false);
        setNorthII(false);
        setNorthIII(false);
        setNorthIV(false);

        setNorthPlaza(true);
        setNorthvicolo_della_stella(false);
        setNorthcity_gatess(false);
        setKnowNorth(false);

        setKnowMille(false);
        setMilleACOH(true);
        setMilleOutskirts(false);

        setGreetMing(false);
        setKnowMing(false);

        setBarkeep(false);

        setAnswer(false);
        setAnswer2(false);

        setChoice("");
        setReplytext("");
        setNormal("");
        setAction("");

        setElysiaCount(0);
        setMilleCount(0);
        setDianaCount(0);

        setRoom(false);

        var current = 'start';

        const stateToSave = {
            current, northPlaza, northvicolo_della_stella, northcity_gatess, knowNorth, knowMille, milleACOH, milleOutskirts, knowMing, answer, answer2, elysiaCount, milleCount, dianaCount, finalDay, sing0, sing1, sing2, sing3, sing4
        };
    
        localStorage.setItem('savedState', JSON.stringify(stateToSave));
    };

    const changeRoom = (currentRoom, nextRoom) => {
        currentRoom(false);
        nextRoom(true);
        setNormal("");
        setChoice("");
        setReplytext("");
        setAction("");
        setRoom(!room);
    };

    const stateSetters = {
        start: setStart,
        plaza: setPlaza,
        park: setPark,
        temple: setTemple,
        museum: setMuseum,
        library: setLibrary,
        shopping: setShopping,
        business: setBusiness,
        pub: setPub,
        acoh: setACOH,
        harbor: setHarbor,
        beach: setBeach,
        city_gates: setcity_gates,
        outskirts: setOutskirts,
        via_del_hylia: setvia_del_hylia,
        vicolo_della_stella: setvicolo_della_stella,
        lungomare_di_solstia: setlungomare_di_solstia,
        viale_degli_amanti: setviale_degli_amanti,
        via_della_cometa: setvia_della_cometa,
        via_bellatrix: setvia_bellatrix,
        east_solstia: seteast_solstia,
        lookout_point: setlookout_point,
        train_station: settrain_station,
        sing: setSing,
        birdHell: setBirdHell,
        fatality: setFatality,
        northI: setNorthI,
        northII: setNorthII,
        northIII: setNorthIII,
        northIV: setNorthIV,
        barkeep: setBarkeep,
      };

      const currentStates = {
        start,
        plaza,
        park,
        temple,
        museum,
        library,
        shopping,
        business,
        pub,
        acoh,
        harbor,
        beach,
        city_gates,
        outskirts,
        via_del_hylia,
        vicolo_della_stella,
        lungomare_di_solstia,
        viale_degli_amanti,
        via_della_cometa,
        via_bellatrix,
        east_solstia,
        lookout_point,
        train_station,
        sing,
        birdHell,
        fatality,
        northI,
        northII,
        northIII,
        northIV,
        barkeep
      };

      const locations = {
        start,
        plaza,
        park,
        temple,
        museum,
        library,
        shopping,
        business,
        pub,
        acoh,
        harbor,
        beach,
        east_solstia,
        lookout_point,
        train_station,
        city_gates,
        outskirts,
        via_del_hylia,
        vicolo_della_stella,
        lungomare_di_solstia,
        via_bellatrix,
        viale_degli_amanti,
        via_della_cometa,
      };
    
      const currentLocation = () => {
        for (const room in stateSetters) {
          if (currentStates[room] === true) {
            return room; 
          }
        }
      };

    const jumpRoom = (targetRoom) => {
        stateSetters[currentLocation()](false);
        stateSetters[targetRoom](true);
        setNormal("");
        setChoice("");
        setReplytext("");
        setAction("");
        setRoom(!room);
    };

    // useEffect(() => {
    //     const savedState = localStorage.getItem('savedState');
    //     if (savedState) {
    //       const parsedState = JSON.parse(savedState);
    //       setNorthPlaza(parsedState.northPlaza);
    //       setNorthvicolo_della_stella(parsedState.northvicolo_della_stella);
    //       setNorthcity_gatess(parsedState.northcity_gatess);
    //       setKnowNorth(parsedState.knowNorth);
    //       setKnowMille(parsedState.knowMille);
    //       setMilleACOH(parsedState.milleACOH);
    //       setMilleOutskirts(parsedState.milleOutskirts);
    //       setKnowMing(parsedState.knowMing);
    //       setAnswer(parsedState.answer);
    //       setAnswer2(parsedState.answer2);
    //       setElysiaCount(parsedState.elysiaCount);
    //       setMilleCount(parsedState.milleCount);
    //       setDianaCount(parsedState.dianaCount);
    //       setFinalDay(parsedState.finalDay);
    //       setStart(false);
    //       stateSetters[parsedState.current](true);
    //       setSing0(parsedState.sing0);
    //       setSing1(parsedState.sing1);
    //       setSing2(parsedState.sing2);
    //       setSing3(parsedState.sing3);
    //       setSing4(parsedState.sing4);
    //     }
    //   }, []);

    const saveState = () => {
        var current = currentLocation();

        const stateToSave = {
            current, northPlaza, northvicolo_della_stella, northcity_gatess, knowNorth, knowMille, milleACOH, milleOutskirts, knowMing, answer, answer2, elysiaCount, milleCount, dianaCount, finalDay, sing0, sing1, sing2, sing3, sing4
        };
    
        localStorage.setItem('savedState', JSON.stringify(stateToSave));
        setReplytext(`Game has been saved.`);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, [room]);


// PROMPTS
const handleSubmit = (e) => {
let choiceLower = choice.toLowerCase()

const iceCream = [`Chocolate.`, `Vanilla.`, `Mint Chocolate Chip.`, `Rocky Road.`, `Strawberry.`, `Cookies and Cream.`, `Butter Pecan.`, `Coffee.`, `Pistachio.`, `Hot Pepper Cinnamon...? It's spicy!`, `Chocolate Bourbon...

You know someone who would like this flavor.`];

const askAboutElysia = [`"You wanted to learn about Lady Elysia?" You manage to find a priest with some time for a quick chat of questions.

"It is regrettable... The incident that took place, but it would be foolish to do harm on her. She wields the power of miracles and they are not to be taken lightly. I assume what the foes aims foremost is a negotiation with the church."

A pause. "I'm a bit preoccupied due to the incident. Come back later if you want to ask more questions."`, `A priest stops by to answer your question after recognizing your uniform. "I have witnessed Lady Elysia's power of prophecy... She receives visions not only of the future but of the present and past, and with her help, we have since gained more knowledge regarding the tragedy surrounding Teide."

"However, she had only recently awoken and is still undergoing training. It is a shame we failed to anticipate this attack." The priest shakes his head. "I only wish I could have done more to aid her."`, `"Dayum. Why'd they dress her up all nice for if not to make it a show." The priest is busy with other matters today so you swap small talk with dark-haired stranger who had been lounging in one of the pew chairs.

"She's said to be a virgin. They had her declarin' oaths to Hylia and church allll month before the ordination. But now that she's missing? Hah! Even soulbonds are up in da air!"`, `"She was an orphan. We found her in a smaller village past the outskirts of the city, about three hours away. She had lived alone and a made a living out of selling flowers after she lost her parents to a Voidwalker attack over a decade ago." The priest adjusts his glasses and shares a sigh heavy with sympathy.

"A common tale but no less tragic. ...When she first came to the temple, I saw the smile on her face. Warm and bright like the Goddess as if she had found her home- no... was returning home."`, `The temple seems to be especially busy at this time, and members of the church shake their head at your continuous questions of Lady Elysia. Perhaps this is all the information you would be able to get.`];

const greetMilleACOH = [`"Oh it's the Voxenfelle juniors." You managed to catch the squad leader for the ACOH Border Patrol team finishing up a call on her phone. She waves at you if she catches seeing any familiar faces.

"You wanted to ask something? How the city's a mess right now? In the six years I've lived here, we've never had an attack on the church like this. It's a real headache now." A sigh escapes her.

"Good thing we replaced that magitech detector on the gates when we did huh. Least it's not a voidwalker attack."

"Listen. I'm busy right now and no I can't help with border control- I've been asked already. If you're trying to ask something else, come find me later." She excuses herself as she heads back inside the office.`, `"You juniors sure have a lot of time." The cat-eyed Hunter remarks with equal parts amusement and fatigue.

"Trying to help with the search? I'm too busy securing the borders to catch up with what's inside the city. If you want info though, the barkeeper at Supergiant Pub is a good person to ask too. There's also my friend, Diana in the shopping district, but you gotta buy her flowers if you want her talk."`, `Mille is standing outside the office discussing something with her quiet companion, Ming. It takes a while before she notices you and greets back to all the students.

"...How's Erin doing? I haven't had time to check my texts." She brushes her bangs out of her face and lets out a sigh.

"I'm sure we all appreciate your help with the search but stay safe first, alright? Whether or not, I'm around to be responsible for it." She tries for a smile before heading out to patrol with her partner.`];

const buyFlowers = [`"Thank you for the purchase!" A woman in her late twenties hands you a bouquet of edelweiss flowers.

"These are our most popular flowers! They're always popular around Hylia's Grace, but after Lady Elysia mentioned it as one of her favorite flowers, orders have been coming nonstop! Everyone's been buying them now to pray for her safety. I hope you feel the same." She smiles.`, `"Thank you for the purchase!" A woman in her late twenties hands you a bouquet of gladiolus flowers.

"I see that you're students training to be Hunter. I recognize that uniform from a friend." She smiles. "Have you done any training yet at the ACOH office? It might help you kids."`];

const Souvenirs= [`stuffed animal`, `a hat`, `a keychain`, `a postcard`, `some fish snacks`, `a photo card of Elysia`, `sticker set`, `decorated shot glass`];

const fortuneCategory = [`pursuing your goals`, `friendship`, `health`, `love`];

const fortuneLuck = [`awful`, `great`, `poor`, `favorable`, `good`];
        
        e.preventDefault();

        // TRAIN STATION
        if (train_station && choiceLower.includes("look at solstia map")) {
            setReplytext(`An old map of the city is displayed on the station walls, along with a short blurb of Solstia's history. Its main architects were a group of civilians who had been unable to fight during the Great War.

...The Goddess had chosen her warriors but our hands remain able. We cannot become Hunters so we shall build one instead. For Her and for Her people.

Our people. May Solstia meet with all from land, sea, and sky. May the city remain a guiding light for centuries to come...`)
            setChoice("");
            setHasMap(true);
        }

        // VIA DELLA COMETA
        if (lookout_point && (choiceLower === "pet cat" || choiceLower === "pet the cat")) {
            const rollResult = rollD20();
            setChoice("")
    
            if (rollResult > 10) {
            setReplytext(
        `❗ ${rollResult} The cat suddenly looks at your with beady eyes and meows, and you're tempted to meow back, maybe even break into a song. Ohhh look how cute you are!

Although that might look strange to the residents walking by. So it's probably best to do this elsewhere.
`);
        }
        else {
        setReplytext(`❌ ${rollResult} The cat jumps away and goes back to hide under the bushes... Darn.`)
            }}

        // SING
        if (sing4 && choiceLower.includes("temple")) {
            setChoice("");
            setSing3(true);
        }

        if (sing3 && choiceLower.includes("museum")) {
            setChoice("");
            setSing4(true);
        }

        if (sing2 && choiceLower.includes("library")) {
            setChoice("");
            setSing3(true);
        }

        if (sing1 && choiceLower.includes("plaza")) {
            setChoice("");
            setSing2(true);
        }

        if (sing0 && choiceLower.includes("pub")) {
            setChoice("");
            setSing1(true);
        }

        if (sing && choiceLower === "acoh") {
            setChoice("");
            setSing0(true);
        }
        
        if (lookout_point && choiceLower === "sing") {
            setSing(true);
            setlookout_point(false);
            setChoice("");
        }

        // VIALE DEGLI AMANTI
        if (viale_degli_amanti && choiceLower === 'greet fortune teller') {
            const pickedFortuneCategory = fortuneCategory[Math.floor(Math.random() * Souvenirs.length)];
            const pickedFortuneLuck = fortuneLuck[Math.floor(Math.random() * Souvenirs.length)];
            setReplytext(`"Welcome, dear. Care to hear a fortune?"" A fortune teller calls for your attention down the street and peers into her crystal ball.

"Your luck in ${pickedFortuneCategory} will be ${pickedFortuneLuck} today!" She smiles confidently.

"Orion shines bright in the sky tonight. Rigel, Betelgeuse, Bellatrix..."`)
            setChoice("");
        }

        // EAST SOLSTIA
        if (east_solstia && choiceLower === "buy souvenirs") {
            const pickedSouvenir = Souvenirs[Math.floor(Math.random() * Souvenirs.length)];
            setReplytext(`You find and buy ${pickedSouvenir} to share with people back home!`)
            setChoice("");
        }

        // HARBOR
        if (harbor && choiceLower === "feed the birds") {
            setBirdHell(true);
            setHarbor(false);
            setChoice("");
        }

        if (birdHell && ( choiceLower === "fight" || choiceLower === "punch" )) {
            const birdsFought = Math.floor(Math.random() * 4) + 1;

            setChoice("");
            if (birdsFought < 4) {
                if (birdCount - birdsFought >= 0) {
                    setBirdCount(birdCount - birdsFought);
                } else {
                    setBirdCount(0);
                }
            } else {
                setBirdCount(birdCount + 1);
            }
        }

        if (birdHell && choiceLower === "pray") {
            setReplytext("Hylia can't save you now.");
            setChoice("");
        }

        // SHOPPING
        if (shopping && choiceLower === `ask about rigel`) {
            setChoice("");
            setReplytext(`"Via Rigel?"

"You're on the wrong side buddy." A small storefront owner stops his work to point across the street and over at the alley.

"It's over where that Hunter office's at."`);
            setFinalDay(true);}

        if (shopping && choiceLower === "buy flowers") {
            setReplytext(buyFlowers[dianaCount]);
            setDianaCount((prevCount) => (prevCount + 1));
            setChoice("");
        }

        // NORTH

        if (plaza && northPlaza && choiceLower === 'buy newspaper') {
            setPlaza(false);
            setNorthI(true);
            setKnowNorth(true);
            setChoice("");
        }

        if (northI && choiceLower === 'voxenfelle') {
            setAnswer(true);
            setNorthPlaza(false);
            setNorthvicolo_della_stella(true);
            setKnowNorth(false);
            setChoice("");
        }

        if (vicolo_della_stella && northvicolo_della_stella && choiceLower === 'buy newspaper') {
            setvicolo_della_stella(false);
            setNorthII(true);
            setKnowNorth(true);
            setChoice("");
        }

        if (northII && choiceLower === 'yes') {
            setAnswer(true);
            setChoice("");
        }

        if (northII && answer && choiceLower === `orion's shield`) {
            setAnswer2(true);
            setNorthvicolo_della_stella(false);
            setNorthcity_gatess(true);
            setKnowNorth(false);
            setChoice("");
        }

        if (city_gates && northcity_gatess && choiceLower === 'buy newspaper') {
            setcity_gates(false);
            setNorthIII(true);
            setKnowNorth(true);
            setChoice("");
        }

        if (northIII && choiceLower === `orion's shield`) {
            setAnswer(true);
            setChoice("");
        }
        
        // TEMPLE
        if (temple && choiceLower === "ask about elysia") {
            setReplytext(askAboutElysia[elysiaCount]);
            setElysiaCount((prevCount) => (prevCount + 1));
            setChoice("");
        }

        // LIBRARY
        if (library && choiceLower === 'ask about hylia') {
            setReplytext(`You try to borrow a few books about Hylia from the library, but after cracking a look, it appears all the information is similar to what you can already find in Hysse.`)
            setChoice("");
        }

        // MILLE
        if (acoh && milleACOH && choiceLower === 'greet mille') {
            if (!knowMille) {
                setChoice("");
                setKnowMille(true);
                setReplytext(greetMilleACOH[milleCount]);
                setMilleCount((prevCount) => (prevCount + 1));
            }
            else {
                setChoice("");
                setReplytext(greetMilleACOH[milleCount]);
                setMilleCount((prevCount) => (prevCount + 1));
                console.log(milleCount)
                if (milleCount === 2) {
                    setChoice("");
                    setMilleCount(0);
                    setKnowMille(false);
                    setMilleACOH(false);
                    setMilleOutskirts(true);
                }
            }
        }
        
        if (outskirts && milleOutskirts && choiceLower === 'greet mille') {
            setChoice("");
            setKnowMille(true);
            setReplytext(`"Here again?" She raises an eyebrow, noticing your uniforms.

"There's nothing to see here. I know my sister would be bored out of their minds if they had my job right now."

To the corner you notice some black stones scattered around the trail. Mille holds out a hand to stop you from stepping over them.

"Those are mines, not Ming's. My partner is over at the library." She doesn't bother to explain the aura. "Go bother him and tell him to come back if you're that free."

Unlock secret action: [GREET MING]`)
        }

        // MING
        if (library && milleOutskirts && choiceLower === 'greet ming') {
            setGreetMing(true);
            setLibrary(false);
            setKnowMing(true);
            setReplytext("");
        }

        if (greetMing && choiceLower === 'rigel') {
            setChoice("");
            setReplytext(`"Do you mean Rigel street, where my office stands, or the great Hunter it was named after?" He looks up.

"I do not know much of the latter, but I grew up in this city known for its unusual names."

"This used to be the Library of Betelgeuse." A smile sneaks on his face. "Perhaps if you know the word, you would know why it was changed."`);
        }

        if (greetMing && choiceLower === `orion's shield`) {
            setChoice("");
            setReplytext(`"I am not aware of such a shield by that name in our association. Unless you mean of the Hunter Orion who works in the Hysse branch."
"A common name, but his weapon of choice is a spear." Ming turns to go back to their books.`);}


        // BARKEEP
        if (pub && choiceLower === 'give sea bass') {
            setReplytext(`"Appreciated." His expression remains neutral but his eyes catch on the pub lighting, and brighten.

"...You wanted to know my name?" He pauses to set down the wine glass he had finished polishing.

"BK."`);
        }

        if (pub && choiceLower === 'shoot for the stars') {
            setBarkeep(true);
            setPub(false);
            setReplytext("");
            setChoice("");
        }

        if (pub && choiceLower === 'give sea bass') {
            setReplytext(`"Appreciated." His expression remains neutral but his eyes catch on the pub lighting, and brighten.

"...You wanted to know my name?" He pauses to set down the wine glass he had finished polishing.

"BK."`);
        }

        if (barkeep && (choiceLower === `elysia` || choiceLower === `vessel`)) {
            setChoice("");
            setReplytext(`"Not here." The barkeeper cuts in with an answer before you finish asking.

"We've had plenty of people come askin' and we're not involved." And that's that.`);}


        if (barkeep && choiceLower === `starbearer`) {
            setChoice("");
            setReplytext(`"Haven't landed in Astralena yet." The barkeeper answers briskly.

"They're going by ship. Heard they had to fight some aquatic Voidwalkers on the way. That time of the year and all." He sighs, taking another cup to polish.`);}

        if (barkeep && choiceLower === `shield`) {
            setChoice("");
            setReplytext(`"We have one in the back." He motions you to follow around the counter through the back door and down to the wine cellar...

A room lies at the very end and he guides you inside...
🧸 Welcome to the Starbearer's Secret Society!

Perhaps to your surprise, the room is filled... with Starbearer bears! At least ten of each color, all sitting cozy on a velvet cushions and couches. Each Starbearer has a designated shrine and posters of these same bears are framed on the wall and decorated in fanatic fashion. And the plushie line was released less than a month ago!

The barkeeper, still stone faced, silently points to one of the pink bears until you notice it's holding up a shield... replica.

"Sao doesn't use a shield any more so you can have it." He'll walk you out of the room when you're done.`);}

        if (barkeep && choiceLower.includes('friend')) {
            setChoice("");
            setReplytext(`The barkeeper glances at you with a look almost pitifully, before motioning you to follow him around the counter through the back door and down to the wine cellar...

A room lies at the very end and he guides you inside...

Welcome to the Starbearer's Secret Society!
Perhaps to your surprise, the room is filled... with Starbearer bears! At least ten of each color, all sitting cozy on a velvet cushions and couches. Each Starbearer has a designated shrine and posters of these same bears are framed on the wall and decorated in fanatic fashion. And the plushie line was released less than a month ago!

The barkeeper, still stone faced, silently points to one of the green bears until you notice it's surrounded by frog-related merchandise. Frog plushies, frog hats, frog charms. One of the bears is even wearing a frog shaped hood!

"Not the bears, but you can keep a frog." He'll walk you out of the room when you're done.`);}

        if (barkeep && choiceLower.includes(`information`)) {
            setChoice("");
            setReplytext(`"Aren't we all." And that's that.`);}

        if (barkeep && choiceLower === 'give sea bass') {
            setChoice("");
            setReplytext(`"Appreciated." His expression remains neutral but his eyes catch on the pub lighting, and brighten.

"...You wanted to know my name?" He pauses to set down the wine glass he had finished polishing.

"BK."`);}

        if (barkeep && choiceLower.includes('work')) {
            setChoice("");
            setReplytext(`We're not hiring. The barkeeper eyes your uniform with a raised eyebrow, unamused as if to say what good is a student Hunter at a pub?`);}

        if (barkeep && choiceLower === `rigel`) {
            setChoice("");
            setReplytext(`"Check the Hunter office. Other side of the city." He doesn't look up from his work.`);}

        if (barkeep && choiceLower === `sea bass`) {
            setChoice("");
            setReplytext(`"We got plenty in the harbor." A pause.

"The pub can do good with some." He hands you a small plate of fish tapas. "On the house."`);}
            
        if (barkeep && choiceLower.includes(`orion`)) {
            setChoice("");
            if (finalDay) {
                setChoice("");
                setSaif(true);
setReplytext(`"I remember." He motions you to follow around the counter through the back door and down to the wine cellar...

A room lies at the very end and he guides you inside...

Perhaps to your surprise, the room is filled... with Starbearer bears! At least ten of each color, all sitting cozy on a velvet cushions and couches. Each Starbearer has a designated shrine and posters of these same bears are framed on the wall and decorated in fanatic fashion. And the plushie line was released less than a month ago!

A man in his thirties is waiting inside, sitting comfortably with a red Starbearer bear in his arms. "Ah! You all must be the students asking around about Orion!"

"Orion's my brother working over at the ACOH Hysse branch. I didn't think he would have fans looking for him out here. You wanted an autograph or something?"`)
            }
            else {setReplytext(`"Orion's got many things." The barkeeper looks unimpressed. Can't be sold, but I know a guy. Works the museum. Come back later.`);}}

        if (saif && choiceLower === 'yes') {
            setNormal(`You nod your head.
"No problem. I'll have him sign a shield and send it over to your school!"

"I recognize that uniform. Voxenfelle Academy right?" He whistles. "Fancy schmancy. Too bad I never got an aura to become a Hunter..."

Whether or not this is what you wanted, the barkeeper will walk you out of the room when you're done.`)
        }

        if (saif && choiceLower === 'no') {
            setNormal(`You shake your head.
The man pauses, then points to himself. "Then... Did you want an autograph from me? The name's Saiph! Funny I share the same name as this street."

He hands you one of the toy shield replicas lying around the room, now with a fancy signature and an emoji ☆(・ω<)

Whether or not this is what you wanted, the barkeeper will walk you out of the room when you're done.`)
        }

        if (barkeep && choiceLower === `shield of the huntsman`) {
            setChoice("");
            setReplytext(`"On display in the museum." He mentions it offhandedly.`);}

        // MUSEUM
        if (museum && choiceLower === 'steal') {
            const rollResult = rollD20();
            if (rollResult > 17) {
            setReplytext(`❗ ${rollResult} With enough common sense, you realize it would not be wise to steal priceless artifacts from the museum.

Or at least, to not to do so during broad daylight. Maybe you should wait for a better time.`)
            } else {
                setReplytext(`❌ ${rollResult} Who told you to steal from a museum? It is not advised to follow drunken whims.`)
            }
            setChoice("");
        }
        if (museum && finalDay && choiceLower === 'steal') {
            const rollResult = rollD20();
            if (rollResult > 17) {
            setReplytext(`❗ ${rollResult} With enough common sense, you realize it would not be wise to steal priceless artifacts from the museum.

And the artifact you perhaps were searching for is no longer on display.`)
            } else {
                setReplytext(`❌ ${rollResult} Who told you to steal from a museum? It is not advised to follow drunken whims.`)
            }
            setChoice("");
        }
        // BEACH
        if (beach && choiceLower === 'buy ice cream') {
            const pickedIceCream = iceCream[Math.floor(Math.random() * iceCream.length)];
            setNormal(`You order a scoop of ice cream on a cone at the stand. The flavor is... ${pickedIceCream}`)
        }

        if (beach && choiceLower === 'remember') {
            const rollResult = rollD20();
            
            if (rollResult > 17) {
            setAction(
`❗ ${rollResult} It hits you like a wave. The voice of ██████ crying out in earnest, pleading for your help. A dream of desperation and fear before it all crumbled into the ████.
“Find Orion’s shield.”

Those were the lingering words, you remember them now. But... How can a shield help you save her?`);
            }
            else {
setAction(`❌ ${rollResult} So close! It's on the tip of your tongue...

What is it about the sea that feels so familiar...?`)
            }}

    if (business && choiceLower.includes(`ask for keycard`)) {
        setChoice("");
        setReplytext(`With the city locked down, the hotel has been a mess trying to calm the angry customers that want to checkout and leave.

If you never got a keycard before, you'll never get one now...`);}

}




// RANDOM FLAVOUR
const handleNormal = (action) => {
    const plazaLooks = [`Between the tourists crowding the statues and locals rushing through the intersection, it's hard to find anyone here willing to stop and answer any questions.`, `Several brave city birds are perching on top of the statue. One squawks when you make eye contact but it would not be recommended to feed them.`, `You find a group of tourists tossing coins into the fountain to make a wish.`]
    const plazaPhotos = [`Was there something in the plaza that caught your eye or did you just want to take a selfie for the memory? Either way, the photo came out great!`, `Whoop! Someone photobombs your shot and it comes out blurrier than expected...`, `From the angle of your camera, you manage to catch the roof of the Holy Temple peeking out just over the plaza buildings.`]
    const museumExplores = [`You head into the weapons section and find an old round shield made out of material that grants it a mysterious, rainbow sheen.

"Shield of the Huntsman."

It was apparently bestowed by Hylia herself to one of the heroes during the First Great War.`, `You head into the arts section and find remnants of old poetry out on display.

A forest dyed in red...
A heart ever pulsing...
Ever growing...
It feeds on lovers. It feeds on mothers.
...Flesh on the leaves
...Flesh on the trees
Consumed with life that bears no soul

What vibrance

The poem had been translated from an old tongue and is missing a lot of words and context, but it sounds to be a tragic love song.`, `You head into the arts section and discover old paintings, pottery, and statues with different portrayals of Hylia depending on the country of origin and culture. Several dating back many centuries.`, `You head into the science section and find old prototypes of magitech cores and various demonstations of how they were created back in the day. While the process to create the cores remains the same, distinct to the noble aura families, the refinement process is a lot efficient now!`]
    const eastSolstiaLooks = [`There's less foot traffic here compared to the plaza, but tourists crowd the area all the same. A bunch of them seem to be taking pictures with disposable cameras, snapping photos along the streets and in front of the clock tower.

...The endless shutter noises start to annoy you at some point, and you almost want to ask—what gives?!—but someone passes you a flyer, and, oh, there's a photography competition going on! You nod your head sagely in understanding.`, `A gaggle of young tourists catch your eye, crowding a souvenir shop just ahead where you stand. You see one of them trying on a garish yellow t-shirt with "I ❤️ SOLSTIA" written on it. Another tourist laughs, taking multiple pictures with their phone.

They seem to be around your age... oh, and it looks like they're all wearing a green uniform, too. Fellow students, perhaps?`]

    if (lookout_point) {
        if (action === 'take a photo') {
        setNormal(`It would be a good time to take a group photo together with other students, for the memories. Once the border opens again, it would be time to say goodbye to this city.`)
        }

        if (action === 'look') {
        setNormal(`A musician is found fiddling with his guitar nearby humming to an unusual song while the passing people continue to rest their eyes on the scenery.`)
        }
    }

    if (temple) {
        if (action === 'pray') {
            setNormal(`You close your eyes for a silent prayer.
“Y████ust████—”

“Find███████.”

“███Orion███s—”

For a brief moment, you thought you could hear someone crying. A memory? It's hard to remember the details now... but your heart aches.`)}}

    if (plaza) {
        if (action === 'look') {
        setNormal(plazaLooks[Math.floor(Math.random() * plazaLooks.length)])
        }

        if (action === 'photo') {
        setNormal(plazaPhotos[Math.floor(Math.random() * plazaPhotos.length)])
        }
    }

    if (museum) {
        if (action === 'explore') {
            setNormal(museumExplores[Math.floor(Math.random() * museumExplores.length)])
            if (finalDay) {
                setNormal(`"You find the new advertised exhibition.

Old World Tapestries

A tapestry weaved with gold threads is set in a display depicting what seems to be Hylia, a large tree, and humanity below with their hands raised as if to receive their auras. The plaque explains that the artist claimed they saw the vision in a dream."`)
            }
        }}

    if (birdHell) {
        if (action === 'feed the birds') {
            setBirdCount((prevCount) => (prevCount + Math.floor(Math.random() * 3) + 1));
        }

        if (action === 'run') {
            if (birdCount === 0) {
                setBirdHell(false);
                setHarbor(true);
                setChoice('');
                setBirdDeath(true);
            } else {
                setBirdDeath(true);
                setNormal(`There is no where left to run.
The seagulls have you cornered in all directions.`)
            }
        }

        if (action === 'end') {
            setBirdDeath(false);
            setBirdHell(false);
            setFatality(true);
        }
    }

    if (acoh) {
        if (action === 'look') {
            setNormal(`A statue stands in the front of the building posed with a sword and shield.

In honor of Hunter Rigel.
32 - 70 AH`)
        }}

    if (beach) {
        if (action === 'look') {
            setNormal(`For some reason, the sight of the ocean brings you a sense of unease. No one else around you seems to notice it, but there's a sensation as if something is going to jump out of the water. Roots...?

Unlock secret action: [████████]`)
        }
    }

    if (library) {
        if (action === 'look') {
setNormal(`You spy some people in uniform hanging around the west side of the library. They're from the Marine Hunters Association! They seem to be discussing the updates on border lockdowns after the ordainment ceremony.

A chat with them reveals that they have yet to see any suspicious figures flee out to sea.
For a moment, you have an urge to look above you and check for mistletoe. Thankfully, there isn't any. Exams are over.`)
        }
    }

    if (park) {
        if (action === 'sit') {
setNormal(`The comfort of the bench almost tempts you into a nap and you're reminded of a recent dream. The details eludes besides a familiar voice and the vision of a red sea... Or was that all your imagination?`)
        }
    }



    if (lungomare_di_solstia) {
        if (action === 'look') {
            setNormal(`In a corner, a musician can be heard strumming his guitar on a blanket. O Solstia. O Hylia. Where the Goddess meets the sea... The whales in my dream... It's blue, oh so blue. The loneliness in me...🎵`)
        }

        if (action === 'listen') {
            setNormal(`"Hey, did you watch that fishing competition the other day?" A man asks his friend.

"Yeah! Whew, who's that boy that won it again? Anna? Caught a mean sea bass, that one!"

"I reckon! It was almost half his size, and that boy's huge. What I'd give to bring that fish home with me..." He sighs wistfully.`)
        }}

    if (via_bellatrix && action === 'look') {
        setNormal(`An outdoor old marble statue is found by the entrance to the temple posed with a club and shield.

In honor of Hunter Orion.
1 - 59 AH

The Holy Temple stands on your shoulders.`)}

if (east_solstia && action === 'look') {
    setNormal(eastSolstiaLooks[Math.floor(Math.random() * eastSolstiaLooks.length)])}

}


// ACTION ROLLS
const handleAction = (action) => {

if (via_della_cometa && action === 'listen') {
const rollResult = rollD20();
if (rollResult > 10) {
setReplytext(`❗ ${rollResult} "You overhear two girls chatting while they wait at a bus stop. "Well? Did you try asking him out yet?"

She shakes her head. "No... My fortune teller says I shouldn't. I met with her earlier today."

"Is she actually good? I thought all her sayings are random..."

Unlock secret action: [GREET FORTUNE TELLER]`)
} else {
    setReplytext(`❌ ${rollResult} Most of the people here are mumbling to themselves about wanting to get off work sooner and wishing that the trains will start working again.`)
}
setChoice("");
}

if (lookout_point && action === 'listen') {
    const rollResult = rollD20();
    if (rollResult > 10) {
    setReplytext(`❗ ${rollResult} "Should we buy matching souvenirs later, sweetie?" An obnoxiously affectionate couple is strolling down the street, arms linked, blocking half of the sidewalk.
    
    "Anything for you, darling~" The response gets a giggle out of the girl and a gag from the person reading this.
    
    Unlock secret action: [BUY SOUVENIRS]`)
    } else {
        setReplytext(`❌ ${rollResult} "Dude. Where were you yesterday? There was a huge guy fighting a bunch of seagulls at the harbor. I swear, there must've been 2000 of them... You can watch them all the way from here!" One person is whispering out loud to his friend standing besides the binoculars.

"Put some respect on that name, man. That's Anna, the fishing champion! Guy's a legend!"`)
    }
    setChoice("");
    }

if (viale_degli_amanti && action === 'listen') {
const rollResult = rollD20();
if (rollResult > 10) {
setReplytext(`❗ ${rollResult} "Should we buy matching souvenirs later, sweetie?" An obnoxiously affectionate couple is strolling down the street, arms linked, blocking half of the sidewalk.

"Anything for you, darling~" The response gets a giggle out of the girl and a gag from the person reading this.

Unlock secret action: [BUY SOUVENIRS]`)
} else {
    setReplytext(`❌ ${rollResult} "Heyyyy babe, alone on a Friday night?" A stranger suddenly approaches you regardless if you are a babe or not. "Wanna have some fun together?"

If you follow: Oh come on, you know what happens. So have someone step in and pretend to be your partner like in the shoujos so we don't break the group's rating.
If you ignore: You manage to avoid the weirdo but your pockets feel 10 linne lighter.`)
}
setChoice("");
}

if (museum && action === 'listen') {
const rollResult = rollD20();
if (rollResult > 17) {
setReplytext(`❗ ${rollResult} "Do you think Hylia ever falls in love?" A visitor of the museum asks you, staring at a painting of the goddess. They look old enough to be your grandparent.

"Ah... perhaps a goddess doesn't have love to spare for herself, when she needs to love the entire world and its people. But there is an old tale that says the Void was actually in love with her, once upon a time. Interesting, isn't it?" They laugh to themselves, moving on to the next painting. You hear them mumbling about what's for lunch later.`)
} else {
    setReplytext(`❌ ${rollResult} The museum is fairly quiet today so you don't get to hear much conversation.`)
}
setChoice("");
}

// TEMPLE
if (temple && action === 'chat') {
    const rollResult = rollD20();
    
    if (rollResult > 10) {
    setAction(
`❗ ${rollResult} One of Elysia's retainers greets you. Though he tries to keep a straight face, the crease between his brows does more than enough to betray his feigned calmness.

"We're doing our best to organize efforts in the search for Lady Elysia. We're working in cooperation with the authorities of Solstia to cover more ground, but we lack manpower. Much of the police are currently occupied in closing off the borders and trade routes." He says, adjusting his glasses grimly.

"...If you decide to help in her search, then please know you have the entirety of my gratitude." He bows before taking his leave, disappearing into the temple corridors.`);
}
else {
setAction(`❌ ${rollResult} All the church members are busy dealing with the after effects of the incident with no time for chats. They send apologies your way, bowing their heads as they continue on.`)
    }}


if (temple && action === 'search') {
    const rollResult = rollD20();
    
    if (rollResult > 10) {
    setAction(
`❗ ${rollResult} You take a moment to sneak around the temple, marvelling both its intricate architecture and many rooms. Towards the top of the floor at the end of the hall lies a brightly lit bedroom with a stained glass chandelier. Several white dresses and head accessories are laid out on the bed, untouched. In the corner on the bedside is a vase of edelweiss flowers.

You decide not to step into the room as to avoid getting caught.`);
}
else {
setAction(`❌ ${rollResult} You take a moment to explore the temple, marvelling both its intricate architecture and many rooms. However, it's obvious that the vessel wouldn't be here so what were you hoping to find?`)
    }}

// LIBRARY
if (library && action === 'read') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(
`❗ ${rollResult} You find a newly returned book in the returns bin, titled The Rise and Fall of Teide.

You flip through the yellowed pages. The book details the small island's history and ultimate end during the second Great War. Other than that, it also documents its culture, people, and cuisine, among other things. Notably, it seems the citizens of Teide had a close relation to the sea, and much of their diet consisted of fish, primarily sea bass, and tropical fruits such as mangoes and papayas.`);
}
else {
setAction(`❌ ${rollResult} All the reading has made you quite sleepy. The temptation to nap in the library is calling you...`)
}}

if (finalDay && library && action === 'read') {
    const rollResult = rollD20();
    
    if (rollResult > 10) {
    setAction(
    `❗ ${rollResult} You find that someone has left a book on the table titled Stars and Signs.

It is notably left open to a page of constellations notably found around January.`);
    }
    else {
    setAction(`❌ ${rollResult} You find a newly returned book in the returns bin, titled The Rise and Fall of Teide.
    
        You flip through the yellowed pages. The book details the small island's history and ultimate end during the second Great War. Other than that, it also documents its culture, people, and cuisine, among other things. Notably, it seems the citizens of Teide had a close relation to the sea, and much of their diet consisted of fish, primarily sea bass, and tropical fruits such as mangoes and papayas.`)
    }}

// BEACH
if (beach && action === 'listen') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(
`❗ ${rollResult} Two sunbathers are swapping stories under the sun. "Saw that newsboy earlier passing up north. Did ya read today's paper?"

"Damn right I did. They're making aura users look bad, man. Can't believe it wasn't the Void Army starting up shit again."

"Duuude. And the bomb was so lame. What's up with that DIY shit."

Unlock secret action: [BUY NEWSPAPER]`);
}
else {
setAction(`❌ ${rollResult} You couldn't find any interesting conversations to note besides more mentions of the beach and discussions about what to eat for lunch.`)
}}

// CITY GATE
if (city_gates && action === 'search') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(
`❗ ${rollResult} You fail to find much of note... besides a eye-catching poster on the city walls advertising the ice cream they sell by the beach.

Unlock secret action: [BUY ICE CREAM]`);
}
else {
setAction(`❌ ${rollResult} There's not much to see by the city gates besides guards patrolling the area to make sure no one sneaks by. Some eye you with suspicion so it's better not to stay here too long...`)
}}

// PARK
if (park && action === 'search') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(
`❗ ${rollResult} While reading the inscriptions, you notice many of the statues date back several hundred years. Surely the local institutions would have more information about them if you ask. This is after all the city where the Goddess once descended.

Unlock secret action [ASK ABOUT HYLIA]!`);
}
else {
setAction(`❌ ${rollResult} You spend time admiring the scenery of the park but soon realize the area itself would not be able to aid in your search, too open to be able to hide any secrets.`)
}}

// VIA DEL HYLIA
if (via_del_hylia && action === 'search') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(`❗ ${rollResult} Although you're unable to investigate the crime scene, you notice that beyond the explosion, there were no other disturbances to the festival related to the attack. This had been carefully planned.

You realize you don't know much about Elysia, limited by time in the initial meeting, but perhaps some others will know.

Unlock secret action [ASK ABOUT ELYSIA]!`);
}
else {
setAction(`❌ ${rollResult} The spot where Elysia had disappeared is sectioned off, only accessible to trusted church members, Elysia's retainers and the police. You're unable to get close.`)
}
}

if (via_del_hylia && action === 'listen') {
const rollResult = rollD20();
if (rollResult > 10) {
setAction(
`❗ ${rollResult} "Darling, have you read the news yet? Everyone's in an uproar over that, that Vessel gone missing." Two elderly ladies are gossiping while seated at an outdoor cafe, trying to catch each other up on the recent events.

"Oooh, yes I've read. All those papers getting shoved in my nose when you can smell that fishy business from a mile away. Really, what has become of our city?"

One shakes her head and clicks her tongue. "That is just the mess you get when Voidpacts are involved. The poor girl had it in over in her head."

"Really now!"

It would be too rude to butt into the conversation but you realize reading on the news might help with your search.

Unlock secret action [BUY NEWSPAPER]!`);
}
else {
setAction(`❌ ${rollResult} Weather. Groceries. Fishing. You fail to find much information from any conversations particular to the incident.`)
}
}

// PUB
if (pub && action === 'drink') {
const rollResult = rollD20();
if (rollResult > 10) {
setAction(
`❗ ${rollResult} "You down the drink in one swig! The other customers clap along, chanting.

"What'd you need all that gusto for? Tryin' ta steal something?" A buzzed customer slaps your back and puts a terrible idea in your head.

Unlock secret action [STEAL]`);
}
else {
setAction(`❌ ${rollResult} You take a sip of feeling a bit conflicted to be out day drinking. But hey, you're a student. When else will you ever get to do it?`)
}
}

if (pub && action === 'listen') {
const rollResult = rollD20();

if (rollResult > 10) {
if (milleACOH) {
setAction(
`❗ ${rollResult} "What's all the police and Hunter's doing, eh? Can't shut down the city... in a week, I'd be outta my job if I can't get out!" One worker takes a sip of his beer, feeling buzzed.

"You tried talking to one of them? I know that Hunter girl workin' patrol. Surely she can loosen up the gates for ya."

"Right right. That Mille chick ya?"

Unlock secret action [GREET MILLE]`)
} else {
setAction(`❗ ${rollResult} "Listen to me man, I just came back from the harbor and lemme tell ya this."

"Do not fuck with the birds." A red-faced customer points at the barkeeper, who remains unimpressed by the behavior.

"You hear me! Don't! Fuck! With! Them! You'll regret it!" He slams his drink down on the counter.

Unlock secret action: [FEED THE BIRDS]`)}

} else {
setAction(`❌ ${rollResult} "Ya hear what they've been sayin'? If they don't find Elysia soon. Word is. The authorities gotta get the Starbearers to help out." One buzzed customer takes another sip from his glass.

"Naww no way. That's outta their scope. Below the paygrade." His friend shakes their head.

"Ya think so? Who knows." He shrugs again.`)}
}

// ACOH
if (acoh && action === 'train') {
const rollResult = rollD20();

if (rollResult > 17) {
setAction(`❗ ${rollResult} The Hunter's office has a training room available for students to come practice in during the day, as well as regiment courses to be followed.

You managed to finish a regiment in record time! A Hunter passing by whistles and slings his arms over your shoulder. "Heyyyy, not bad at all. We could use muscle like you in our branch. Lemme clue you in a little somethin'."

"Y'know that pub on the other side of town? They got a secret. A back room. You might find somethin' to like there. You just gotta-" And he mimicks a gun with his hands as if he's playing a convoluted game of charades.

"Aim high. Don't worry about missin'. Y'know?"

Unlock secret action █████ ███ ███ █████ `)
} else {
setAction(`❌ ${rollResult} The Hunter's office has a training room available for students to come practice in during the day, as well as regiment courses to be followed.

You managed to finish a regiment and work up a good sweat! But... Aren't there other things you should be attending to?`)
}}

// TRAIN STATION
if (train_station && action === 'listen') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(`❗ ${rollResult} Two station workers are chatting during their lunch break.

"Y'know they say the kidnapping is cuz they knew about Elysia's pro-Voidpact stance in advance. Got all the plans ready to ambush once she dropped the ball. They realllly hated Voidpacts that much, huh?"

"Well? Would you want to work with a Voidpact?"

"Yeesh... That's a curveball. Let me eat my sandwich in peace."`)
} else {
setAction(`❌ ${rollResult} You fail to hear any conversation. Instead, you're stuck at the station gate. The ticket isn't scanning and no workers are around to help.`)
}}

// BAR PATH
if (vicolo_della_stella && action === 'search') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(`❗ ${rollResult} "Extra! Extra!"

A newspaper boy is waving to the side of the street, trying to catch the eyes of the passing pedestrians. Compared to the plaza, the back of the shopping district is quite a strange choice in location.

Unlock secret action [BUY NEWSPAPER]`)
} else {
setAction(`❌ ${rollResult} You try to search the narrow streets for hidden alleyways or suspicious residential buildings, but none seem to stand out.`)
}}

// HARBOR
if (harbor && action === 'chat') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(`❗ ${rollResult} "We have been tracking the sea trade routes all week and have yet to see any suspicious boats or individuals out by the water." A Hunter lowers her binoculars to respond, standing guard by her docked ship.

"The city's working us to the bone to secure the borders. I'm certain the kidnappers have to still be in the city."

"If you don't believe me, check with the ACOH Hunters. I just saw them start their patrol today."

Unlock secret action: [GREET MILLE]`)
} else {
setAction(`❌ ${rollResult} You don't spy any uniforms from the Marine Hunter Association at the harbor. Most of them must still be out patrolling or busy at work.`)
}}


if (harbor && action === 'fish') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(`❗ ${rollResult} The line on your rod tugs and...
You caught a sea bass! No, wait- it's at least a C+!
The nearby fishermen all cheer and start sharing recipes on how to best cook the sea bass. Fried! No, steamed with soy sauce! No, pan fried with lemon and garlic!

Unlock secret action: [GIVE SEA BASS]`)
} else {
setAction(`❌ ${rollResult} The line on your rod tugs and...
You caught a horse mackerel! Of course, Mack...er...el.
A nearby fisherman politely claps at your catch before you throw it back to the sea.`)
}}

// BUSINESS
if (business && action === 'listen') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(
`❗ ${rollResult} Two voices catch your attention.

"So, it's none of the international envoys?"

"No," a hunter wearing an ochre armband shakes his head. It looks like he's a member of the ACOH. "We investigated them all, but still, no dice."

"Damn." His coworker sighs, rubbing their temples. "Guess it's back to the drawing board." The two resume their patrol and leave the area.`);
}
else {
setAction(`❌ ${rollResult} Business men are strolling down the blocks chatting on their phones with what sounds to be important financial conversations but the subject matter flies over your head.`)
}}


// SHOPPING
if (shopping && action === 'listen') {
const rollResult = rollD20();

if (rollResult > 10) {
setAction(
`❗ ${rollResult} "You would not believe the trouble it took me just to get a keycard from that hotel!" You bump into an older lady complaining to her husband on the street. Her shrill voice overpowers any other conversation.

"And now they say the machine's broken! How crazy is that! We need to find a better hotel next time, honey."

You are suddenly reminded of the debaucle at the hotel where 70% of your classmates did not receive a keycard.

Unlock secret action [ASK FOR KEYCARD]`);
}
else {
setAction(`❌ ${rollResult} What are we going to do with all our Hylia's Vessel merchandise if the real one doesn't come back?" Instead of listening for useful information, your ears catch wind to two tourists and standing outside the stores lamenting over their struggles.

"We jumped on the bandwagon too soon..."`)
}}


}

  return (
    <div className='solstia-bg'>
    <div className="main-content solstia-page">
    <div className='side-menu'>
    <b className='side-header'>LOAD MENU</b>
        {/* <button className='save-btn' onClick={() => saveState()}>SAVE</button> */}
        <button className='save-btn' onClick={() => resetStates()}>START OVER</button>
        <hr />
        <div className='quick-jump'>
            <b className='side-header'>QUICK JUMP</b>
            {Object.keys(locations).map((room) => (
            <button className='quick-jump-btn' onClick={() => jumpRoom(room)} key={room}>{room}</button>
            ))}
        </div>
    </div>

    <div className='location-content'>
        { start &&
        <div className='location-box'>
        <div className='location-title'>
            <p>☀️ SOLSTIA STREETS</p>
        </div>
        <div className='location-text'>
            <p>Hylia's Vessel, Elysia, has been kidnapped and some students had heard a cry for help in a dream. Surely searching around the city will provide the answers you and the others need to save the situation.</p>
            <p>Just be careful not to stand out too much...</p>
            <br></br>
            <p><b>INSTRUCTIONS:</b> As you play, you will discover [KEY PHRASES] that can be entered in certain locations. Be sure to visit locations frequently, as moving along may unlock new things.</p>
        </div>

        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setStart, setPlaza)}>Start</button>
        </div>
        </div>
        }

        { plaza &&
        <div className='location-box'>
        <div className='location-title'>
            <p>⛲ Plaza</p>
        </div>
        <div className='location-text'>
            <p>The plaza is circular and inlaid with glassy square tiles, centered around a large fountain. Another sculpture of the goddess Hylia walks upon the water, buoyed up above the crowd of people who can't keep her name out of their mouths.</p>
            <p>Brick roads line the perimeter, drawing attention to the colorful market stalls and newspaper stands that seem to have been set up just this morning. Shops and restaurants made of brick and mortar stretch out from the middle of the square, welcoming and bright. It's all open space, open air, with the freedom to explore just about everywhere.</p>

            { northPlaza && knowNorth &&
            <div className='story-speech npc'>
                <img src={newsboy} className='story-avatar'></img>
                    <div className="story-speech-text">
                        <div className="story-speech-name">???</div>
                        <p>"Extra! Extra!"</p>
                        <p>Buy a newspaper?</p>
                </div></div>
            }

            { northvicolo_della_stella && !knowNorth && (<p>Looks like the newspaper boy has left this area!</p>) }

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        </div>
        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
    

        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
            <button className='choice-btn' onClick={() => handleNormal('photo')}>TAKE A PHOTO</button>
        </div>
        
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setPlaza, setPark)}>⬉ City Park</button>
            <button className='route-btn' onClick={() => changeRoom(setPlaza, setvia_del_hylia)}>⬈ Path to Holy Temple</button>
            <button className='route-btn' onClick={() => changeRoom(setPlaza, setShopping)}>⬋ Shopping District</button>
            <button className='route-btn' onClick={() => changeRoom(setPlaza, setBusiness)}>⬊ Business District</button>
        </div>
        </div>
        }
        

        {park &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🌳 City Park</p>
        </div>
        <div className='location-text'>
            <p>The park is a peaceful respite from the other bustling sections in the city. Trees line up providing ample shade around the walking trails, and the air is sweet from the summer roses blooming in the gardens. Ivory statues decorate the park with more depictions of Hylia as well as other famous church members that have made their history on the city.</p>
            <p>Around this time, locals can be found taking a break on the benches from their work.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('search')}>🎲 SEARCH</button>
            <button className='choice-btn' onClick={() => handleNormal('sit')}>SIT</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setPark, setLibrary)}>⬆ Library</button>
            <button className='route-btn' onClick={() => changeRoom(setPark, setPlaza)}>⬊ Plaza</button>
        </div>
        </div>
        }


        {via_del_hylia &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🕊️ Via del Hylia</p>
        </div>
        <div className='location-text'>
            <p>The two kilometer stretch from the central plaza to the Holy Temple stands as Solstia's most iconic street, open for both pedestrians and transportation to pass, with ornate street lamps and old-styled brick buildings lining up the sides. Up ahead is the Holy Temple, its Gothic spires and stained glass windows welcoming the eyes of any visitors, beautiful at any time of the day. Historically the pathway used to host major celebrations from Hunter homecoming parades to church holidays.</p>
            <p>Parts of the street are now sectioned off, and workers are busying themselves to clear the debris after the explosion. The elaborate decorations and stalls from the ordainment ceremony have already been taken down, but some banners remain, waving despondently in the breeze.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        </div>
        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('search')}>🎲 SEARCH</button>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setvia_del_hylia, setTemple)}>⬆ The Holy Temple</button>
            <button className='route-btn' onClick={() => changeRoom(setvia_del_hylia, setPlaza)}>⬋ Plaza</button>
        </div>
        </div>
        }


        {temple &&
        <div className='location-box'>
        <div className='location-title'>
            <p>⛪ The Holy Temple</p>
        </div>
        <div className='location-text'>
            <p>The First Temple of the Goddess is a high-rise feat of architecture, layered like clouds, pink and gold. Balconies extend from the arched windows, supported by bleached granite columns. It opens up into the air with no ceilings to keep out the rain on the rooftop, and there are no ceilings for a portion of its ground floors, where sprawling inner courtyards unfurl at its center.</p>
            <p>The Holy Temple of the Goddess appeared as untouchable as heaven. As its sister, the First Temple of the Goddess welcomes the earth's children into its embrace. Wildflowers peek out over the pathways, dotting puddles of grass with butterflies and birds and a rainbow of colors; trees with green branches curl across the sky, crying like the ocean as the wind blows through their leaves. The air is stained with flavors you can't name. The right memory slips away, as the minnows do through the streams that wind throughout the inner courtyards, glimmer-quick.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('search')}>🎲 SEARCH</button>
            <button className='choice-btn' onClick={() => handleAction('chat')}>🎲 CHAT</button>
            <button className='choice-btn' onClick={() => handleNormal('pray')}>PRAY</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setTemple, setMuseum)}>⬉ Museum</button>
            <button className='route-btn' onClick={() => changeRoom(setTemple, setvia_del_hylia)}>⬇ Path to the Plaza</button>
            <button className='route-btn' onClick={() => changeRoom(setTemple, setvia_bellatrix)}>➡ Temple Side Entrance</button>
        </div>
        </div>
        }


    { museum &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🏦 Museum</p>
        </div>
        <div className='location-text'>
            <p>The Solstia Museum is a public museum that houses many works and artefacts collected by the Church of Hylia. It's lauded by many as a treasure trove of history regarding Hylia and the founding of Astralena, attracting many visitors from all across the country and even internationally. Due to its convenient location, situated just by the First Temple, visitors will often plan on going to the museum either before or after their temple visit.</p>
            <p>Working hours: 9.30am - 6pm. Closes on Sundays.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('explore')}>EXPLORE</button>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setMuseum, setLibrary)}>⬋ Library</button>
            <button className='route-btn' onClick={() => changeRoom(setMuseum, setTemple)}>⬊ The Holy Temple</button>
        </div>
        </div>
    }


    { library &&
        <div className='location-box'>
        <div className='location-title'>
            <p>📚 Library</p>
        </div>
        <div className='location-text'>
            <p>The library sits comfortably next to the city's park. It boasts a quiet atmosphere, free Wi-Fi, as well as a small coffee shop near the entrance, making it a popular choice for locals to visit. The library itself has a large selection of print and digital resources to peruse, and despite the obvious lean towards Hylia and Solstian history (including its thriving maritime industry, you note), it has more than enough variety to satisfy most of its visitors.</p>

            { knowMing && (
            <div className='story-speech npc'>
            <img src={ming} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">Ming</div>
                    <p>"I would like to remain longer and do more research on the Vessel. The borders are closed and there is no where for the kidnappers to go. This is not slacking."</p>
            </div></div>
            )}

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
            <button className='choice-btn' onClick={() => handleAction('read')}>🎲 READ</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setLibrary, setlungomare_di_solstia)}>⬆ Path to the Harbor</button>
            <button className='route-btn' onClick={() => changeRoom(setLibrary, setMuseum)}>⬈ Museum</button>
            <button className='route-btn' onClick={() => changeRoom(setLibrary, setPark)}>⬇ City Park</button>
        </div>
        </div>
    }

    { lungomare_di_solstia &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🧱 Lungomare di Solstia</p>
        </div>
        <div className='location-text'>
            <p>The road slopes down past the weathered buildings and soon opens to a view of the ocean just a few more blocks away. The seagulls, sea breeze, and palm trees all invite you to take a leisurely stroll.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
            <button className='choice-btn' onClick={() => handleNormal('listen')}>LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setlungomare_di_solstia, setHarbor)}>⬆ Harbor</button>
            <button className='route-btn' onClick={() => changeRoom(setlungomare_di_solstia, setLibrary)}>⬇ Library</button>
        </div>
        </div>
    }

    { harbor &&
        <div className='location-box'>
        <div className='location-title'>
            <p>⛵ Harbor</p>
        </div>
        <div className='location-text'>
            <p>The harbor is sweet with the smell of salt and clear water, lapping at the docks. Boats in a thousand different shapes and colors bob up and down with the currents, tied to the boardwalk with knotted rope. Fishermen call out to each other, as seagulls squawk and fly over a clear sky, as if to embody white clouds. These birds have hungry glints in their eyes... and sure enough, the signs scattered all over warn you: <i>PLEASE DO NOT FEED THE BIRDS!</i></p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
            { milleOutskirts && (
                <button className='choice-btn' onClick={() => handleAction('chat')}>🎲 CHAT</button>
            )}
            <button className='choice-btn' onClick={() => handleAction('fish')}>🎲 FISH</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setHarbor, setBeach)}>⬆ Beach</button>
            <button className='route-btn' onClick={() => changeRoom(setHarbor, setlungomare_di_solstia)}>⬇ Path to the Library</button>
        </div>
        </div>
    }

    { beach &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🏖️ Beach</p>
        </div>
        <div className='location-text'>
            <p>Wooden boards soon trade for soft sand as the path unfolds for the beach. The waves calmly lap the shore as locals and tourists alike sprawl out to enjoy the sun. On the side is a concession stand, readily open to offer frozen treats and food to passing hungry customers.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
        <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
        { northcity_gatess && (
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        )}
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setBeach, setcity_gates)}>⬆ City Gate</button>
            <button className='route-btn' onClick={() => changeRoom(setBeach, setOutskirts)}>⬈ Outskirts</button>
            <button className='route-btn' onClick={() => changeRoom(setBeach, setHarbor)}>⬇ Harbor</button>
        </div>
        </div>
    }

    { city_gates &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🏰 City Gate</p>
        </div>
        <div className='location-text'>
            <p>The road eventually flattens out to the sight of the main city gate, marked by the tall stone columns walling the entrance to Solstia by land. Several guards are stationed here, more than usual, and the large oak door is noticably closed.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

            { northcity_gatess && (
            <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
            </form>
            )}

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('search')}>🎲 SEARCH</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setcity_gates, setBeach)}>⬇ Beach</button>
        </div>
        </div>
    }


    { outskirts &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🌱 Outskirts</p>
        </div>
        <div className='location-text'>
            <p>Northeast of the beach is a steep hiking trail that leads to the rocky bluffs on the outskirts of the city. There are few reasons why anyone would venture out here, but noticably, a new fence has been added to block the road.</p>

            {knowMille && milleOutskirts && (
                <div className='story-speech npc'>
                <img src={mille} className='story-avatar'></img>
                    <div className="story-speech-text">
                        <div className="story-speech-name">Mille</div>
                        <p>The leader of the ACOH patrol team is out guarding the fence past the outskirts while discussing something about the church on the phone. She ends the call briefly when you approach.</p>
                </div></div>
            )}

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

            { milleOutskirts && (
            <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
            </form>
            )}


        </div>
        <div className='buttons-box'>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setOutskirts, setBeach)}>⬋ Beach</button>
        </div>
        </div>
    }


    { shopping &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🛍️ Shopping District</p>
        </div>
        <div className='location-text'>
            <p>Southwest of the plaza is a thriving shopping district with stores to cover everything from daily needs to gifts for others. Restaraunts, bakeries and cafes dot the blocks on one end while shoppers can browse the window displays of artisanal goods, fashion, and local art on the other.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setShopping, setPlaza)}>⬈ Plaza</button>
            <button className='route-btn' onClick={() => changeRoom(setShopping, setPub)}>⬇ Pub</button>
        </div>
        </div>
    }

    { pub &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🍺 Supergiant Pub</p>
        </div>
        <div className='location-text'>
            <p>At the end of the street lies a boisterous establishment that hosts a different atmosphere from the rest of the city. It's unusually packed during the day, and some regulars can be found at the table chatting it up with their friends and swapping gossip over a glass of beer.</p>
            <p>As you step inside, some members turn to to raise an eyebrow at the sight of your uniform.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('drink')}>🎲 DRINK</button>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setPub, setShopping)}>⬆ Shopping District</button>
            <button className='route-btn' onClick={() => changeRoom(setPub, setvicolo_della_stella)}>➡ Path to the Business District</button>
        </div>
        </div>
    }

    { vicolo_della_stella &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🧱 Vicolo della Stella</p>
        </div>
        <div className='location-text'>
            <p>Tucked between the two districts is a narrow pedestrian street. There are fewer people around, as locals are more familiar with this route than the visiting tourists. </p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('drink')}>🎲 DRINK</button>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setPub, setShopping)}>⬆ Shopping District</button>
            <button className='route-btn' onClick={() => changeRoom(setPub, setvicolo_della_stella)}>➡ Path to the Business District</button>
        </div>
        </div>
    }

    { acoh &&
        <div className='location-box'>
        <div className='location-title'>
            <p>☀️ Astralenan Commission of Hunters - Solstia Branch Office</p>
        </div>
        <div className='location-text'>
            <p>At the heart of the business district is a stately building with an eye-catching Hunters logo - the base for ACOH Hunters. Unlike the more modern offices in Hysse, its architecture has been preserved over centuries and many of its stone and cement walls are decorated with motifs of Hylia, from intricate star patterns to the spiritual symbols once believed to ward off the Void. Surely, this is one of the first Hunter offices established in Astralena.</p>

            {knowMille && milleACOH && (
                <div className='story-speech npc'>
                <img src={mille} className='story-avatar'></img>
                    <div className="story-speech-text">
                        <div className="story-speech-name">Mille</div>
                        <p>You spy Mille bustling around the ACOH office.</p>
                </div></div>
            )}

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

            { milleOutskirts && !knowMille && (
                <p>Looks like Mille's left for patrol!</p>
            )}

            {milleACOH && (
            <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
            </form>

            )}
            
        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
            <button className='choice-btn' onClick={() => handleAction('train')}>🎲 TRAIN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setACOH, setvicolo_della_stella)}>⬅ Path to the Shopping District</button>
            <button className='route-btn' onClick={() => changeRoom(setACOH, setBusiness)}>⬆ Business District</button>
        </div>
        </div>
    }

    { business &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🏨 Business District</p>
        </div>
        <div className='location-text'>
            <p>Southeast of the plaza is the higher end and slightly more modern area where all the offices and white collar workers congregate from magitech companies to financial groups to private establishments. Your hotel is also here, just two blocks away with a very convenient location for the city. No wonder it's been so busy at the counters...</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>

        </div>
        <div className='buttons-box'>
        <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => changeRoom(setBusiness, setPlaza)}>⬉ Plaza</button>
            <button className='route-btn' onClick={() => changeRoom(setBusiness, setACOH)}>⬇ ACOH</button>
        </div>
        </div>
    }


    { northI &&
        <div className='location-box'>
        <div className='location-text'>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"Extra! Extra!"</p>
            </div></div>
            <p>A young boy in a newspaper cap is waving a copy of the daily news in the air as strangers avoid eye contact and stroll past.</p>
            <p>And yet you spot his stand and approach, so he points his paper at you with an earnest gaze.</p>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"Come get the latest news on Hylia's Vessel for 5 linne!"</p>
            </div></div>
            <p>You buy a newspaper.</p>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"Thanks kindly!" The boy pockets the linne and hands you the paper.</p>
            </div></div>
            <div className='alt-font'>
            <p className='news'>📰 BREAKING NEWS: HYLIA'S VESSEL GONE MISSING</p>
            <p>The grand reveal of our next head of church has been delayed as a mystery group sweeps the Vessel right at the crux of the ordainment ceremony. What could be their motives? Will this call for Divine Punishment? The Holy Temple is in an uproar to find the Vessel and the city of Solstia has been closed off for the sake of the search...</p>
            </div>
            <p>It's all information you already knew, having attended the ordination yourself and failing to intervene.</p>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"Say... That's a fancy uniform you gots." The boy eyes with great interest. "Where ya from?"</p>
            </div></div>

            { !answer ? (
                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>
            ) : (
                null
            )}

            { answer && 
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"Voxenfelle Academy! That famous Hunter school?" His eyes light up, and he opens his mouth as if ready to ask more, before closing it shut. Hesitant.</p>
                    <p>"...How nice... Well. Good to be doin' business with ya." The newsboy returns back to his work waving newspapers from his stand.</p>
            </div></div>
            }

            <button className='route-btn' onClick={() => {changeRoom(setNorthI, setPlaza); setAnswer(false)}}>End Conversation</button>
            </div></div>
    }

    { northII &&
        <div className='location-box'>
        <div className='location-text'>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"Extra! Extra!" A familiar newspaper boy waves his copy in the streets, and you eventually buy the copy for 5 linne.</p>
            </div></div>
            <div className='alt-font'>
            <p className='news'>📰 BREAKING NEWS: SOLSTIA BORDERS ARE CLOSED!</p>
            <p>With the event of the missing Vessel, the Solstia council has declared the city under a state of emergency, closing all the city gates until the matter is resolved. No one will be allowed in or out, and all ships are to remain in the harbor until the further notice. The police and official Hunters in the city are working together to investigate the case, yet there is still no signs of the kidnappers. Who are they? What could this organization want from the Vessel?</p>
            <p>The paper makes for a good summary on the situation. The situation meaning nothing has changed.</p>
            </div>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"...Voxenfelle students." The newsboy repeats as he stares again at your uniform. "So y'all becoming Hunters right? Then y'all helpin' with the search?"</p>
            </div></div>

            { !answer ? (
                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>
            ) : (
                null
            )}

            { answer && 
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>His eyes suddenly brighten. "Can I help? I knows the streets real good. If you'se lookin' for somethin', I'll you what I know!" He tips his newsboy cap.</p>
                    <p>"...Lady Elysia, y'know. I really look up to her. An orphan like me still loved by the Goddess. She brings a lotta hope."</p>
            </div></div>
            }

            { answer && !answer2 ? (
                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>
            ) : (
                null
            )}

            { answer2 && 
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">North</div>
                    <p>"A shield...? Well I've seen one before in the museum, I think. Some other places too..." He suddenly deflates as his memory fails him. "I- I'll let you knows if I remember!"</p>
                    <p>"The name's North! I'm always out sellin' papers, you'll see me around." He holds his hand out for a shake.</p>
            </div></div>
            }

            <button className='route-btn' onClick={() => {changeRoom(setNorthII, setvicolo_della_stella); setAnswer(false); setAnswer2(false)}}>End Conversation</button>
            </div></div>
    }

    { northIII &&
        <div className='location-box'>
        <div className='location-text'>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">North</div>
                    <p>"Extra! Extra!" Another 5 linne gets exchanged for another paper.</p>
            </div></div>
            <div className='alt-font'>
            <p className='news'>📰 BREAKING NEWS: VESSEL KIDNAPPERS CONFIRMED AURA USERS</p>
            <p>While the search continues, progress has been made on the investigation as multiple witnesses reported the sign of an aura glow when the kidnappers made their escape. Some of the witnesses were students from Voxenfelle Academy and had been invited to Solstia by the church to attend the ceremony. Magitech detectors have confirmed remnants of aura usage where Lady Elysia was last seen, but the bomb itself was homemade and manually crafted.</p>
            </div>
            <p>You quickly fold up the paper again, seeing as there was nothing new to note on it.</p>
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">North</div>
                    <p>"...Hey! You're on the news!" The newsboy lightens up from recognizing your uniform. "Oh! Remember what youse asked 'bout last time?"</p>
            </div></div>

            { !answer ? (
                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>
            ) : (
                null
            )}

            { answer && 
            <div className='story-speech npc'>
            <img src={newsboy} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">???</div>
                    <p>"'Bout Orion. He's an ol' famous Hunter. Got a statue of him over on the east side of town, just past the temple." He lifts his hat down.</p>
                    <p>"Solstia has a story 'bout him. Some song to go with it too. It uh... It starts with Rigel." He starts to hum a song but loses confidence after the second note "Sorry, I don' remember the rest... Maybe if you ask around..."</p>
                    <p>Unlock secret action [ASK ABOUT RIGEL]!</p>
            </div></div>
            }

            <button className='route-btn' onClick={() => {changeRoom(setNorthIII, setcity_gates); setAnswer(false)}}>End Conversation</button>
            </div></div>
    }

    { greetMing &&
        <div className='location-box'>
        <div className='location-text'>
        <div className='story-speech npc'>
            <img src={ming} className='story-avatar'></img>
                <div className="story-speech-text">
                    <div className="story-speech-name">Ming</div>
                    <p>You notice a person in the ACOH uniform standing by the bookshelves reading up on a book on Teide. They look up when you approach.</p>
                    <p>"Hello. Were you interested in this book."</p>
                    <p>You nod your head.</p>
                    <p>They keep the book in their hands and flip to a page to start reciting a line.</p>
                    <p>"It is said that, despite being a small country, Teide was well known for its large strides in magitech engineering and anti-Voidwalker technologies. Due to this, the island lived in an unimaginable level of peace and harmony during its time."</p>
                    <p>They look at you again with a neutral expression. "Is this what you wanted to learn? If you do not have other questions, I ask that you leave me be."</p>
            </div></div>

            { replytext && <pre>{replytext}</pre> }


                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>


            <button className='route-btn' onClick={() => {changeRoom(setGreetMing, setLibrary)}}>End Conversation</button>
            </div></div>
    }

    { barkeep &&
        <div className='location-box'>
        <div className='location-text'>
            <p>"...And bear its burden."</p>
            <p>The stone faced barkeeper calmly finishes your sentence but doesn't look up until he is done polishing the glass cup, eventually setting it down on the counter with a gentle clink.</p>
            <p>"So someone gave you a tip. What are you looking for?"</p>

            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }
            { normal && <pre>{normal}</pre> }

                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>


            <button className='route-btn' onClick={() => {changeRoom(setBarkeep, setPub)}}>End Conversation</button>
            </div></div>
    }

    { birdHell &&
        <div className='location-box'>
        <div className='location-text'>
            <p>A flock of seagulls start to gather around you to enjoy the feast!</p>

            <p>...So why did you decide to do this? Even when the sign told you not to?</p>

            <p>You try to leave...</p>

            <p>The flock of seagulls surround you, and stare with beady eyes. They quietly demand more food.</p>

            { replytext && <pre>{replytext}</pre> }
            { normal && <pre>{normal}</pre> }

            <p>SEAGULL COUNTER</p> { birdCount }

                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>

                <div className='buttons-box'>
                <button className='choice-btn' onClick={() => handleNormal('feed the birds')}>FEED THE BIRDS</button>
                <button className='choice-btn' onClick={() => handleNormal('run')}>RUN</button>
                { birdDeath && (
                    <button className='choice-btn' onClick={() => handleNormal('end')}>END ADVENTURE</button>
                )}
                </div>
            </div></div>
    }

    { fatality && (
        <div className='location-box'>
        <div className='location-text alt-font' style={{color: 'red'}}>
            <p>Defeated...</p>
            <p><b>There was no end to the seagulls. Eventually, they kept flocking and flocking until your vision turns white...</b></p>
            <p className='big'><b>GAME OVER.</b></p>
            <button onClick={() => window.location.reload()}>Replay?</button>
        </div></div>
    )}

    { via_bellatrix &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🕊️ Via Bellatrix - West Side</p>
        </div>
        <div className='location-text'>
            <p>East of the Holy Temple is a long strip of road curving up to the other side of the city. You spy some private residential buildings along the walk, gated behind tall fences and hedges, exclusive to the extremely wealthy.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => jumpRoom('temple')}>⬅ Side entrance to Temple</button>
            <button className='route-btn' onClick={() => jumpRoom('east_solstia')}>➡ East Solstia</button>
        </div>
        </div>
    }
    
    { east_solstia &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🕰️ East Solstia</p>
        </div>
        <div className='location-text'>
            <p>Finally, the road opens up to a T-section, and there are more souvenir shops and malls lined up around besides the street. Up ahead is a clock tower, chiming off at every hour with a tune that is said to be Solstia's anthem.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => jumpRoom('via_bellatrix')}>⬅ Path to the Holy Temple</button>
            <button className='route-btn' onClick={() => jumpRoom('viale_degli_amanti')}>⬆ Lover's Boulevard</button>
            <button className='route-btn' onClick={() => jumpRoom('via_della_cometa')}>⬇ Path to Train Station</button>
        </div>
        </div>
    }

    { viale_degli_amanti &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🌹 Viale degli Amanti</p>
        </div>
        <div className='location-text'>
            <p>The street is also known as "Lover's Boulevard". Tree-lined and bustling, it stretches through East Solstia, offering intimate cafes, street performers, fortune tellers, and flower stalls in its path. Couples are found strolling hand in hand as they make their way up to end of the road to be rewarded with a beautiful view of the ocean around sunset time.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

            <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
            </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => jumpRoom('lookout_point')}>⬉ Lookout Point</button>
            <button className='route-btn' onClick={() => jumpRoom('east_solstia')}>⬇ East Solstia</button>
        </div>
        </div>
    }

    { lookout_point &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🔭 Lookout Point</p>
        </div>
        <div className='location-text'>
            <p>An observation deck juts out from a rocky clifftop, offering an expansive view of the ocean stretching to the horizon. Iron railings frame the lookout point, providing safety away from the steep rocky cliffs and crashing waves below. Several binoculars are positioned on the platform so families and couples alike can visit the area and enjoy the view.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

            { finalDay && (
                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>
            )}

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleNormal('look')}>LOOK</button>
            <button className='choice-btn' onClick={() => handleNormal('take a photo')}>TAKE A PHOTO</button>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => jumpRoom('viale_degli_amanti')}>⬊ Lover's Boulevard</button>
        </div>
        </div>
    }

    { sing &&
        <div className='location-box'>
        <div className='location-text'>
            <p>"Nice chords there dog." A musician looks up from his guitar to point at you.</p>
            <p>"I'mma keep playin' if you wanna join. Catch my drift?"</p>
            <p>He starts strumming on his guitar again. "Rigel marks the place to start... Ohhh would you connect the dots..."</p>
            <p>A pause on the strings. "Where is that now."</p>

        { sing0 && (
            <div>
            <p>You mention the ACOH...</p>
            <p>It doesn't really make sense, but the musician seems satisfied with your response and continues singing along.</p>
            <p><i>"West I find... Saiph in mind... Hmm hmm..."</i></p>
            <p>He pauses again to wait for your response.</p>
            </div>
        )}

            { sing1 && (
                <div>
                <p>You mention the Supergiant Pub...</p>
                <p>Getting into the groove now...</p>
                <p><i>"Head up to see, the Belt in three..."</i></p>
                </div>
            )}

            { sing2 && (
                <div>
                <p>You mention the Plaza...</p>
                <p>Getting into the groove now...</p>
                <p><i>"Betelgeuse please, be northwest of me..."</i></p>
                </div>
            )}

            { sing3 && (
                <div>
                <p>You mention the Library...</p>
                <p><i>"At the head of the giant, Meissa my one and..."</i></p>
                </div>
            )}

            { sing4 && (
                <div>
                <p>You mention the Holy Temple...</p>
                <p>With a velvety voice, he sings another chorus before finishing his song.</p>
                <p>"...Not bad, not bad. You know your way around the city." The musician holds out a hand to shake.</p>
                <p>"Thanks for jammin'. Go check out the map at the station sometime if you travelers wanna learn a lil piece of here."</p>
                <p>Unlock secret action: [LOOK AT SOLSTIA MAP]</p>
                </div>
            )}

            { !sing4 && (
                <form className='action-box' onSubmit={handleSubmit}>
                <input className='action-text'
                    type="text"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    required
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>
            )}

        </div>
        <div className='buttons-box'>
            { !sing4 ? (
            <button className='route-btn' onClick={() => {jumpRoom('lookout_point'); sing0(false); sing1(false); sing2(false); sing3(false); sing4(false)}}>CONCEDE</button>
            ) : (
                <button className='route-btn' onClick={() => {jumpRoom('lookout_point'); sing0(false); sing1(false); sing2(false); sing3(false); sing4(false)}}>CONTINUE</button>
            )}
        </div>
        </div>
    }

    { via_della_cometa &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🧱 Via della Cometa</p>
        </div>
        <div className='location-text'>
            <p>On the path towards the train station are weathered brick buildings with small shops and cafes leaning close to the street's edge. Along the way, a stray black cat is spotted resting on a brick fence.</p>
            
            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

            { finalDay && (
            <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
            </form>)}

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => jumpRoom('east_solstia')}>⬆ East Solstia</button>
            <button className='route-btn' onClick={() => jumpRoom('train_station')}>⬋ Train Station</button>
        </div>
        </div>
    }

    { train_station &&
        <div className='location-box'>
        <div className='location-title'>
            <p>🚂 Train Station</p>
        </div>
        <div className='location-text'>
            <p>The Solstia Central Station is half the size of the Grand Hysse Station, but the statue of the goddess Hylia at its center is just as majestic, and perhaps even more well-loved than the one in the capital. People would line up in front of Her, following an age-old tradition: touch Her hand to feel Her warm welcome, when they arrive in Solstia, the Holy City.</p>
            <p>Unfortunately, trains are stopped at the moment due to the kidnapping incident, and there are few people out at the train station. It looks almost abandoned.</p>

            { normal && <pre>{normal}</pre> }
            { action && <pre>{action}</pre> }
            { replytext && <pre>{replytext}</pre> }

            { hasMap && (<img src="https://i.ibb.co/58dG9YQ/Illustration49.png"></img>)}
            
            <form className='action-box' onSubmit={handleSubmit}>
            <input className='action-text'
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                required
            />
            <button type="submit" className='submit-btn'>Submit</button>
            </form>

        </div>
        <div className='buttons-box'>
            <button className='choice-btn' onClick={() => handleAction('listen')}>🎲 LISTEN</button>
        </div>
        <div className='buttons-box'>
            <button className='route-btn' onClick={() => jumpRoom('train_station')}>⬈ Back out Train Station</button>
        </div>
        </div>
    }

    </div></div></div>
  );
}

export default SolstiaStreets;
