
app.directive('installApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
    }, 
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs) { //create interactive directives that respond to user actions
        scope.buttonText = "Install", 
        scope.installed = false, 

        scope.download = function() { 
          element.toggleClass('btn-active'); 
          if(scope.installed) { 
            scope.buttonText = "Install"; 
            scope.installed = false; 
          } else { 
            scope.buttonText = "Uninstall"; 
            scope.installed = true; 
          } 
        } 
    }
  }; 
});


/*
The directive contains the three options:
----------------------------------------- 
restrict, scope, and templateUrl that we saw before in the 'appInfo' directive.

It also contains a fourth option "link".
The link is used to create interactive directives that respond to user actions.


The link function takes three inputs:
-------------------------------------

scope: refers to the directive's scope. 
Any new properties attached to $scope will become available to use in the directive's template.

element: refers to the directive's HTML element.

attrs: contains the element's attributes.


------------------------------
What can we generalize so far?
-------------------------------

Directives are a powerful way to create self-contained, interactive components. 
Unlike jQuery which adds interactivity as a layer on top of HTML, AngularJS treats 
interactivity as a native component of HTML.


*/