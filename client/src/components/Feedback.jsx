import React from 'react';
import { useForm } from "react-hook-form";
import './Help.css';

const Feedback = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    
  };

  return (
    <div className="form-container">
      <h1>Enter Your Feedback</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("feedback")} placeholder="Enter your Feedback" />
        {errors.feedback && <p>{errors.feedback.message}</p>}
        <br />
        <br />
        <div className="star-rating">
          <input {...register("rating")} type="radio" id="star5" name="rating" value="5" />
          <label htmlFor="star5" title="5 stars">★</label>
          <input {...register("rating")} type="radio" id="star4" name="rating" value="4" />
          <label htmlFor="star4" title="4 stars">★★</label>
          <input {...register("rating")} type="radio" id="star3" name="rating" value="3" />
          <label htmlFor="star3" title="3 stars">★★★</label>
          <input {...register("rating")} type="radio" id="star2" name="rating" value="2" />
          <label htmlFor="star2" title="2 stars">★★★★</label>
          <input {...register("rating")} type="radio" id="star1" name="rating" value="1" />
          <label htmlFor="star1" title="1 star">★★★★★</label>
        </div>
        <br />
        <br />
        <input disabled={isSubmitting} type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Feedback;
