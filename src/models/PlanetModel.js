import PeopleModel from './PeopleModel';

export default class Planet {
  id: string;

  name: string;

  residents: Array<PeopleModel>;

  population: number;

  diameter: string;
}
