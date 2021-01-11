import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharactersColletion from "../../page/CharactersCollection";
import AboutTheCharacter from "../../page/AboutTheCharacter";

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
