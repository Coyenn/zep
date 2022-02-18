import Roact from "@rbxts/roact";
import { TextService } from "@rbxts/services";
import { colors } from "../../config.module";

interface ChatBubbleProps {
  isFromLocalPlayer: boolean;
  text: string;
  sender?: string;
}

export default class ChatBubble extends Roact.Component<ChatBubbleProps> {
  constructor(props: ChatBubbleProps) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <frame
        Size={new UDim2(1, 0, 0, 10)}
        BackgroundTransparency={1}
        AutomaticSize={Enum.AutomaticSize.Y}
      >
        <textlabel
          Text={props.text}
          TextColor3={
            props.isFromLocalPlayer ? colors.text : Color3.fromRGB(0, 0, 0)
          }
          TextSize={16}
          Font={Enum.Font.Roboto}
          TextXAlignment={Enum.TextXAlignment.Left}
          TextYAlignment={Enum.TextYAlignment.Top}
          TextWrapped={true}
          AutomaticSize={Enum.AutomaticSize.Y}
          BackgroundColor3={
            props.isFromLocalPlayer ? colors.main : colors.secondary
          }
          Size={new UDim2(1, 0, 1, 0)}
          ZIndex={2}
          Position={
            props.isFromLocalPlayer
              ? new UDim2(1, 0, 0, 0)
              : new UDim2(0, 0, 0, 0)
          }
          AnchorPoint={
            props.isFromLocalPlayer ? new Vector2(1, 0) : new Vector2(0, 0)
          }
        >
          <uicorner CornerRadius={new UDim(0, 20)} />
          <uisizeconstraint MaxSize={new Vector2(300, math.huge)} />
          <uipadding
            PaddingLeft={new UDim(0, 10)}
            PaddingRight={new UDim(0, 10)}
            PaddingTop={new UDim(0, 10)}
            PaddingBottom={new UDim(0, 10)}
          />
        </textlabel>
        <textlabel
          TextColor3={colors.secondaryText}
          BackgroundTransparency={1}
          Size={new UDim2(1, 0, 0, 10)}
          Position={new UDim2(0, 0, 1, 10)}
          Text={props.isFromLocalPlayer ? "You" : props.sender}
          TextXAlignment={
            props.isFromLocalPlayer
              ? Enum.TextXAlignment.Right
              : Enum.TextXAlignment.Left
          }
        >
          <uipadding
            PaddingLeft={
              props.isFromLocalPlayer ? new UDim(0, 0) : new UDim(0, 10)
            }
            PaddingRight={
              props.isFromLocalPlayer ? new UDim(0, 10) : new UDim(0, 0)
            }
          />
        </textlabel>
      </frame>
    );
  }
}
