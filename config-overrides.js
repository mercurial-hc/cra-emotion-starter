/* eslint-disable */
const {
  override,
  addBabelPreset,
  addBabelPlugins,
  addBundleVisualizer,
} = require("customize-cra");

module.exports = override(
  ...addBabelPlugins("emotion"),
  addBundleVisualizer(
    {
      analyzerMode: "static",
      reportFilename: "report.html",
    },
    true
  ),
  addBabelPreset("@emotion/babel-preset-css-prop")
);
