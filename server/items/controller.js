var controller = {};
controller.create = function(req, res, next) {
	console.log('inside items controller create');
  console.log('THIS IS REQ YO', req.body);
  res.end();
};

controller.read = function(req, res, next){
	console.log('inside items controller sign in');
	res.json([{"name":"hammer"},{"name":"spoon"},{"name":"hammer"}]);
};

controller.update = function(req, res, next){
	console.log('inside items controller update');
	res.json({'hi':'hello'});
};

controller.delete = function(req, res, next){
	console.log('inside items controller delete');
	res.json({'hi':'hello'});
};

module.exports = controller;
