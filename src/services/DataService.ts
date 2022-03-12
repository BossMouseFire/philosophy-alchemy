import jsonData from '../data/data.json';
import { IData, IEra, IElement } from '../types/data';

class DataService {
  private readonly data: IData;

  constructor() {
    this.data = jsonData as unknown as IData;
  }

  public getEraById(id: number): IEra | undefined {
    const { eraArray } = this.data;
    return eraArray.find((era) => era.id === id);
  }

  public getElement(idEra: number, idElement: number): IElement | undefined {
    const { eraArray } = this.data;
    const era = eraArray.find((era) => era.id === idEra);
    if (era) {
      return era.elements.find((element) => element.id === idElement);
    }
    return undefined;
  }
}

export default new DataService();
