const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
      },
      get appetizers() {
        return this._courses.appetizers;
      },
      set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
      },
      get mains() {
        return this._courses.mains;
      },
      set mains(mains) {
        this._courses.mains = mains;
      },
      get desserts() {
        return this._courses.desserts;
      },
      set desserts(desserts) {
        this._courses.desserts = desserts;
      },
      get courses() {
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts,
        };
      },
  
      addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice,
        };
        return this._courses[courseName].push(dish);
      },
       getRandomDishFromCourse (courseName) {
         const dishes = this._courses[courseName];
         const randomIndex = Math.floor(Math.random() * dishes.length);
         return dishes[randomIndex];
      },
      generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. and the total price is ${totalPrice}.`
      }
  };
  // end of object definition
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'wings', 6.00);
  menu.addDishToCourse('appetizers', 'soup', 7.50);
  
  menu.addDishToCourse('mains', 'pasta', 12.00);
  menu.addDishToCourse('mains', 'spareribs', 21.00);
  menu.addDishToCourse('mains', 'pizza', 10.00);
  
  menu.addDishToCourse('desserts', 'pudding', 3.50);
  menu.addDishToCourse('desserts', 'icecream', 5.00);
  menu.addDishToCourse('desserts', 'cake', 2.50);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
