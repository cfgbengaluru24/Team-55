import React from 'react'
import { useForm } from "react-hook-form";

import './Help.css';

const StudentSignUp = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {


  };
  return (
    <>
    <div className="form-container">
      <h1>Sign Up</h1>
      <form action='' onSubmit={handleSubmit(onSubmit)}> 
        <div className="container">
            <input 
              {...register("email", { required: 'true', message:"Email is required" })} 
              placeholder="email" 
              type="email" 
            />
          {errors.email && <div>{errors.email.message}</div>}
          <br/>
          <br/>
          <input 
              {...register("password", { required: 'true', message:" Password is required" })} 
              placeholder="Password" 
              type="password" 
            />
          
          <br/>
          <br/>
          <input 
              {...register("college-name", { required: 'true', message:"college name is required" })} 
              placeholder="College name" 
              type="text" 
            />
          <br/>
          <br/>
          <input 
              {...register("course-name", { required: 'true', message:"course name is required" })} 
              placeholder="course name" 
              type="text" 
            />
          <br/>
          <br/>
          <input disabled={isSubmitting} type='submit' value='Submit'/>
        </div>
      </form>
      </div>
    </>
  )
}

export default StudentSignUp