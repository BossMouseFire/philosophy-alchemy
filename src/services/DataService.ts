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

  public openAllElements() {
    const { eraArray } = this.data;
    eraArray.forEach((era) => {
      era.elements.forEach((element) => {
        element.enabled = true;
      });
    });
  }

  public openRandomElement(idEra: number) {
    const { eraArray } = this.data;
    const era = eraArray.find((era) => era.id === idEra);
    if (era) {
      const findElements = era.elements.filter(
        (element) => !element.enabled && element.status !== 'old'
      );
      this.checkParents(findElements, idEra);
    }
  }

  private checkParents(elements: IElement[], idEra: number) {
    const randomIndexElement = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndexElement];

    if (!randomElement) {
      return;
    }

    let unOpenParent = false;

    for (let i = 0; i < randomElement.parents.length; i++) {
      const parent = this.getElement(idEra, randomElement.parents[i]);
      if (!parent?.enabled) {
        unOpenParent = true;
        break;
      }
    }

    if (unOpenParent) {
      elements.splice(randomIndexElement, 1);
      this.checkParents(elements, idEra);
    } else {
      randomElement.enabled = true;
      this.checkElementOtherEra(randomElement);
    }
  }

  private checkElementOtherEra(child: IElement) {
    const { eraArray } = this.data;
    for (let i = 0; i < eraArray.length; i++) {
      const tempEra = this.getEraById(i);
      if (tempEra) {
        const { elements } = tempEra;
        for (const element of elements) {
          if (element.name === child.name) {
            element.enabled = true;
            break;
          }
        }
      }
    }
  }

  public checkGeneralChild(
    parentOne: IElement,
    parentTwo: IElement,
    idEra: number
  ): IElement | undefined {
    const childrenToOne = parentOne.children;
    const childrenToTwo = parentTwo.children;

    let generalChild: IElement | undefined;

    const generalChildren: number[] | undefined = childrenToOne.filter((id) =>
      childrenToTwo.includes(id)
    );

    if (!generalChildren) {
      return undefined;
    }

    if (
      generalChildren.length === childrenToOne.length &&
      generalChildren.length === childrenToTwo.length
    ) {
      for (let i = 0; i < generalChildren.length; i++) {
        const id = generalChildren[i];
        const temp = this.getElement(idEra, id);
        if (temp) {
          if (temp.parents.length === 1 && temp.parents[0] === parentOne.id) {
            generalChild = temp;
            break;
          }
        }
      }
    } else {
      const generalChildId = childrenToOne.find((id) => childrenToTwo.includes(id));

      if (!generalChildId) {
        return undefined;
      }
      generalChild = this.getElement(idEra, generalChildId);
    }

    if (!generalChild) {
      return undefined;
    }
    if (generalChild.enabled) {
      return undefined;
    }
    generalChild.enabled = true;

    this.checkElementOtherEra(generalChild);

    return generalChild;
  }
}

export default new DataService();
