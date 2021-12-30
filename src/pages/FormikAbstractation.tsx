
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelectInput, MyCheckBox } from '../components'
import '../styles/styles.css'


export const FormikAbstractation = () => {



    return (
        <div>

            <h1>Formik Abstractation</h1>


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
                                    <MyTextInput 
                                        name='firstName'
                                        label='Primer nombre'
                                        type='text'
                                        placeholder='Primer nombre'
                                    />

                                    <MyTextInput 
                                        name='lastName'
                                        label='Apellido'
                                        type='text'
                                        placeholder='Apellido'
                                    />


                                    <MyTextInput 
                                        name='email'
                                        label='Correo electrónico'
                                        type='email'
                                        placeholder='email@email.com'
                                    />


                                    <MySelectInput label='Tipo de trabajo' name='jobType'>
                                        <option value=''>Seleccione un tipo</option>
                                        <option value='developer'>Developer</option>
                                        <option value='designer'>Diseñador</option>
                                        <option value='senior'>Senior</option>
                                        <option value='junior'>Junior</option>
                                    </MySelectInput>


                                    <MyCheckBox name='terms' label='Terminos y condiciones.'/>

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
