import { StyleSheet, View } from 'react-native';
import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Header from './components/Header';


const initialState = {
  items: [
  ]
};

const listReducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat([
          { id: uuid(), name: action.payload }
        ])
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload.id
        )
      }
    default:
      return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const { items } = state;

  return (
    <View>
      <Header style={styles.appHeader} />
      <View styles={styles.containerOne}>
        <View styles={styles.inputContainer}>
          <AddItem dispatch={dispatch} />
        </View>
        <View>
          {items.map((item) => {
            return (
              <ListItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#b3926c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    color: '#efebe2',
    fontFamily: "'League Spartan', sans-serif",
    display: 'block',
    borderRadius: '1.1rem',
  },

  containerOne: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    backgroundColor: '#ABB0B8',
    padding: '2rem',
    borderRadius: '1.2rem',
    maxWidth: '300px',
    margin: '0 auto',
    textAlign: 'center',
  },

  inputContainer: {
    borderRadius: '20px',
    fontFamily: "'Libre Baskerville', sans-serif"
  }

});
