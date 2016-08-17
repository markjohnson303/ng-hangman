angular.module('HangmanApp', [])
  .controller('HangmanController', HangmanController);

  HangmanController.$inject = ["$scope"];
  function HangmanController($scope){
  	$scope.hangman = new HangmanGame("elephant");
  	$scope.guessLetter = function(input) {
  	    $scope.hangman.guess(input);
  	    $scope.hangman.input = "";
  	};

  }