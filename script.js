let name = prompt("Как вас зовут");
let age = prompt("Сколько вам лет");
let str = `Привет! ${name}.`;

if (age <= 0) {
    alert (`${str} Вы ввели отрицательный возраст`);
} else if (age <= 16) {
    alert (`${str} Вы подросток`);
} else if (16 < age && age <= 40) {
    alert (`${str} Вы молодой человек`);
} else {
    alert (`${str} Вы старичок`);
}