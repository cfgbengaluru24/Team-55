import React from 'react';
import { useForm } from "react-hook-form";
// import '../App.css';
import './Help.css';

const Help = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
   
  };

  return (
    <>
      <div className="form-container">
      <h1>Enter Query for Help</h1>
      <form action='' onSubmit={handleSubmit(onSubmit)}> 
        <div className="container">
            {/* <input 
              {...register("email", { required: 'Email is required.' })} 
              placeholder="email" 
              type="email" 
            /> */}
          {errors.email && <div>{errors.email.message}</div>}
          <br/>
          <br/>
          
          <select {...register("category", { required: true })}>
            <option value="Family Issue">Family Issue</option>
            <option value="Financial Issue">Financial Issue</option>
            <option value="Subject Doubt">Subject Doubt</option>
            <option value="Other">Other</option>
          </select>
          <br/>
          <br/>
          <textarea {...register("query")} placeholder="Enter your Query" />
          <br/>
          <br/>
          <input disabled={isSubmitting} type='submit' value='Submit'/>
        </div>
      </form>
      </div>
      
    </>
  );
}

export default Help;
