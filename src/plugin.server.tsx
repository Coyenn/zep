/// <reference types="@rbxts/types/plugin" />
import pluginWindow from "./services/pluginWindow.module";
import defaultConfig from "./config.module";

function main() {
  const newPluginWindow = new pluginWindow(plugin);
  const toolbar = plugin.CreateToolbar(defaultConfig.pluginName);
  const toggleButton = toolbar.CreateButton(
    defaultConfig.toggleButtonText,
    defaultConfig.toggleButtonTooltip,
    defaultConfig.pluginIconId
  );

  toggleButton.Click.Connect(() => {
    newPluginWindow.toggle();
  });
}

main();
