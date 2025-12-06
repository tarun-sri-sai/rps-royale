class Game {
  constructor() {
    this.entities = [];
    for (let i = 0; i < constants.POPULATION; i++) {
      this.entities.push(new Entity("Rock"));
      this.entities.push(new Entity("Paper"));
      this.entities.push(new Entity("Scissors"));
    }
  }

  update() {
    for (const entity of this.entities) {
      entity.update(this.entities);
    }
  }

  display() {
    for (const entity of this.entities) {
      entity.display();
    }
  }

  isOver() {
    return (
      Object.keys(
        this.entities.reduce((acc, entity) => {
          acc[entity.id] = true;
          return acc;
        }, {})
      ).length < 3
    );
  }

  getRemainingTypes() {
    return Object.keys(
      this.entities.reduce((acc, entity) => {
        acc[entity.id] = true;
        return acc;
      }, {})
    );
  }
}
