import Roact, { Component } from "@rbxts/roact";
import Navbar from "../../gui/components/Navbar.module";
import IndexPage from "../pages/index.module";
import TestPage from "../../gui/pages/testPage.module";
import { Router } from "@rbxts/roact-router";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <IndexPage />
        <TestPage />
      </Router>
    );
  }
}
