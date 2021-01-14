import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AuthScreen } from "./auth/AuthScreen";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://homework.nextbil.com/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthScreen />
    </ApolloProvider>
  );
}

export default App;
