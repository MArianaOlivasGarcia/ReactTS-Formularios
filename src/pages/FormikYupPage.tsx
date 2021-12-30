
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


export const FormikYupPage = () => {

    
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: ( values ) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max( 15, 'Maximo 15 caracteres.')
                .required('Este campo es requerido.'),
            lastName: Yup.string()
                .max( 10, 'Maximo 10 caracteres.')
                .required('Este campo es requerido.'),
            email: Yup.string()
                .email('Correo electrónico no válido.')
                .required('Este campo es requerido.'),
        })
    })

    return (
        <div>

            <h1>Formik Yup</h1>

            <form 
                noValidate
                onSubmit={ handleSubmit }>

                <label htmlFor="firstName">Primer nombre</label>
                <input 
                    type="text"
                    { ...getFieldProps('firstName') }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Apellido</label>
                <input 
                    type="text" 
                    { ...getFieldProps('lastName') }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }


                <label htmlFor="email">Correo electrónico</label>
                <input 
                    type="email" 
                    { ...getFieldProps('email') }
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
