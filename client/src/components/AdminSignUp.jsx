import React from 'react';
import './Help.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AdminSignUp = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        const emailId = data.email;
        const pwd = data.password;
        if (emailId === "admin01@gmail.com" && pwd === "1234") {
            // redirect to the admin portal
            navigate("/");
        }
    };

    return (
        <>
            <div className="form-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <div className="container">
                        <input 
                            {...register("email", { required: 'Email is required' })} 
                            id="email" 
                            name="email" 
                            placeholder="Email" 
                            type="text" 
                            autoComplete="email" 
                        />
                        {errors.email && <div>{errors.email.message}</div>}
                        <br/>
                        <br/>
                        <input 
                            {...register("password", { required: 'Password is required' })} 
                            id="password" 
                            name="password" 
                            placeholder="Password" 
                            type="password" 
                            autoComplete="current-password" 
                        />
                        {errors.password && <div>{errors.password.message}</div>}
                        <br/>
                        <br/>
                        <input disabled={isSubmitting} type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminSignUp;
