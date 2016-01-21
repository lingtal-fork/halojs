var Hexo = require('hexo'),
	deployer = require('./lib/deployer'),
	minimist = require('minimist'),
	util = require('util'),
	generator = require('./lib/generator');

var hexo,
	argv;

console.lookin = function (obj) {
	console.log(util.inspect(obj, {
		showHidden: true,
		depth: null,
		colors: true,
		customInspect: false
	}));
};

argv = minimist(process.argv.slice(2))
hexo = new Hexo(process.cwd(), {
	config: 'config/_external.yml'
});

hexo.init().then(function () {
	console.log('environment: external');
	hexo.extend.console.register('deploy', 'deploy your website', {

	}, function (args) {
		deployer.deploy(hexo);
	});
	hexo.call(argv._[0], argv)
		.catch(function () {
			hexo.call('help', argv);
		});
});