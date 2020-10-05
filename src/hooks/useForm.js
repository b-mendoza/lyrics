import { useState } from 'react';

export const useForm = formValues => {
    const [values, setValues] = useState(formValues);

    const handleChange = ({ target }) =>
        setValues({ ...values, [target.name]: target.value });

    return [values, handleChange];
};
