import { ACTIONS } from "./Calculator";

export default function DigitButton({ digit, dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {/* How to log in template */}
      {/* {console.log(digit)} */}
      {digit}
    </button>
  );
}
