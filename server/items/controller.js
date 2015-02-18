var controller = {};
controller.create = function(req, res, next) {
	console.log('inside items controller create (LATER DB)');
  res.json(req.body);
};

controller.read = function(req, res, next){
	console.log('inside items controller sign in');
  // console.log('this is REQ', req.body)
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
