import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterColletion from "../CharacterColletion";
import AboutTheCharacter from "../AboutTheCharacter";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CharacterColletion} />
        <Route
          exact
          path="/detalhe-do-personagem/:id"
          component={AboutTheCharacter}
        />
      </Switch>
    </BrowserRouter>
  );
}
