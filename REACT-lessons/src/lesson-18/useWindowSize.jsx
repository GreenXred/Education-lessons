// Создайте кастомный хук `useWindowSize`. Хук должен отслеживать ширину и высоту окна и обновляться при изменении размеров. 
// Используйте этот хук в компоненте и покажите размеры окна на экране.

import { useState, useEffect } from "react";

export default function useWindowSize() {
    
    const getSize = () => ({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    const [size, setSize] = useState(getSize);

    useEffect(() => {
        function resize() {
            const currentSize = getSize();

            setSize((updateSize) =>
                updateSize.width !== currentSize.width || updateSize.height !== currentSize.height ? currentSize : updateSize
            );
        }

        window.addEventListener('resize', resize); // добавляем обработчик события для динамического отображения 

        resize();

        return () => window.removeEventListener('resize', resize); // удаляем обработчик события при размонтировании компонента

    }, []);

    return size; 
}
