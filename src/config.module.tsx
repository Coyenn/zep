const defaults = {
  pluginName: "Plugin",
  toggleButtonText: "Toggle",
  toggleButtonTooltip: "Toggle the plugin window.",
  pluginIconId: "",
  pluginWindowConfig: new DockWidgetPluginGuiInfo(
    Enum.InitialDockState.Right,
    true,
    false,
    300,
    500,
    300,
    250
  ),
};

export default defaults;

export const colors = {
  background: Color3.fromRGB(46, 46, 46),
  foreground: Color3.fromRGB(53, 53, 53),
  border: Color3.fromRGB(31, 31, 31),
  text: Color3.fromRGB(204, 204, 204),
  secondaryText: Color3.fromRGB(130, 130, 130),
  hover: Color3.fromRGB(60, 60, 60),
  main: Color3.fromRGB(0, 119, 248),
  secondary: Color3.fromRGB(232, 232, 234),
};
