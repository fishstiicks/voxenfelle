import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as characterActions from '../../store/characters';

const EditCharacterModal = ({ character, refreshCharacter, handleNameChange }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [mun] = useState(character.mun);
  const [name, setName] = useState(character.name);
  const [fullName, setFullName] = useState(character.fullName);
  const [pronouns, setPronouns] = useState(character.pronouns || '');
  const [height, setHeight] = useState(character.height || '');
  const [weapon, setWeapon] = useState(character.weapon || '');
  const [power, setPower] = useState(character.power || '');
  const [picrew, setPicrew] = useState(character.picrew || '');
  const [state, setState] = useState(character.state || 'NPC');
  const [lineage, setLineage] = useState(character.lineage || 'Civilian');
  const [source, setSource] = useState(character.source || 'Aura');
  const [hexcode, setHexcode] = useState(character.hexcode || '');
  const [reputation, setReputation] = useState(character.reputation || '');
  const [className, setClassName] = useState(character.class || '');
  const [dorm, setDorm] = useState(character.dorm || '');
  const [str, setStr] = useState(character.str || 0);
  const [dex, setDex] = useState(character.dex || 0);
  const [con, setCon] = useState(character.con || 0);
  const [cha, setCha] = useState(character.cha || 0);
  const [int, setInt] = useState(character.int || 0);
  const [mag, setMag] = useState(character.mag || 0);
  const [soulbond, setSoulbond] = useState(character.soulbond || false);
  const [souldrop, setSouldrop] = useState(character.souldrop || false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCharacterData = {
      mun,
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
      soulbond,
      souldrop,
    };

    dispatch(characterActions.updateCharacterData(character.name, updatedCharacterData))
      .then(() => {
        closeModal();
        refreshCharacter();
        handleNameChange(name);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Character</h2>
        <form onSubmit={handleSubmit}>
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
            <span>Height</span>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          {errors.height && <p>{errors.height}</p>}

          <label>
            <span>Weapon</span>
            <input
              type="text"
              value={weapon}
              onChange={(e) => setWeapon(e.target.value)}
            />
          </label>
          {errors.weapon && <p>{errors.weapon}</p>}

          <label>
            <span>Power</span>
            <input
              type="text"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </label>
          {errors.power && <p>{errors.power}</p>}

          <label>
            <span>Picrew URL</span>
            <input
              type="text"
              value={picrew}
              onChange={(e) => setPicrew(e.target.value)}
            />
          </label>
          {errors.picrew && <p>{errors.picrew}</p>}

          <label>
            <span>State</span>
            <select value={state} onChange={(e) => setState(e.target.value)} required>
              <option value="PC">PC</option>
              <option value="NPC">NPC</option>
            </select>
          </label>
          {errors.state && <p>{errors.state}</p>}

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
            </select>
          </label>
          {errors.source && <p>{errors.source}</p>}

          <label>
            <span>Hexcode</span>
            <input
              type="text"
              value={hexcode}
              onChange={(e) => setHexcode(e.target.value)}
              required
            />
          </label>
          {errors.hexcode && <p>{errors.hexcode}</p>}

          <label>
            <span>Reputation</span>
            <input
              type="text"
              value={reputation}
              onChange={(e) => setReputation(e.target.value)}
              required
            />
          </label>
          {errors.reputation && <p>{errors.reputation}</p>}

          <label>
            <span>Class</span>
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />
          </label>
          {errors.class && <p>{errors.class}</p>}

          <label>
            <span>Dorm</span>
            <input
              type="text"
              value={dorm}
              onChange={(e) => setDorm(e.target.value)}
              required
            />
          </label>
          {errors.dorm && <p>{errors.dorm}</p>}

          <div>
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

          <label>
            <span>Soulbond</span>
            <input
              type="checkbox"
              checked={soulbond}
              onChange={(e) => setSoulbond(e.target.checked)}
            />
          </label>

          <label>
            <span>Souldrop</span>
            <input
              type="checkbox"
              checked={souldrop}
              onChange={(e) => setSouldrop(e.target.checked)}
            />
          </label>

          <div className="form-buttons">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCharacterModal;
