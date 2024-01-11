import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const inputFeild = useRef(null);
  useEffect(() => {
    inputFeild.current = document.querySelector("input");
    inputFeild.current.focus();
    handleButtonClick();
  }, []);

  const handleButtonClick = () => {
    alert("button got clicked");
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
