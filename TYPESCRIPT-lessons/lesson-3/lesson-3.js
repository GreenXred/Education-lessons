// 1. Создай два типа, представляющих детали продуктов: `BasicProduct` с названием и ценой и `DiscountProduct`, который включает скидку. 
// Используя пересечение, создайте тип `FeaturedProduct` и напиши функцию, принимающую этот тип и выводящую информацию о продукте со скидкой;
function displayFeaturedProduct(product) {
    var discountedPrice = product.price * (1 - product.discount / 100);
    console.log("Product: ".concat(product.name, " - ").concat(discountedPrice.toFixed(2), " (Discount: ").concat(product.discount, "%)"));
}
var featuredProduct = {
    name: "Iphone",
    price: 1200,
    discount: 15
};
displayFeaturedProduct(featuredProduct);
// 2. Создай переменную типа `unknown` и напиши функцию, которая принимает эту переменную, и обрабатывает её в зависимости от типа. 
// Например, если тип переменной - строка, то выводим ее в консоль и так далее;
var data = "some string";
function handleUnknown(data) {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
    }
}
handleUnknown(data);
function throwRoleError(role) {
    throw new Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u0438\u043F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ".concat(role));
}
function checkUserRole(role) {
    if (role === 'admin') {
        return { role: 'admin' };
    }
    if (role === 'user') {
        return { role: 'user' };
    }
    if (role === 'guest') {
        return { role: 'guest' };
    }
    throwRoleError(role);
}
function filterTasks(tasks, person) {
    if (person.role === 'admin') {
        return tasks;
    }
    else if (person.role === 'user') {
        return tasks.filter(function (task) { return task.isActive; });
    }
    return tasks.filter(function (task) { return task.isPublic; }); // guest
}
var tasks = [
    { title: "Task 1", isActive: true, isPublic: true, isHidden: false },
    { title: "Task 2", isActive: false, isPublic: true, isHidden: false },
    { title: "Task 3", isActive: true, isPublic: false, isHidden: true },
    { title: "Task 4", isActive: false, isPublic: false, isHidden: true },
];
console.log('Admin Tasks:', filterTasks(tasks, { role: 'admin' }));
console.log('User Tasks:', filterTasks(tasks, { role: 'user' }));
console.log('Guest Tasks:', filterTasks(tasks, { role: 'guest' }));
