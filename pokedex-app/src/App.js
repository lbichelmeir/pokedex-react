import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
// import { ApolloProvider } from 'react-apollo';

import {PokemonsContainer} from './containers/PokemonsContainer'
function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  })
  return (
    <ApolloProvider client={client}>
      <main>
        <h1> Pokedex</h1>
        <PokemonsContainer />
      </main>

    </ApolloProvider>
  );
}

export default App;
