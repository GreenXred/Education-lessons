// 1. Создай enum `ProductCategory`, представляющий категории товаров: "Electronics", "Books", 
// "Clothing". Напиши функцию `getCategoryDiscount`, которая принимает `ProductCategory` 
// и возвращает скидку в зависимости от категории (например, 10% на книги, 5% на электронику, 0% на одежду);
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["Electronics"] = "Electronics";
    ProductCategory["Books"] = "Books";
    ProductCategory["Clothing"] = "Clothing";
})(ProductCategory || (ProductCategory = {}));
function getCategoryDiscount(category) {
    switch (category) {
        case ProductCategory.Books:
            return 10;
        case ProductCategory.Electronics:
            return 5;
        case ProductCategory.Clothing:
            return 0;
        default:
            return 0;
    }
}
function calculateDiscountedPrice(price, category) {
    var discount = getCategoryDiscount(category);
    return price * (1 - discount / 100);
}
var category = ProductCategory.Books;
var price = 100;
var discountedPrice = calculateDiscountedPrice(price, category);
console.log("Original Price: $".concat(price, ", Discounted Price for ").concat(category, ": $").concat(discountedPrice.toFixed(2)));
// 2. Создай enum `DifficultyLevel` с несколькими уровнями сложности. Напиши функцию `getTimeLimit`, 
// которая принимает `DifficultyLevel` и возвращает максимальное время (в минутах) для выполнения задачи на каждом уровне сложности;
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["Easy"] = "Easy";
    DifficultyLevel["Medium"] = "Medium";
    DifficultyLevel["Hard"] = "Hard";
    DifficultyLevel["Expert"] = "Expert";
})(DifficultyLevel || (DifficultyLevel = {}));
function getTimeLimit(level) {
    switch (level) {
        case DifficultyLevel.Easy:
            return 30;
        case DifficultyLevel.Medium:
            return 60;
        case DifficultyLevel.Hard:
            return 120;
        case DifficultyLevel.Expert:
            return 180;
        default:
            return 0;
    }
}
var level = DifficultyLevel.Hard;
var timeLimit = getTimeLimit(level);
console.log("Time limit for ".concat(level, " level: ").concat(timeLimit, " minutes"));
// 3. Создай enum `ShippingStatus`, представляющий состояния доставки: "Pending", "Shipped", "Delivered", "Returned". 
// Напиши функцию `getStatusMessage`, которая принимает `ShippingStatus` и возвращает сообщение в зависимости от состояния.
var ShippingStatus;
(function (ShippingStatus) {
    ShippingStatus["Pending"] = "Pending";
    ShippingStatus["Shipped"] = "Shipped";
    ShippingStatus["Delivered"] = "Delivered";
    ShippingStatus["Returned"] = "Returned";
})(ShippingStatus || (ShippingStatus = {}));
function getStatusMessage(status) {
    switch (status) {
        case ShippingStatus.Pending:
            return "Your order is being processed.";
        case ShippingStatus.Shipped:
            return "Your order has been shipped.";
        case ShippingStatus.Delivered:
            return "Your order has been delivered.";
        case ShippingStatus.Returned:
            return "Your order has been returned.";
        default:
            return "Unknown status.";
    }
}
var status = ShippingStatus.Shipped;
var message = getStatusMessage(status);
console.log("Shipping Status: ".concat(status, " - ").concat(message));
