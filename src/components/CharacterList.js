import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCharacterProfile,
} from '../redux/character/actions';

const CharacterList = ({ characters, setCharacter }) =>
  <div id='character-list' className='col-md-6'>
    <h1>Characters</h1>
    <ul>
      {characters.map((c, i) =>
        <li
          onClick={setCharacter(i + 1)}
          key={c.name}
        >
          {c.name}
        </li>
      )}
    </ul>
  </div>;

// `{ characters }` is state of store that you passed in at app.js
const mapStateToProps = ({ characters }) => ({
  characters,
});

// `dispatch` is also of store in app.js
const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    };
  },
});

// `connect` makes `characters` which is a prop of `mapStateToProps` and `etCharacter` of `mapDispatchToProps` to be parameter of `CharacterList` function
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
