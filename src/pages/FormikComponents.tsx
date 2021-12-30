
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


export const FormikComponents = () => {



    return (
        <div>

            <h1>Formik Components</h1>


            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ values => { 
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                        .max( 15, 'Maximo 15 caracteres.')
                        .required('Este campo es requerido.'),
                    lastName: Yup.string()
                        .max( 10, 'Maximo 10 caracteres.')
                        .required('Este campo es requerido.'),
                    email: Yup.string()
                        .email('Correo electrónico no válido.')
                        .required('Este campo es requerido.'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de accetar los terminos y condiciones'),
                    jobType: Yup.string()
                        .required('Seleccione un tipo de trabajo.')
                        .notOneOf(['junior'], 'La opción junior no es permitida.')
                }) } >
                    { ( formik ) => (
                            <Form>
                                
                                    <label htmlFor="firstName">Primer nombre</label>
                                    <Field name='firstName' 
                                          type='text' />       
                                    <ErrorMessage name='firstName' component='span' />


                                    <label htmlFor="lastName">Apellido</label>
                                    <Field name='lastName' 
                                          type='text' />       
                                    <ErrorMessage name='lastName' component='span' />


                                    <label htmlFor="email">Correo electrónico</label>
                                    <Field name='email' 
                                          type='email' />       
                                    <ErrorMessage name='email' component='span'/>


                                    <label htmlFor="jobType">Tipo</label>
                                    <Field name='jobType' as='select'>
                                        <option value=''>Seleccione un tipo</option>
                                        <option value='developer'>Developer</option>
                                        <option value='designer'>Diseñador</option>
                                        <option value='senior'>Senior</option>
                                        <option value='junior'>Junior</option>
                                    </Field>       
                                    <ErrorMessage name='jobType' component='span'/>


                                    <label> 
                                        <Field name='terms' 
                                            type='checkbox' /> 
                                        Terminos y condiciones
                                    </label>
                                    <ErrorMessage name='terms' component='span'/>


                                    <button
                                        type="submit">
                                        Enviar
                                    </button>

                                </Form>
                        )}

            </Formik>

            

        </div>
    )
}
