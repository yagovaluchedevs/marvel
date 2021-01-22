import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharactersColletion from "../CharactersCollection";
import AboutTheCharacter from "../AboutTheCharacter";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CharactersColletion} />
        <Route
          exact
          path="/detalhe-do-personagem/:id"
          component={AboutTheCharacter}
        />
      </Switch>
    </BrowserRouter>
  );
}
