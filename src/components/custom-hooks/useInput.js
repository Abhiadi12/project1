import { useState } from "react";
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState({});
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const validator = {
    name: (value) => value.length > 0,
    email: (value) => emailRegex.test(value),
    phone: (value) => phoneRegex.test(value),
    message: (value) => value.length > 0,
  };

  const changeHandler = (event) => {
    const { id, value } = event.target;
    // validator[id](value) ? setError({...error, [id]: ""}) : setError({...error })
    switch (id) {
      case "name":
        validator[id](value)
          ? setError({})
          : setError({ [id]: "Name can't be blank" });
        setValue(event.target.value);

        break;
      case "email":
        validator[id](value)
          ? setError({})
          : setError({ [id]: "Please enter a valid email address" });
        setValue(event.target.value);
        break;
      case "phone":
        validator[id](value)
          ? setError({})
          : setError({ [id]: "Please enter a valid phone number" });
        setValue(event.target.value);
        break;
      case "message":
        validator[id](value)
          ? setError({})
          : setError({ [id]: "Please enter your query" });
        setValue(event.target.value);
        break;
    }
  };
  const reset = () => setValue(initialValue);

  return {
    value,
    onChange: changeHandler,
    reset,
    error,
  };
}

export default useInput;
