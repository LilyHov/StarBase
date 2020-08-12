import PeopleModel from '../models/PeopleModel';
import PlanetModel from '../models/PlanetModel';

class Middleware {
  static parsePeople = (peopleFromServer: any, index: number) => {
    const person = new PeopleModel();
    // const idRegExp = /\/([0-9]*)\/$/;
    const url = peopleFromServer.url;
    person.id = this._extractId(1);
    person.name = peopleFromServer.name;
    person.birthYear = peopleFromServer.birth_year;
    person.eyeColor = peopleFromServer.eye_color;
    person.gender = peopleFromServer.gender;

    return person;
  };
  /**
   * Maps the tax payers got from server into an array of PeopleModel objects
   *
   * @param  {array} peopleFromServer peoples' array from server
   *
   * @return {array}          The parsed peoples array
   **/
  static parsePeoples = (peopleFromServer: any) => {
    return peopleFromServer.map((person, index) =>
      Middleware.parsePeople(person, index + 1),
    );
  };

  static _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  static parsePlanet = (planetsFromServer: any) => {
    const planet = new PlanetModel();
    planet.id = planetsFromServer.url._extractId();
    planet.name = planetsFromServer.name;
  };

  static parsePlanets = (planetsFromServer: any) => {
    return planetsFromServer.map((planet, index) =>
      Middleware.parsePlanet(planet, index + 1),
    );
  };
}

export default Middleware;
