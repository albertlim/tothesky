



(function(){
	var solaceApp = angular.module('solaceInput', []);
	
	solaceApp.controller('solaceCtrl', function(){
		
		this.addSolace = function(value){
			
			alert(value);
		};
	});
	
	
})();