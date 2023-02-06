import { useState, useEffect } from 'react';

function useForm(state: any) {
  const [formState, setFormState] = useState(state);
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (formState.firstName.length && formState.lastName.length) {
        setFormValid(true);
    } else {
        setFormValid(false)
    }

  }, [formState])

  
  
  return [formState, setFormState, formValid];
}

export default useForm