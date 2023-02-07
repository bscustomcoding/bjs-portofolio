import { useState, useEffect } from "react";
import { checkForKeyValue } from "../globalFunctions/pedicrates";

function useForm(objectState: any, conditionList: Array<string>, nestedObjectKey = '') {
  const [formState, setFormState] = useState(objectState);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (checkForKeyValue(formState, conditionList, nestedObjectKey)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formState, conditionList, nestedObjectKey]);

  return [formState, setFormState, formValid];
}

export default useForm;
