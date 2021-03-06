# grunt-check-clean

> Ensure the git index is clean and that there are no untracked files or directories.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-check-clean --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-check-clean');
```

## The "check_clean" task

### Overview
In your project's Gruntfile, you don't need a `check_clean` section, since there are no configuration options.

### Usage Examples

In a custom task, just depend on `check_clean` before your other commands, for instance:

```js
grunt.registerTask('release', ['check_clean', 'build', 'commit', 'tag']);
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
