import Roact from "@rbxts/roact";
import { colors } from "../../config.module";

export default class Navbar extends Roact.Component {
  render() {
    return (
      <frame
        Size={new UDim2(1, 0, 0, 50)}
        Position={new UDim2(0, 0, 0, 0)}
        BackgroundTransparency={0}
        BackgroundColor3={colors.foreground}
      />
    );
  }
}
