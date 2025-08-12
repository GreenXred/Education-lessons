//Задание 1.

// document.getElementById('div1').addEventListener('click', () => {
//     console.log('Это div1');
// });

// document.getElementById('div2').addEventListener('click', () => {
//     console.log('Это div2');
// });

// document.getElementById('div3').addEventListener('click', () => {
//     console.log('Это div3');
// });

// Задание 2.

document.getElementById('div1').addEventListener('click', () => {
    console.log('Это div1');
});

document.getElementById('div2').addEventListener('click', () => {
    console.log('Это div2');
});

document.getElementById('div3').addEventListener('click', (event) => {
    console.log('Это div3');
    event.stopImmediatePropagation();
});
