interface IInput {
  placeholder: string; // Placeholder of input
  value: string; // Value to visualize input
  type: HTMLInputTypeAttribute | undefined; // // Type of input field
  required?: boolean | undefined; // Is required or not?
  onChange: (
    // Change state in form component
    event: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>
  ) => void;
  setStateFunction: Dispatch<SetStateAction<string>>; // SetState in form component
  min?: number;
  max?: number;
}

export default IInput;
