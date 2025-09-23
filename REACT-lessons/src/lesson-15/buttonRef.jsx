import { useRef } from "react";
import CustomButton from "./customButton.jsx";

export default function ButtonRef() {
  const btnRef = useRef(null);
  return (
    <div>
      <input placeholder="Введите текст" />
      <CustomButton ref={btnRef}>Фокус</CustomButton>
    </div>
  );
}