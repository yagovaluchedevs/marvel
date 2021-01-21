import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharactersColletion from "../../page/CharactersCollection/index";
import AboutTheCharacter from "../../page/AboutTheCharacter/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={CharactersColletion} />
        <Route
          exact
          path="/detalhe-do-personagem/:id"
          component={AboutTheCharacter}
        />
      </Switch>
    </BrowserRouter>
  );
}
