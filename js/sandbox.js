_.templateSettings = { // doT lite
	evaluate: /\{\{([\s\S]+?)\}\}/g,
	interpolate: /\{\{=([\s\S]+?)\}\}/g,
	escape: /\{\{!([\s\S]+?)\}\}/g,
	variable: 'it'
};

// Set up message event handler:
window.addEventListener('message', function(event) {
	var result = _.template(event.data.template);
		result = result(event.data.data);
	event.source.postMessage({
		'result': result,
		 uid: event.data.uid
	}, event.origin);
});