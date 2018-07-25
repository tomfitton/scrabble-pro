module.exports = function(grunt) { // jshint ignore:line

  var directories = {
    "src": {
      "views": {
        "root": "src/view/",
        "components": "src/view/components/"
      },
      "js": {
        "root": "src/js/",
        "services": "src/js/services/",
        "controllers": "src/js/controllers/"
      }
    },
    "build": "build/",
    "dist": {
      "root": "dist/",
      "styles": "dist/styles/",
      "scripts": "dist/scripts/"
    },
    "nodeModules": "node_modules/"
  };

  grunt.initConfig({
    "pkg": grunt.file.readJSON("package.json"),
    "clean": {
      "dev": [directories.build],
      "dist": [directories.dist.root]
    },
    "concat": {
      "dist": {
        "src": [
          directories.src.js.root + "App.js",
          directories.src.js.services + "ScrabbleService.js",
          directories.src.js.controllers + "Application.js"
        ],
        "dest": directories.build + "<%= pkg.name %>.js"
      }
    },
    "copy": {
      "dist": {
        "files": [
          {
            "expand": true,
            "flatten": true,
            "src": directories.build + "*",
            "dest": directories.dist.root
          },
          {
            "expand": true,
            "flatten": true,
            "src": [directories.nodeModules + "bootstrap/dist/css/bootstrap.min.css"],
            "dest": directories.dist.styles
          },
          {
            "expand": true,
            "flatten": true,
            "src": [directories.nodeModules + "angular/angular.min.js"],
            "dest": directories.dist.scripts
          },
        ]
      }
    },
    "htmlbuild": {
      "dist": {
        "src": directories.src.views.root + "layout.html",
        "dest": directories.build + "index.html",
        "options": {
          "beautify": true,
          "sections": {
            "partials": {
              "meta": directories.src.views.components + "meta.html",
              "style": directories.src.views.components + "style.html"
            },
            "components": {
              "header": directories.src.views.components + "sections/header.html"
            }
          }
        }
      }
    },
    "uglify": {
      "dist": {
        "files": [{
          "src": directories.build + "<%= pkg.name %>.js",
          "dest": directories.dist.scripts + "<%= pkg.name %>.min.js"
        }]
      }
    },
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-html-build");

  grunt.registerTask("build", [
    "clean:dist",
    "htmlbuild",
    "copy",
    "concat",
    "uglify",
    "clean:dev"
  ]);

};
