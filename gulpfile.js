// Osnovnoi modul
import gulp from "gulp";
// import pytei
import { path } from "./gulp/config/path.js";
// import общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// peredacha zhachenie v global peremen
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";


function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
}


const mainTasks = gulp.series( gulp.parallel(copy, html, scss, js, img));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTasks);

export { dev }
export { build }

// действия поумолчанию
gulp.task('default', dev);
