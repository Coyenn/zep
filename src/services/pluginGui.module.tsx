import Roact from "@rbxts/roact";
import App from "../gui/components/App.module";
import defaultConfig from "../config.module";

export default class pluginGui {
	mount;

	constructor(mount: DockWidgetPluginGui) {
		this.mount = mount;
	}

	load() {
		Roact.mount(<App />, this.mount, defaultConfig.pluginName + "Gui");
	}
}
