var app = angular.module('jade-is-wrong', []);
app.directive('blinky', function(){
  return {  
    template: '<div>yo</div>',
    
    // everything else as normal
    scope: {
      radius: '@',
    }
  };
});