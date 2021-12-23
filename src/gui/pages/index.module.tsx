import Roact from "@rbxts/roact";
import { Route } from "@rbxts/roact-router";
import LinkButton from "../../gui/components/LinkButton.module";
import { colors } from "../../config.module";

interface IndexPageProps {}
interface IndexPageState {}

export default class IndexPage extends Roact.Component<IndexPageProps, IndexPageState> {
	render() {
		return (
			<Route
				path="/"
				exact={true}
				render={function (routeProps) {
					return (
						<frame Size={new UDim2(1, 0, 1, 0)} BorderSizePixel={0} BackgroundColor3={colors.background}>
							<LinkButton path="/test" text="To Text" routeProps={routeProps} />
						</frame>
					);
				}}
			></Route>
		);
	}
}
