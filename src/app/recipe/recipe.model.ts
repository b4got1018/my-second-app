/**
 * Created by Mr Brian on 21-Jun-18.
 */

export class Recipe {

  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name: string, description: string, imagePath: string)
  {
    this.name=name;
    this.description=description;
    this.imagePath=imagePath;
  }
}
