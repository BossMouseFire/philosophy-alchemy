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

  public checkGeneralChild(
    parentOne: IElement,
    parentTwo: IElement,
    idEra: number
  ): IElement | undefined {
    const childrenToOne = parentOne.children;
    const childrenToTwo = parentTwo.children;

    const generalChildId: number | undefined = childrenToOne.find((id) =>
      childrenToTwo.includes(id)
    );

    if (!generalChildId) {
      return undefined;
    }

    const generalChild = this.getElement(idEra, generalChildId);

    if (!generalChild) {
      return undefined;
    }
    if (generalChild.enabled) {
      return undefined;
    }
    generalChild.enabled = true;
    return generalChild;
  }
}

export default new DataService();
