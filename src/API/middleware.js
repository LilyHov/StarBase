import PeopleModel from '../models/PeopleModel';

class Middleware {
  static parsePeople = (peopleFromServer: any, index: number) => {
    const person = new PeopleModel();
    const idRegExp = /\/([0-9]*)\/$/;
    person.id = peopleFromServer.url.match(idRegExp)[1];
    person.name = peopleFromServer.name;
    person.birthYear = peopleFromServer.birth_year;
    person.eyeColor = peopleFromServer.eyeColor;
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

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };
}

export default Middleware;
