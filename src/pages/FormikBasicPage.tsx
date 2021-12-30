
import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'


interface FormValues {
    firstName: string
    lastName: string
    email: string
}

export const FormikBasicPage = () => {

    
    const validate = ( { firstName, lastName, email }: FormValues  ) => {

        const errors: FormikErrors<FormValues> = {}

        if ( !firstName ) {
            errors.firstName = 'Este campo es requerido.'
        } else if ( firstName.length > 15 ) {
            errors.firstName = 'Debe ser menos de 15 caracteres.'
        }

        if ( !lastName ) {
            errors.lastName = 'Este campo es requerido.'
        } else if ( lastName.length > 10 ) {
            errors.lastName = 'Debe ser menos de 10 caracteres.'
        }

        if (!email) {
          errors.email = 'Este campo es requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Correo electrónico no válido';
        }

        return errors;

    }

    const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: ( values ) => {
            console.log(values);
        },
        validate
    })

    const { firstName, lastName, email } = values;


    return (
        <div>

            <h1>Formik Basic</h1>

            <form 
                noValidate
                onSubmit={ handleSubmit }>

                <label htmlFor="firstName">Primer nombre</label>
                <input 
                    type="text" 
                    name="firstName"
                    onBlur={ handleBlur }
                    value={ firstName }
                    onChange={ handleChange } 
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Apellido</label>
                <input 
                    type="text" 
                    name="lastName"
                    onBlur={ handleBlur }
                    value={ lastName } 
                    onChange={ handleChange }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }


                <label htmlFor="email">Correo electrónico</label>
                <input 
                    type="email" 
                    name="email" 
                    onBlur={ handleBlur }
                    value={ email }
                    onChange={ handleChange }
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }


                <button
                    type="submit">
                    Enviar
                </button>

            </form>
        </div>
    )
}
