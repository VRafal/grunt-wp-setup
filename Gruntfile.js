'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});

	// Ładowanie zadania
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Wystarczy wywoła z linii poleceń 'grunt'. Domyślnym taskiem jest 'watch'
	//grunt.registerTask('default', ['watch']);
	grunt.registerTask('setup', 'Setup project', function () {
		var WPSetup = require('./grunt/wp-setup.js');
		var setup = new WPSetup(grunt);
	});


	grunt.registerTask('test', function () { grunt.log.ok('Jakiś mój log do grunta.', {color: 'Red'}) });
	grunt.registerTask('something', 'Do something interesting.', function(arg) {
		var msg = 'Doing something...';
		grunt.verbose.write(msg);
		try {
			doSomethingThatThrowsAnExceptionOnError(arg);
			// Success!
			grunt.verbose.ok();
		} catch(e) {
			// Something went wrong.
			grunt.verbose.or.write(msg).error().error(e.message);
			grunt.fail.warn('Something went wrong.');
		}
	});
};
