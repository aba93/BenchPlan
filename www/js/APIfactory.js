angular.module('App').factory("APIfactory", function($cordovaOauth, $filter, $localStorage, $location,$http,$ionicPopup, $firebaseObject, $firebaseArray, Auth, FURL, Utils){


    var ref = new Firebase(FURL);
    var playersRef = ref.child('profile').child($localStorage.userkey).child("player");

    var interfaz = {};

    interfaz.getJugadores =function(){
        var jugadores = $firebaseArray(playersRef);
        return jugadores;
    };

    interfaz.pushJugador = function(jugador){
        var userRef = ref.child('profile').child($localStorage.userkey).child("player");
        userRef.push({
            name: jugador.name,
            position: jugador.position,
            dorsal: jugador.dorsal,
            date: $filter('date')(jugador.fecha, "dd-MM-yyyy")
        });
    };
    
    return interfaz;
});

