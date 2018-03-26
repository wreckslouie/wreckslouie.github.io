// const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            prd: {
                files: {
                    'prod/js/main.min.js': [
                    'source/js/main.js'
                ]}
            },
            jquery: {
                options: {
                    preserveComments: 'some'
                },
                files: {'prod/js/jquery.min.js': [
                    'node_modules/jquery/dist/jquery.min.js'
                ]}
            },
            plugins: {
                options: {
                    preserveComments: 'some'
                },
                files: {'prod/js/plugins.min.js': [
                    'node_modules/fullpage.js/vendors/jquery.easings.min.js',
                    'node_modules/fullpage.js/vendors/scrolloverflow.min.js',
                    'node_modules/fullpage.js/dist/jquery.fullpage.js',
                    'node_modules/fullpage.js/dist/jquery.fullpage.extensions.min.js',
                    'node_modules/jquery-mousewheel/jquery.mousewheel.js',
                    'node_modules/owl.carousel/dist/owl.carousel.min.js',
                    'node_modules/wowjs/dist/wow.js',
                    'node_modules/lazyloadxt/dist/jquery.lazyloadxt.js',
                ]}
            }
        },
        less: {
            prd: {
                options: {
                    paths: ['prod/css'],
                    cleancss: true,
                    compress: true
                },
                files: {'prod/css/main.css': [
                    'source/less/style.less'
                ]}
            },
            plugins: {
                options: {
                  paths: ['prod/css'],
                    cleancss: true,
                    compress: true
                },
                files: {'prod/css/plugins.css': [
                    'node_modules/fullpage.js/dist/jquery.fullpage.css',
                    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
                    'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
                    'node_modules/animate.css/animate.css',
                    'node_modules/lazyloadxt/dist/jquery.lazyloadxt.spinner.css',
                ]}
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'prod/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'prod/css',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'source/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'prod/img'
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['source/less/*.less'],
                tasks: ['less:prd', 'less:plugins']
            },
            js: {
                files: 'source/js/*.js',
                tasks: ['uglify:prd','uglify:plugins']
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['prod/**/*'],
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './prod/css/*.css',
                        './prod/js/*.js',
                        './*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['less:prd', 'less:plugins', 'uglify:prd', 'uglify:jquery', 'uglify:plugins', 'imagemin', 'watch']);
    grunt.registerTask('all', ['less', 'uglify']);
    grunt.registerTask('browser', ['browserSync', 'less:prd', 'less:plugins', 'uglify:prd', 'uglify:jquery', 'uglify:plugins', 'imagemin', 'watch']);
};
