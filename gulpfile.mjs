import gulp from "gulp";
import debug from "gulp-debug";
import svgSprite from "gulp-svg-sprite";
import webp from "gulp-webp";
import imageminWebp from "imagemin-webp";
import { deleteSync } from "del";
import favicons from "gulp-favicons";
import concatFilenames from "gulp-concat-filenames";

// Create favicon
gulp.task("favicons", () => {
  return gulp
    .src("src/assets/favicon/*.*")
    .pipe(
      favicons({
        appShortName: "Favorite House",
        appName: "Favorite House Web",
        description: "Favorite House",
        lang: "ru-RU",
        theme_color: "#F4F4F4",
        background: "#F4F4F4",
        path: "favicons/",
        start_url: "/",
        icons: {
          appleIcon: true,
          favicons: ["favicon.ico"],
          online: false,
          appleStartup: false,
          android: true,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false,
        },
      })
    )
    .pipe(gulp.dest("public/favicons/"));
});

// SVG Config
const configSvgSprite = {
  mode: {
    stack: {
      sprite: "../icons.svg",
    },
  },
};

// SVG-icons
gulp.task("sprites", () => {
  return gulp
    .src("src/assets/icons/*.svg")
    .pipe(svgSprite(configSvgSprite))
    .pipe(gulp.dest("src/assets/icons/sprites"))
    .pipe(
      debug({
        title: "Sprites",
      })
    );
});

function fileNameFormatter(filename) {
  return "" + filename.replace(/(.svg)/g, "") + ",";
}

const concatFilenamesOptions = {
  root: "./src/assets/icons/",
  template: fileNameFormatter,
};

gulp.task("listOfIcons", () => {
  return gulp
    .src("src/assets/icons/*.svg")
    .pipe(concatFilenames("fileicons.md", concatFilenamesOptions))
    .pipe(gulp.dest("src/stories/assets/sprites"));
});

// Clean svg-icon folder
gulp.task("cleanSvgIcons", (done) => {
  deleteSync("src/assets/images/icons/*.svg}");
  done();
});

// Convert images
gulp.task("images", () => {
  return gulp
    .src("src/assets/images/**/*.{jpeg,jpg,png,!svg,!webp}")
    .pipe(
      webp(
        imageminWebp({
          lossless: true,
          quality: 80,
          alphaQuality: 100,
        })
      )
    )
    .pipe(gulp.dest("src/assets/images"));
});
gulp.task("cleanImages", (done) => {
  deleteSync("src/assets/images/**/*.{jpeg,jpg,png,!svg,!webp}");
  done();
});

// Gulp Watch
gulp.task("watch", () => {
  gulp.watch("src/assets/icons/*.svg", gulp.series("sprites"));
  gulp.watch(
    ["src/assets/images/**/*.{jpeg,jpg,png,!svg,!webp}"],
    gulp.series("images", "cleanImages")
  );
});

// Convert Images To Webp
export const imagesBuild = gulp.series("images");
// Build Favicons
export const faviconBuild = gulp.series("favicons");
// Build Icons Sprite
export const iconsBuild = gulp.series("sprites", "listOfIcons");
// Default task
export const development = gulp.series(iconsBuild, imagesBuild, "watch");

export default development;
