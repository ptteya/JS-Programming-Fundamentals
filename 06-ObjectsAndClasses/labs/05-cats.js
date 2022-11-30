function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catsArr = [];
    for (let currEl of arr) {
        let [name, age] = currEl.split(" ");
        let currCat = new Cat(name, age);
        catsArr.push(currCat);
    }

    catsArr.forEach(c => c.meow());
}
cats(['Mellow 2', 'Tom 5']);