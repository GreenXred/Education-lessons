// 1. Создай два типа, представляющих детали продуктов: `BasicProduct` с названием и ценой и `DiscountProduct`, который включает скидку. 
// Используя пересечение, создайте тип `FeaturedProduct` и напиши функцию, принимающую этот тип и выводящую информацию о продукте со скидкой;

type BasicProduct = {
    name: string;
    price: number;
};

type DiscountProduct = {
    discount: number; // в процентах
};

type FeaturedProduct = BasicProduct & DiscountProduct;

function displayFeaturedProduct(product: FeaturedProduct): void {
    const discountedPrice = product.price * (1 - product.discount / 100);
    console.log(`Product: ${product.name} - ${discountedPrice.toFixed()} (Discount: ${product.discount}%)`);
}

const featuredProduct: FeaturedProduct = {
    name: "Iphone",
    price: 1200,
    discount: 15
};

displayFeaturedProduct(featuredProduct);

// 2. Создай переменную типа `unknown` и напиши функцию, которая принимает эту переменную, и обрабатывает её в зависимости от типа. 
// Например, если тип переменной - строка, то выводим ее в консоль и так далее;

const data: unknown = "some string";

if (typeof data === 'string') {
    console.log(data.toUpperCase());
}

// 3*. Представь, что ты разрабатываешь приложение для списка задач. 
// В этом задании нужно создать типы для задач и пользователей, а затем отфильтровать задачи, 
// доступные каждому типу пользователя, используя объединение типов и специальные типы.

// Тебе нужно:



// 1) Создать типы `Admin`, `User`, `Guest`, представляющие разных пользователей:

//     - Admin — видит все задачи, включая скрытые.

//     - User — видит только активные задачи.

//     - Guest — видит только публичные задачи.

//     Объедини роли пользователей, чтобы создать общий тип `Person`.



// 2)  Опиши тип `Task`, который может содержать поля `title`, `isActive`, `isPublic` и `isHidden`.


// 3) Напиши функцию `filterTasks`, которая принимает массив задач и пользователя типа `Person` (Admin, User или Guest).
// Используй подходящий специальный тип (какой - тебе нужно выбрать) для проверки типа пользователя перед выполнением фильтрации.
// Пусть функция возвращает только те задачи, которые соответствуют правам конкретного пользователя:

//     - Admin видит все задачи.

//     - User — только те, что активны (`isActive: true`).

//     - Guest — только публичные (`isPublic: true`).

// 4) Если тип пользователя не соответствует Admin, User или Guest, выброси ошибку через функцию с подходящим специальным типом, 
// чтобы обработать случай неправильного типа.

type Admin = {
    role: 'admin';
};

type User = {
    role: 'user';
};

type Guest = {
    role: 'guest';
};

type Person = Admin | User | Guest;

type Task = {
    title: string;
    isActive: boolean;
    isPublic: boolean;
    isHidden: boolean;
};

function throwRoleError(role: string): never {
    throw new Error(`Неверный тип пользователя: ${role}`);
}

function checkUserRole(role: string): Person {
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

function filterTasks(tasks: Task[], person: Person): Task[] {
    if (person.role === 'admin') {
        return tasks;
    } else if (person.role === 'user') {
        return tasks.filter(task => task.isActive);
    } else if (person.role === 'guest') {
        return tasks.filter(task => task.isPublic);
    }
    return [];
}


const tasks: Task[] = [
    { title: "Task 1", isActive: true, isPublic: true, isHidden: false },
    { title: "Task 2", isActive: false, isPublic: true, isHidden: false },
    { title: "Task 3", isActive: true, isPublic: false, isHidden: true },
    { title: "Task 4", isActive: false, isPublic: false, isHidden: true },
];

console.log('Admin Tasks:', filterTasks(tasks, { role: 'admin' }));
console.log('User Tasks:', filterTasks(tasks, { role: 'user' }));
console.log('Guest Tasks:', filterTasks(tasks, { role: 'guest' }));

