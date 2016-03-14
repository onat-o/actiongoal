module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'public/css/style.css': 'sass/style.scss'
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'public/css/style.css'
      }
    },
    watch: {
      css: {
        files: 'sass/style.scss',
        tasks: ['sass', 'postcss']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};