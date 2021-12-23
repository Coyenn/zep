import Roact from "@rbxts/roact";
import { colors } from "../../config.module";

export default class App extends Roact.Component {
	render() {
		return (
			<textbox
				TextSize={16}
				Size={new UDim2(1, 0, 0, 50)}
				Position={new UDim2(0, 0, 1, -50)}
				BackgroundTransparency={0}
				BackgroundColor3={colors.foreground}
				TextColor3={colors.text}
				Font={Enum.Font.SourceSans}
				BorderSizePixel={1}
				BorderColor3={colors.border}
				TextXAlignment={Enum.TextXAlignment.Left}
				Text="Write something..."
				TextWrapped={true}
			>
				<uipadding
					PaddingLeft={new UDim(0, 10)}
					PaddingRight={new UDim(0, 10)}
					PaddingTop={new UDim(0, 10)}
					PaddingBottom={new UDim(0, 10)}
				/>
			</textbox>
		);
	}
}
