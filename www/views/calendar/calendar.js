'Use Strict';
angular.module('App').controller('calendarController', function (APIfactory, $ionicModal, $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, $firebaseArray, Auth, FURL, Utils) {

  $scope.whichevent = $state.params.aId;
  $scope.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 
  'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  $scope.years = ['2016', '2017', '2018', '2019'];
  $scope.mesSelected = 'Enero';
  $scope.monthSelected = 'January';
  $scope.yearSelected = '2016';

  $scope.showE = function () {
	    $scope.events = APIfactory.getEvents();
	    console.log($scope.events);
  };

  $scope.showE();



  $scope.onItemDelete = function (event) {
	        // A confirm dialog
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete event',
        template: 'Are you sure you want to delete the event "' + event.name + '"?',
        cancelText: 'Cancel',
      okType: 'button-calm'
    });
    confirmPopup.then(function(res) {
       if(res) 
         APIfactory.deleteEvent(event);
     });
  };
    $scope.showConfirm();
  }




  //Modal 1
  $ionicModal.fromTemplateUrl('monthModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal1 = modal;
  });

  $scope.openMonthModal = function(jugador, num) {
    $scope.modal1.show();
  };

  $scope.closeMonthModal = function() {
    $scope.modal1.hide();
  };

  //Modal 2
  $ionicModal.fromTemplateUrl('yearModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $scope.openYearModal = function(jugador, num) {
    $scope.modal2.show();
  };

  $scope.closeYearModal = function() {
    $scope.modal2.hide();
  };


  $scope.assignMonth = function (m) {
    $scope.mesSelected = m;
    $scope.closeMonthModal();
    if(m == 'Enero')
      $scope.monthSelected = 'January';
    else if(m == 'Febrero')
      $scope.monthSelected = 'February';
    else if(m == 'Marzo')
      $scope.monthSelected = 'March';
    else if(m == 'Abril')
      $scope.monthSelected = 'April';
    else if(m == 'Mayo')
      $scope.monthSelected = 'May';
    else if(m == 'Junio')
      $scope.monthSelected = 'June';
    else if(m == 'Julio')
      $scope.monthSelected = 'July';
    else if(m == 'Agosto')
      $scope.monthSelected = 'August';
    else if(m == 'Septiembre')
      $scope.monthSelected = 'September';
    else if(m == 'Octubre')
      $scope.monthSelected = 'October';
    else if(m == 'Noviembre')
      $scope.monthSelected = 'November';
    else if(m == 'Diciembre')
      $scope.monthSelected = 'December';
  };

  $scope.assignYear = function (y) {
    
    $scope.closeYearModal();
    $scope.yearSelected = y;
    console.log($scope.yearSelected);

  };


  $scope.resultClass = function (res) {
    var clase;
    if(res == 'Victoria')
      clase = 'victoria';
    else if(res == 'Derrota')
      clase = 'derrota';
    else if(res == 'Empate')
      clase = 'empate';
    return clase;

  };

 
}
);
