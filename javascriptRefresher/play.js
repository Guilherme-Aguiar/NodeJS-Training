const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, i am ' + this.name)
    }
};

console.log(person);

person.greet();

const names = ['guilherme','oliveira','aguiar'];

console.log(names.map(nome => 'Esse nome é: ' + nome));

names.push('zezim');


namesCopy = [...names];

console.log(namesCopy);