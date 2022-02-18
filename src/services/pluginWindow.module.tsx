import pluginGuiHandler from "./pluginGui.module";
import defaults from "../config.module";

export default class pluginWindow {
  pluginWindow;
  pluginWindowInfo;
  pluginGui;

  constructor(plugin: Plugin) {
    this.pluginWindowInfo = defaults.pluginWindowConfig;
    this.pluginWindow = plugin.CreateDockWidgetPluginGui(
      "pluginWindow",
      this.pluginWindowInfo
    );

    this.pluginWindow.Enabled = false;
    this.pluginGui = new pluginGuiHandler(this.pluginWindow).load();
  }

  toggle() {
    this.pluginWindow.Enabled = !this.pluginWindow.Enabled;
  }
}
