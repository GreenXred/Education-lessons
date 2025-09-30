import React, { Suspense, lazy, useState } from "react";
const BigComponent = lazy(() => import("./lesson-20/bigComponent"));


export default function App() {
    const [show, setShow] = useState(false);

    return (
        <>
            {show
                ? (
                    <Suspense fallback="Загрузка компонента...">
                        <BigComponent />
                    </Suspense>
                )
                : (
                    <button type="button" onClick={() => setShow(true)}>
                        Загрузить компонент
                    </button>
                )
            }

        </>
    )
}