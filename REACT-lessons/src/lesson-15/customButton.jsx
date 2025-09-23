// 3. Создай компонент CustomButton, который принимает ref и фокусируется на кнопке при монтировании.

import { forwardRef, useEffect } from "react";

const CustomButton = forwardRef(function CustomButton(props, ref) {
  useEffect(function () {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return <button ref={ref} type="button" {...props} />;
});

export default CustomButton;