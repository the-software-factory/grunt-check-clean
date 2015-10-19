/*
 * grunt-check-clean
 * https://github.com/the-software-factory/grunt-check-clean
 *
 * Copyright (c) 2015 Stéphane Bisinger
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('check_clean', 'Ensure the git index is clean and that there are no untracked files or directories.', function() {
    var done = this.async();
    grunt.util.spawn({
      cmd: 'git',
      args: ['status', '--porcelain']
    }, function(error, result) {
      var ret = 0;
      if (error !== 0 || result.stdout.length > 0) {
        ret = new Error("The git index is not clean. Ensure there are no uncommitted changes or untracked files.");
      }
      done(ret);
    });
  });

};
