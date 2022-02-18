import Roact from "@rbxts/roact";
import { History } from "@rbxts/roact-router";
import { HistoryEntry } from "@rbxts/roact-router/typings/History";
import { PathMatchResults } from "@rbxts/roact-router/typings/Path";
import { colors } from "../../config.module";

interface RouteRendererProps {
  match: PathMatchResults | undefined;
  location: HistoryEntry;
  history: History;
}

interface LinkButtonProps {
  routeProps: RouteRendererProps;
  path: string;
  text: string;
  size?: UDim2;
  position?: UDim2;
}

interface LinkButtonState {
  isHovered: boolean;
}

export default class LinkButton extends Roact.Component<
  LinkButtonProps,
  LinkButtonState
> {
  constructor(props: LinkButtonProps) {
    super(props);
  }

  didMount() {
    this.setState({
      isHovered: false,
    });
  }

  render() {
    const props: LinkButtonProps = this.props;
    const state = this.state;
    const setState = (stateToSetTo: LinkButtonState) => {
      this.setState(stateToSetTo);
    };

    return (
      <textbutton
        Text={props.text}
        TextSize={16}
        Size={props.size || new UDim2(1, 0, 0, 50)}
        Position={props.position || new UDim2(0, 0, 0, 0)}
        BackgroundTransparency={0}
        BackgroundColor3={state.isHovered ? colors.hover : colors.foreground}
        TextColor3={colors.text}
        Font={Enum.Font.SourceSans}
        AutoButtonColor={false}
        BorderSizePixel={1}
        BorderColor3={colors.border}
        Event={{
          MouseButton1Click: function () {
            props.routeProps.history.push(props.path, undefined);
          },
          MouseEnter: function () {
            setState({
              isHovered: true,
            });
          },
          MouseLeave: function () {
            setState({
              isHovered: false,
            });
          },
        }}
      ></textbutton>
    );
  }
}
