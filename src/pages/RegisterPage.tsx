
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';


export const RegisterPage = () => {

    
    const { formValues, onChange, resetForm , isEmail } = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formValues;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log( formValues );
    }


    return (
        <div>
            <h1>Register Page</h1>

            <form 
                noValidate 
                onSubmit={ onSubmit }>

                <input 
                    type="text" 
                    placeholder='Nombre'
                    name='name'
                    value={ name }
                    onChange={ onChange }
                    className={`${ name.trim().length <= 0 && 'has-error' }`}
                />
                {
                    ( name.trim().length <= 0 ) 
                        && <span>Este campo es requerido.</span>
                }

                <input 
                    type="email" 
                    placeholder='Correo electrónico'
                    name='email'
                    value={ email }
                    onChange={ onChange }
                    className={`${ ( !isEmail( email ) || email.trim().length <= 0 )  && 'has-error' }`}
                />
                {
                    ( !isEmail( email ) || email.trim().length <= 0 ) 
                        && <span>Este campo es requerido.</span>
                }

                <input 
                    type="password" 
                    placeholder='Contraseña'
                    name='password'
                    value={ password }
                    onChange={ onChange }
                    className={`${ password.trim().length <= 0 && 'has-error' }`}
                />
                {
                    ( password.trim().length <= 0 ) 
                        && <span>Este campo es requerido.</span>
                }
                {
                    ( password.trim().length < 6 &&  password.trim().length > 0 ) 
                        && <span>Minimo 6 caracteres.</span>
                }

                <input 
                    type="password" 
                    placeholder='Confirma contraseña'
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={ onChange }
                    className={`${ confirmPassword.trim().length <= 0 && 'has-error' }`}
                />
                {
                    ( confirmPassword.trim().length <= 0 ) 
                        && <span>Este campo es requerido.</span>
                }
                {
                    ( confirmPassword.trim().length < 6 &&  confirmPassword.trim().length > 0 ) 
                        && <span>Minimo 6 caracteres.</span>
                }
                {
                    ( confirmPassword.trim().length >= 6 && password !== confirmPassword ) 
                        && <span>Las contraseñas no coinciden.</span>
                }


                <button type="submit">
                    Registrarme
                </button>

                <button onClick={ resetForm }>
                    Reset Form
                </button>

            </form>


        </div>
    )
}
