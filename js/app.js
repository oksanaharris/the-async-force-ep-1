

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


fetch('http://swapi.co/api/people/14/')
  .then(res => res.json())
  .then(data => {
    var person14NameEl = document.getElementById('person14Name');
    person14NameEl.innerHTML = data.name;
    return fetch(data.species[0]);
  }).then(res => res.json())
  .then(data => {
    var person14SpeciesEl = document.getElementById('person14Species');
    person14SpeciesEl.innerHTML = data.name;
  });


fetch('http://swapi.co/api/films/')
  .then(res => res.json())
  .then(data => {

    filmsUlEl = document.getElementById('filmList');

    //this is looping through our data.results
    data.results.forEach((film) => {
      var filmsLiEl = document.createElement('li');
      filmsLiEl.className = 'film';

      var filmsH2TitleEl = document.createElement('h2');
      filmsH2TitleEl.className = 'filmTitle';
      filmsH2TitleEl.innerHTML = film.title;

      var filmsH3El = document.createElement('h3');
      filmsH3El.innerHTML = 'Planets';

      var filmsPlanetUlEl = document.createElement('ul');
      filmsPlanetUlEl.className = 'filmPlanets';

      filmsUlEl.appendChild(filmsLiEl);
      filmsLiEl.appendChild(filmsH2TitleEl);
      filmsLiEl.appendChild(filmsH3El);
      filmsLiEl.appendChild(filmsPlanetUlEl);

      film.planets.forEach((planet) => {

      fetch(planet)
        .then(res => res.json())
        .then(data => {

          var planetLiEl = document.createElement('li');
          planetLiEl.className = 'planet';

          var planetH4El = document.createElement('h4');
          planetH4El.className = 'planetName';
          planetH4El.innerHTML = data.name;;

          filmsPlanetUlEl.appendChild(planetLiEl);
          planetLiEl.appendChild(planetH4El);
        });
      });
    });
  });

