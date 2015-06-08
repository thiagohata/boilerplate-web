'use strict';

module.exports = function(grunt){

    // Paths
    var dir = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({

        // Import Path
        dir: dir,

        //Clean directory
        clean:{
            //Clean directory full
            dist:{
                dot: true,
                src: [
                    '.sass-cache',
                    '.tmp',
                    '<%= dir.dist %>'
                ]
            },
            //Clean files not minify
            remove:{
                dot: true,
                src: [
                    '<%= dir.dist %>/js/**/*.js',
                    '!<%= dir.dist %>/js/*.min.js',
                    '<%= dir.dist %>/css/**/*.css',
                    '!<%= dir.dist %>/css/*.min.css',
                    '<%= dir.dist %>/js/modules',
                    '<%= dir.dist %>/js/controllers',
                    '<%= dir.dist %>/js/model',
                    '<%= dir.dist %>/js/resources',
                    '<%= dir.dist %>/sass',
                    '<%= dir.dist %>/vendors',
                    '<%= dir.dist %>/img/sprites'
                ]
            },
        },

        //Copy files
        copy: {
            public: {
                expand: true,
                cwd: '<%= dir.app %>',
                dest:  '<%= dir.dist %>',
                src: '**',
            }
        },

        //Dynamic settings grunt concat uglify and cssmin
        useminPrepare: {
            options: {
                dest: '<%= dir.dist %>'
            },
            html: '<%= dir.dist %>/**/*.html'
        },

        //Read tags html, concatenating files
        usemin: {
            options: {
                assetsDirs: ['<%= dir.dist %>', '<%= dir.dist %>/images']
            },
            html: '<%= dir.dist %>/**/*.html'
        },

        //SPRITE ()
        css_sprite: {
              options: {
                'cssPath': '../img/css_images/',
                'processor': 'scss',
                'orientation': 'vertical',
                'margin': 4
              },
              sprite: {
                options: {
                  'style': '<%= dir.app %>/sass/components/_sprite.scss'
                },
                src: ['<%= dir.app %>/img/sprites/*'],
                dest: '<%= dir.app %>/img/css_images/sprite',
              },
              base64: {
                options: {
                  'base64': true
                },
                src: ['<%= dir.app %>/img/sprites/*'],
                dest: '<%= dir.app %>/sass/components/_base64.scss',
              }
        },

        //Image Optimization
        imagemin: {
            public:{
                expand: true,
                cwd: '<%= dir.dist %>/img',
                src: '**/*.{png, jpg, gif}',
                dest: '<%= dir.dist %>/img'
            }
        },

        //Versioning of files
        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            //Points for all images
            imagens : {
                src: ['<%= dir.dist %>/img/**/*.{png,jpg,gif}',
                      '!<%= dir.dist %>/img/css_images/*.{png,jpg,gif}'
                    ]
            },
            //Points for all scripts and css
            minificados: {
                src: ['<%= dir.dist %>/js/**/*.min.js',
                      '<%= dir.dist %>/css/**/*.min.css']
            }
        },

        //Configuration SASS
        sass: {
            compilar: {
                expand: true,
                cwd: '<%= dir.app %>/sass',
                src: ['**/*.{scss,sass}'],
                dest: '<%= dir.app %>/css',
                ext: '.css'

            }
        },

        //Check javascript
        jshint: {
            js: {
                src: ['<%= dir.app %>/js/**/*.js']
            }
         },

         //Minify html
          htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= dir.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= dir.dist %>'
                }]
            }
        },
        //Browser Sync Browser
        browserSync: {
            public: {
                //Quais os arquivos seram monitorados
                bsFiles: {
                    src: ['<%= dir.app %>/**/*']
                }
            },
            options: {
                server: {
                    baseDir: "<%= dir.app %>",
                    routes: {
                        "/bower_components": "bower_components"
                    }
                },
                //watchTask Check task Watch
                watchTask: true
            }
        },

        //Modify the run-time files
        watch: {

           //SASS
           sass: {
                options: {
                    event: ['added', 'changed']
                },
                files: '<%= dir.app %>/sass/**/*.{scss,sass}',
                tasks: 'sass:compilar'
           },

          //Check javascript with jshint:
            js: {
                options: {
                    event: ['changed']
                 },
                 files: '<%= dir.app %>/js/**/*.js',
                 tasks: 'jshint:js'
            },
            html: {
                files: [
                    //Automatic loading browser for the updates of the extensions below
                    "/*.{html,htm,shtml,shtm,xhtml,php,jsp,asp,aspx,erb,ctp}"
                ]
            },

        }
    });


    //Taks
    // => Execution:
    // 1- Clear the Temporary folders and folder dist.
    // 2 - Copies of the app folder to the folder dist.
    // 3 - Read the comments in the HTML for tasks.
    // 4 - Concatenate files, based on the comments of tags.
    // 5 - Minify the css file.
    // 6 - Minify  Javascript.
    // 7 - Versioning filesystem images, css and javascript.
    // 8 - Remove the comments of html and makes the previous tasks (Concatenate, minify)
    // 9 - Optimize images
    // 10 - Clear the Dist directory erasing css files, folders and some javascripts not minify
    // 11 - Minify o HTML
    // If not please perform some tasks that do not need to remove the task just remove the registerTask
    grunt.registerTask('default', [
         'clean:dist',
         'copy',
         'useminPrepare',
         'concat',
         'cssmin',
         'uglify',
         'rev',
         'usemin',
         'imagemin',
         'clean:remove',
         'htmlmin:dist'
         ]);

     grunt.registerTask('server', ['browserSync', 'watch']);


    //Grunt Start plugins,
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('css-sprite');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');



}
