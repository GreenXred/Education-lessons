// Создай файл BigComponent.jsx, в котором выводится любой текст. Импортируй его в App.jsx с помощью React.lazy(). 
// Оберни его в Suspense с fallback="Загрузка компонента...". Сделай так, чтобы он появлялся только после клика на кнопку.

export default function BigComponent() {
    return (
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
    )
}