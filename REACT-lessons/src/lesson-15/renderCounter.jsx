// 2. Создай компонент RenderCounter, который отображает количество ререндеров. Подсказка - используй useRef.

import { useRef, useState } from "react";

export default function RenderCounter() {
  const renders = useRef(0);
  const [n, setN] = useState(0);

  renders.current = renders.current + 1;



  return (
    <div>
      <p>Ререндеров: {renders.current}</p>
      <button type="button" onClick={function () { setN(n + 1); }}>
        Увеличить
      </button>
    </div>
  );
}

// из-за StrictMode реакт удваивает рендер