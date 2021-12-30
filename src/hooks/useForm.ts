import { ChangeEvent, useState } from 'react';


export const useForm = <T>( initSate: T ) => {


    const [formValues, setFormValues] = useState(initSate)


    const onChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [ target.name ] : target.value
        })
    }


    const resetForm = () => {
        setFormValues( {...initSate} )
    }

    const isEmail = ( email: string ) => {
        const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(email);
    }

    return {
        formValues,

        onChange,
        resetForm,
        isEmail
    }
}