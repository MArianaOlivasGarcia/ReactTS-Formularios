
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css';


export const RegisterFormikPage = () => {


    return (
        <div>

            <h1>Formik Components</h1>


            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={ (values) => { 
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                        .min( 2, 'Minimo 2 caracteres')
                        .max( 15, 'Maximo 15 caracteres.')
                        .required('Este campo es requerido.'),
                    email: Yup.string()
                        .email('Correo electrónico no válido.')
                        .required('Este campo es requerido.'),
                    password: Yup.string()
                        .min( 6, 'Minimo 6 caracteres')
                        .required('Este campo es requerido.'),
                    confirmPassword: Yup.string()
                        .min( 6, 'Minimo 6 caracteres')
                        .oneOf([ Yup.ref('password') ], 'Las contraseñas no coinciden.')
                        .required('Este campo es requerido.')
                }) } >
                    { ( {handleReset} ) => (
                            <Form>
                                
                                    <label htmlFor="name">Nombre</label>
                                    <Field name='name' 
                                          type='text' />       
                                    <ErrorMessage name='name' component='span' />



                                    <label htmlFor="email">Correo electrónico</label>
                                    <Field name='email' 
                                          type='email' />       
                                    <ErrorMessage name='email' component='span'/>


                                    <label htmlFor="password">Contraseña</label>
                                    <Field name='password' 
                                          type='text' />       
                                    <ErrorMessage name='password' component='span' />


                                    <label htmlFor="confirmPassword">Confirma contraseña</label>
                                    <Field name='confirmPassword' 
                                          type='text' />       
                                    <ErrorMessage name='confirmPassword' component='span' />


                                    <button type="submit">
                                        Registrarme
                                    </button>

                                    <button onClick={ handleReset }>
                                        Reset Form
                                    </button>


                                </Form>
                        )}

            </Formik>

            

        </div>
    )
    
}
