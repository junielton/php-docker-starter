let mix = require("laravel-mix");
let path = require("path");

mix.setPublicPath(path.resolve("./"));

mix.js("src/js/app.js", "assets/js").vue();

mix.postCss("src/css/app.css", "assets/css", [
	require("tailwindcss"),
]);

mix.browserSync({
	proxy: "http://localhost",
	host: "localhost",
	baseDir: "./",
	port: 3000,
	files: ["**/*"],
	notify: {
		styles: {
			top: "auto",
			bottom: "5px",
			left: "auto",
			right: "5px",
		},
	},
});

mix.version();
