import React ,{useState} from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import './FormikPage.css'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible} from 'react-icons/ai';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const FormikForm = () => {
  const [showPassword,setShowPassword] = useState(false);
 return (
  <div className="formik-section">
        <h1>
      Basic{" "}
      <a
        href="https://github.com/jaredpalmer/formik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Formik
      </a>{" "}
      Demo
    </h1>
  
    <Formik
      initialValues={{ firstName:"",
                       lastName: "",
                        email: "",
                        password: "",
                        birthDate: "",
                        age: "",
                      }}
      onSubmit={ async(values,{resetForm}) => {
        await sleep(300);
        alert(JSON.stringify(values, null, 2));
        resetForm(values="");
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        email: Yup.string().email('Invalid email').required("Required"),
        password: Yup
        .string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      birthDate: Yup.date().required("Required"),
      age: Yup.number().required("Required"),
      })}
    >
      
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
    
        return (
          <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">
             FirstName
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.firstName && touched.firstName
                  ? "text-input errors"
                  : "text-input"
              }
            />
            {errors.firstName && touched.firstName && (
              <div className="input-feedback">{errors.firstName}</div>
            )}
             <label htmlFor="lastName">
             LastName
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.lastName && touched.lastName
                  ? "text-input errors"
                  : "text-input"
              }
            />
            {errors.lastName && touched.lastName && (
              <div className="input-feedback">{errors.lastName}</div>
            )}



            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input errors"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

               
                <label htmlFor="password">
                Password
            </label><br />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "text-input errors"
                  : "text-input"
              }
            /><span onClick={()=>setShowPassword(!showPassword)}>{showPassword? <AiOutlineEyeInvisible />:<AiOutlineEye />}</span>
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )} 
            <br />

           <label htmlFor="birthDate">
           BirthDate
            </label><br />
            <input
              type="date"
              id="birthDate"
              placeholder="Enter your birthDate"
              value={values.birthDate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.birthDate && touched.birthDate
                  ? "text-input errors"
                  : "text-input"
              }
            />
            {errors.birthDate && touched.birthDate && (
              <div className="input-feedback">{errors.birthDate}</div>
            )} <br />
             

             <label htmlFor="age">
             Age
            </label><br />
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.age && touched.age
                  ? "text-input errors"
                  : "text-input"
              }
            />
            {errors.age && touched.age && (
              <div className="input-feedback">{errors.age}</div>
            )}   <br /> <br />
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty}
            >
              Reset
            </button>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  </div>
 );
}


export default FormikForm;