import Roact from "@rbxts/roact";
import { Route } from "@rbxts/roact-router";
import LinkButton from "../../gui/components/LinkButton.module";
import { colors } from "../../config.module";
import ChatBubble from "../../gui/components/ChatBubble.module";
import ChatField from "../../gui/components/ChatField.module";

export default function IndexPage() {
  return (
    <Route
      path="/test"
      exact={true}
      render={function (routeProps) {
        return (
          <>
            <frame
              Size={new UDim2(1, 0, 1, 0)}
              BorderSizePixel={0}
              BackgroundColor3={colors.background}
            >
              <uilistlayout Padding={new UDim(0, 10)} />
              <LinkButton path="/" text="Back" routeProps={routeProps} />
              <frame
                Size={new UDim2(1, 0, 1, 0)}
                BorderSizePixel={0}
                BackgroundColor3={colors.background}
              >
                <uipadding
                  PaddingLeft={new UDim(0, 10)}
                  PaddingRight={new UDim(0, 10)}
                />
                <uilistlayout Padding={new UDim(0, 10)} />
                <ChatBubble
                  text="This is a cool chatbubble!"
                  isFromLocalPlayer={false}
                  sender="Chahier"
                />
                <ChatBubble
                  text="This is a cool chatbubble!"
                  isFromLocalPlayer={true}
                />
                <ChatBubble
                  text="This is a cool chatbubble!"
                  isFromLocalPlayer={false}
                  sender="Chahier"
                />
              </frame>
            </frame>
            <ChatField />
          </>
        );
      }}
    ></Route>
  );
}
