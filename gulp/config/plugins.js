import replace from "gulp-replace";
import browsersync from "browser-sync";
import ifPlugins from "gulp-if";

export const plugins = {
  replace: replace,
  browsersync: browsersync,
  if: ifPlugins,
}
