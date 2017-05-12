/**
 * Created by hyylsw on 2017/5/12.
 */
const gulp=require("gulp");
const browserSync=require("browser-sync").create();
const reload=browserSync.reload;

gulp.task("serve",function () {
    let files=["./**/*"];
    browserSync.init({
        files:files,
        proxy:"http://localhost:3000/"
    });
    gulp.on("change",reload);
});
gulp.task("default",["serve"]);



