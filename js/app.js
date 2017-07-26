
// function createXHR(method, url, cb){
//   var newRequest = new XMLHttpRequest ();

//   newRequest.addEventListener('load', cb);
//   newRequest.open(method, url);
//   newRequest.send();

//   return newRequest;
// }

fetch('http://swapi.co/api/people/4/')
  .then(res => res.json())
  .then(data => {
    var person4NameEl = document.getElementById('person4Name');
    person4NameEl.innerHTML = data.name;
    return fetch(data.homeworld);
  }).then(res => res.json())
  .then(data => {
    var person4HWEl = document.getElementById('person4HomeWorld');
    person4HWEl.innerHTML = data.name;
  });

  // .then(data =>
//   var person4Obj = data;

//   var person4NameEl = document.getElementById('person4Name');
//   person4NameEl.innerHTML = person4Obj.name;

//   var person4HWRequest = createXHR("GET", person4Obj.homeworld, person4HWListener);

//   function person4HWListener(){
//     var person4HWObj = JSON.parse(this.responseText);

//     var person4HWEl = document.getElementById('person4HomeWorld');
//     person4HWEl.innerHTML = person4HWObj.name;
//   }

// }





// var person4Request = createXHR("GET", 'http://swapi.co/api/people/4/', person4Listener);

// function person4Listener (){
//   var person4Obj = JSON.parse(this.responseText);

//   var person4NameEl = document.getElementById('person4Name');
//   person4NameEl.innerHTML = person4Obj.name;

//   var person4HWRequest = createXHR("GET", person4Obj.homeworld, person4HWListener);

//   function person4HWListener(){
//     var person4HWObj = JSON.parse(this.responseText);

//     var person4HWEl = document.getElementById('person4HomeWorld');
//     person4HWEl.innerHTML = person4HWObj.name;
//   }

// }

// var person14Request = createXHR("GET", 'http://swapi.co/api/people/14/', person14Listener);

// function person14Listener(){
//   var person14Obj = JSON.parse(this.responseText);

//   var person14NameEl = document.getElementById('person14Name');
//   person14NameEl.innerHTML = person14Obj.name;

//   var person14Species = person14Obj.species[0];

//   var person14SpeciesRequest = createXHR("GET", person14Species, person14SpeciesListener);

//   function person14SpeciesListener(){
//     var person14SpeciesObj = JSON.parse(this.responseText);

//     var person14SpeciesEl = document.getElementById('person14Species');
//     person14SpeciesEl.innerHTML = person14SpeciesObj.name;
//   }
// }

// var filmsRequest = createXHR("GET", 'http://swapi.co/api/films/', filmsListener);

// function filmsListener (){
//   var filmsObj = JSON.parse(this.responseText);

//   var filmsArr = filmsObj.results;

//   filmsUlEl = document.getElementById('filmList');

//   filmsArr.forEach((film) => {
//     var filmsLiEl = document.createElement('li');
//     filmsLiEl.className = 'film';

//     var filmsH2TitleEl = document.createElement('h2');
//     filmsH2TitleEl.className = 'filmTitle';
//     filmsH2TitleEl.innerHTML = film.title;

//     var filmsH3El = document.createElement('h3');
//     filmsH3El.innerHTML = 'Planets';

//     var filmsPlanetUlEl = document.createElement('ul');
//     filmsPlanetUlEl.className = 'filmPlanets';

//     filmsUlEl.appendChild(filmsLiEl);
//     filmsLiEl.appendChild(filmsH2TitleEl);
//     filmsLiEl.appendChild(filmsH3El);
//     filmsLiEl.appendChild(filmsPlanetUlEl);

//     var planetsArr = film.planets;
//     console.log(planetsArr)

//     planetsArr.forEach((planet) => {

//       var planetRequest = createXHR("GET", planet, planetListener);

//       function planetListener(){
//         var planetObj = JSON.parse(this.responseText)

//         var planetLiEl = document.createElement('li');
//         planetLiEl.className = 'planet';

//         var planetH4El = document.createElement('h4');
//         planetH4El.className = 'planetName';
//         planetH4El.innerHTML = planetObj.name;;

//         filmsPlanetUlEl.appendChild(planetLiEl);
//         planetLiEl.appendChild(planetH4El);
//       }
//     });
//   });
// }
