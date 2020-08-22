const gulp = require("gulp");

/*gulp-sass  gulp-minify-css  gulp-rename*/
const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const { src } = require("gulp");

gulp.task("sass",function(){
    return gulp.src("stylesheet/*{.scss,.sass}")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
/*未压缩*/
gulp.task("scripts",function(){
    return gulp.src("js/*js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})


gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

gulp.task("images",function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

gulp.task("build",["sass","scripts","copy-html","images","data"],function(){
    console.log("项目建立成功");
})

// 启动监听
gulp.task("watch",function(){
    gulp.watch("stylesheet/*{.scss,.sass}",["sass"]);
    gulp.watch("js/*js",["scripts"]);
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("images/**/*",["images"]);
    gulp.watch("*.json",["data"]);
})

// 启动服务器
const connect = require("gulp-connect");
gulp.task("sever",function(){
    connect.server({
        root:"dist",
        port:8887,
        livereload:true//实时刷新
    })
})

gulp.task("default",["watch","sever"]);
