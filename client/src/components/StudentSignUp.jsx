import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './Help.css';

const StudentSignUp = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate(); // Use the useNavigate hook

  const onSubmit = async (data) => {
    const emailId = data.email;
    const pwd = data.password;
    if (emailId === "user01@gmail.com" && pwd === "1234") {
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="container">
          <input 
            {...register("email", { required: 'true', message: "Email is required" })} 
            placeholder="email" 
            type="text" 
          />
          {errors.email && <div>{errors.email.message}</div>}
          <br/>
          <br/>
          <input 
            {...register("password", { required: 'true', message: "Password is required" })} 
            placeholder="Password" 
            type="text" 
          />
          <br/>
          <br/>
          <input 
            {...register("college-name", { required: 'true', message: "College name is required" })} 
            placeholder="College name" 
            type="text" 
          />
          <br/>
          <br/>
          <input 
            {...register("course-name", { required: 'true', message: "Course name is required" })} 
            placeholder="Course name" 
            type="text" 
          />
          <br/>
          <br/>
          <input disabled={isSubmitting} type='submit' value='Submit'/>
        </div>
      </form>
    </div>
  );
}

export default StudentSignUp;
