


import { ErrorMessage, useField } from 'formik'

interface Props {
    label: string
    name: string
    [ x: string ]: any
}

export const MyCheckBox = ( { label, ...props }: Props ) => {

    // onChange onBlur value ...field
    const [ field ] = useField( props )    

    return (
        <>
            <label>
                <input type='checkbox' { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component='span' />
        </>
    )
}
