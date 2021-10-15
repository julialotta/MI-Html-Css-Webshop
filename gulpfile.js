var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var csso = require("gulp-csso");
var rename = require("gulp-rename");

gulp.task("compile", function () {
  return gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("css"));
});

gulp.task("minify", function () {
  return gulp
    .src("./css/main.css")
    .pipe(csso())
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("watch-sass", function () {
  gulp.watch("sass/**/*.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile", "watch-sass"), function () {});
