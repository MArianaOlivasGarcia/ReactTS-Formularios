
import { Formik, Form } from 'formik'
import { MySelectInput, MyTextInput } from '../components';
import * as Yup from 'yup'

import dataJson from '../data/data.json'


const initialValues: {
    [key: string]: any
} = {}

const requiredFields: {
    [key: string]: any
} = {}



for ( const input of dataJson ) {
    initialValues[ input.name ] = input.value

    if ( !input.validations ) continue;

    let schema = Yup.string()

    for ( const rule of input.validations ) {

        if ( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido.')
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any ).value || 3, `Mínimo de ${ (rule as any ).value || 3 } caracteres`)
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( `Email no válido.`)
        }

    }


    requiredFields[input.name] = schema;

}


const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {

    return (
        <div>
            <h1>Dynamic Form</h1>


            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ values => {
                    console.log(values);
                }}>


                { ( formik ) => (
                    <Form>
                        
                        {
                            dataJson.map( ({ type, name, placeholder, label, options }) => {


                                if (type === 'input' || type === 'password'  || type === 'email') {
                                
                                    return  <MyTextInput 
                                        key={ name }
                                        type={ (type as any) }
                                        name={ name }
                                        label={ label }
                                        placeholder={ placeholder }
                                    /> 

                                } else if ( type === 'select' ) {

                                    return <MySelectInput
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                    >
                                        <option value=''>Seleccione una opción</option>
                                        {
                                            options?.map( ({id, label}) => (
                                                <option key={ id } value={ id }>{ label }</option>
                                            ))
                                        }
                                    </MySelectInput>
                                }
                                
                                throw new Error(`El type: ${ type } no es soportado.`);
                                
                            })
                        }

                        <button type="submit">Submit</button>

                    </Form>
                )}


            </Formik>
        </div>
    )
}
