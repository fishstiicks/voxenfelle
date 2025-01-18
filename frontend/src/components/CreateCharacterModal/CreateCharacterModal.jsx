import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as characterActions from '../../store/characters';

function CreateCharacterModal({refreshCharacters}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const sessionUser = useSelector(state => state.session.user);

  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [height, setHeight] = useState("");
  const [weapon, setWeapon] = useState("");
  const [power, setPower] = useState("");
  const [picrew, setPicrew] = useState("");
  const [state, setState] = useState("PC");
  const [lineage, setLineage] = useState("Civilian");
  const [source, setSource] = useState("Aura");
  const [hexcode, setHexcode] = useState("");
  const [reputation, setReputation] = useState("");
  const [className, setClassName] = useState("2-A");
  const [dorm, setDorm] = useState("101");
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [con, setCon] = useState(0);
  const [cha, setCha] = useState(0);
  const [int, setInt] = useState(0);
  const [mag, setMag] = useState(0);
  const [soulbond, setSoulbond] = useState(false);
  const [souldrop, setSouldrop] = useState(false);
  const [errors, setErrors] = useState({});

  if (!sessionUser) {
    return <div>You must be logged in to create a character.</div>;
  }

  const convertCm = (cm) => {
    const inches = cm * 0.393701;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}' ${remainingInches}"`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const characterData = {
      mun: sessionUser.username,
      name,
      fullName,
      pronouns,
      height,
      weapon,
      power,
      picrew,
      state,
      lineage,
      source,
      hexcode,
      reputation,
      class: className,
      dorm,
      str,
      dex,
      con,
      cha,
      int,
      mag,
      soulbond: false,
      souldrop: false,
    };

    dispatch(characterActions.createCharacter(characterData))
    .then(() => {
      closeModal();
      refreshCharacters();
    })
    .catch(async (res) => {
      const data = await res.json();
      if (data?.errors) {
        setErrors(data.errors);
      }
    });
  };

  return (
    <>
      <h1>Create Character</h1>
      <form onSubmit={handleSubmit}>
      <label>
          <span>Picrew URL</span>
          <input
            type="text"
            value={picrew}
            onChange={(e) => setPicrew(e.target.value)}
            required
          />
        </label>
        {errors.picrew && <p>{errors.picrew}</p>}

        <label>
          <span>Type</span>
          <select value={state} onChange={(e) => setState(e.target.value)} required>
            <option value="PC">PC</option>
            <option value="NPC">NPC</option>
          </select>
        </label>
        {errors.state && <p>{errors.state}</p>}

        <label>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        {errors.name && <p>{errors.name}</p>}

        <label>
          <span>Full Name</span>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        {errors.fullName && <p>{errors.fullName}</p>}

        <label>
          <span>Pronouns</span>
          <input
            type="text"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
          />
        </label>
        {errors.pronouns && <p>{errors.pronouns}</p>}

        <label>
        <span>Height (cm)</span>
        <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
        />
        </label>
        {height && (
        <p className="ft-text">&nbsp;Converted Height: {convertCm(height)}</p>
        )}
        {errors.height && <p>{errors.height}</p>}

        <label>
          <span>Weapon</span>
          <textarea
            id="description"
            value={weapon}
            onChange={(e) => setWeapon(e.target.value)}
            required
          />
        </label>
        {errors.weapon && <p>{errors.weapon}</p>}

        <label>
          <span>Power</span>
          <textarea
            id="description"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            required
          />
        </label>
        {errors.power && <p>{errors.power}</p>}

        <label>
          <span>Reputation</span>
          <textarea
            id="description"
            type="text"
            value={reputation}
            onChange={(e) => setReputation(e.target.value)}
            required
          />
        </label>
        {errors.reputation && <p>{errors.reputation}</p>}

        <label>
          <span>Lineage</span>
          <select value={lineage} onChange={(e) => setLineage(e.target.value)} required>
            <option value="Civilian">Civilian</option>
            <option value="Noble">Noble</option>
          </select>
        </label>
        {errors.lineage && <p>{errors.lineage}</p>}

        <label>
          <span>Source</span>
          <select value={source} onChange={(e) => setSource(e.target.value)} required>
            <option value="Aura">Aura</option>
            <option value="Void">Void</option>
            <option value="None">None</option>
          </select>
        </label>
        {errors.source && <p>{errors.source}</p>}

        <label>
          <span>Hexcode</span>
          <input
            type="text"
            placeholder="(fill with # if aura)"
            value={hexcode}
            
            onChange={(e) => setHexcode(e.target.value)}
          />
        </label>
        {errors.hexcode && <p>{errors.hexcode}</p>}

        <label>
          <span>Class</span>
          <select value={className} onChange={(e) => setClassName(e.target.value)} required>
            <option value="2-A">2-A</option>
            <option value="2-B">2-B</option>
            <option value="2-C">2-C</option>
          </select>
        </label>
        {errors.class && <p>{errors.class}</p>}

        <label>
          <span>Dorm</span>
          <select value={dorm} onChange={(e) => setDorm(e.target.value)} required>
            <option value="101">101</option>
            <option value="102">102</option>
            <option value="103">103</option>
            <option value="104">104</option>
            <option value="105">105</option>
            <option value="106">106</option>
            <option value="201">101</option>
            <option value="202">202</option>
            <option value="203">203</option>
            <option value="204">204</option>
            <option value="205">205</option>
            <option value="206">206</option>
            <option value="301">301</option>
            <option value="302">302</option>
            <option value="303">303</option>
            <option value="304">304</option>
            <option value="305">305</option>
            <option value="306">306</option>
            <option value="401">401</option>
            <option value="402">402</option>
            <option value="403">403</option>
            <option value="404">404</option>
            <option value="405">405</option>
            <option value="406">406</option>
          </select>
        </label>
        {errors.dorm && <p>{errors.dorm}</p>}

        <div id="table-boxes">
          <label>
            <span>Strength</span>
            <input
              type="number"
              value={str}
              onChange={(e) => setStr(e.target.value)}
              required
            />
          </label>
          {errors.str && <p>{errors.str}</p>}

          <label>
            <span>Dexterity</span>
            <input
              type="number"
              value={dex}
              onChange={(e) => setDex(e.target.value)}
              required
            />
          </label>
          {errors.dex && <p>{errors.dex}</p>}

          <label>
            <span>Constitution</span>
            <input
              type="number"
              value={con}
              onChange={(e) => setCon(e.target.value)}
              required
            />
          </label>
          {errors.con && <p>{errors.con}</p>}

          <label>
            <span>Charisma</span>
            <input
              type="number"
              value={cha}
              onChange={(e) => setCha(e.target.value)}
              required
            />
          </label>
          {errors.cha && <p>{errors.cha}</p>}

          <label>
            <span>Intelligence</span>
            <input
              type="number"
              value={int}
              onChange={(e) => setInt(e.target.value)}
              required
            />
          </label>
          {errors.int && <p>{errors.int}</p>}

          <label>
            <span>Magic</span>
            <input
              type="number"
              value={mag}
              onChange={(e) => setMag(e.target.value)}
              required
            />
          </label>
          {errors.mag && <p>{errors.mag}</p>}
        </div>

          <div className="form-buttons">
            <button type="submit">Create Character</button>
            <button type="button" onClick={closeModal} className="cancel-btn">Cancel</button>
          </div>
        </form>
    </>
  );
}

export default CreateCharacterModal;
