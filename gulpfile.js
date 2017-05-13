/**
 * Created by hyylsw on 2017/5/12.
 */
const gulp=require("gulp");
const browserSync=require("browser-sync").create();

gulp.task("serve",function () {
    browserSync.init({
        port:2017,
        server:{
            baseDir:["."]
        }
    });
    gulp.watch("*.html",["html"]);
});

//操作html文件
gulp.task("html",function () {
    gulp.src("*.html")
        .pipe(browserSync.stream());
});


gulp.task("default",["serve"]);



