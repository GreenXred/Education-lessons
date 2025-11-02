// 1. Создай enum `ProductCategory`, представляющий категории товаров: "Electronics", "Books", 
// "Clothing". Напиши функцию `getCategoryDiscount`, которая принимает `ProductCategory` 
// и возвращает скидку в зависимости от категории (например, 10% на книги, 5% на электронику, 0% на одежду);

enum ProductCategory {
    Electronics = "Electronics",
    Books = "Books",
    Clothing = "Clothing"
}

function getCategoryDiscount(category: ProductCategory): number {
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

function calculateDiscountedPrice(price: number, category: ProductCategory): number {
    const discount = getCategoryDiscount(category);
    return price * (1 - discount / 100);
}

const category = ProductCategory.Books;
const price = 100;
const discountedPrice = calculateDiscountedPrice(price, category);
console.log(`Original Price: $${price}, Discounted Price for ${category}: $${discountedPrice.toFixed(2)}`);



// 2. Создай enum `DifficultyLevel` с несколькими уровнями сложности. Напиши функцию `getTimeLimit`, 
// которая принимает `DifficultyLevel` и возвращает максимальное время (в минутах) для выполнения задачи на каждом уровне сложности;

enum DifficultyLevel {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard",
    Expert = "Expert"
}

function getTimeLimit(level: DifficultyLevel): number {
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

const level = DifficultyLevel.Hard;
const timeLimit = getTimeLimit(level);
console.log(`Time limit for ${level} level: ${timeLimit} minutes`);


// 3. Создай enum `ShippingStatus`, представляющий состояния доставки: "Pending", "Shipped", "Delivered", "Returned". 
// Напиши функцию `getStatusMessage`, которая принимает `ShippingStatus` и возвращает сообщение в зависимости от состояния.

enum ShippingStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Returned = "Returned"
}

function getStatusMessage(status: ShippingStatus): string {
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

const status = ShippingStatus.Shipped;
const message = getStatusMessage(status);
console.log(`Shipping Status: ${status} - ${message}`);
