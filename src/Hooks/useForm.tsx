import { useState, useEffect } from "react";
import { checkForKeyValue } from "../globalFunctions/pedicrates";

function useForm(state: any, conditionList: Array<string>) {
  const [formState, setFormState] = useState(state);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (checkForKeyValue(formState, conditionList)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formState, conditionList]);

  return [formState, setFormState, formValid];
}

export default useForm;
