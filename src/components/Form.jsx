import React, { useState } from "react";

const Form = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  console.log(formValues);

  const handleChange = (e) => {
    console.log(e.target);
    // setIsChecked(!isChecked);f
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };
  // regex patterns
  const patterns = {
    phone: /^\d{10}$/,
    name: /^[a-z\d]{5,10}([ ]{0,1})$/i,
    password: /^[\w@-]{8,20}$/,
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  };

  // validation function
  const validates = (input, regex) => {
    const errors = {};

    if (!input.name || input.name.match(/^\s+$/) !== null) {
      errors.name = "Username is required";
    } else if (!regex.name.test(input.name)) {
      errors.name = "Username must be alphanumeric and contain 5-12 characters";
    }
    if (!input.email.trim()) {
      errors.email = "Email is required";
    } else if (!regex.email.test(input.email)) {
      errors.email = "valid email address eg. me@domainname.com";
    }
    if (!input.password) {
      errors.password = "Password is required";
    } else if (!regex.password.test(input.password)) {
      errors.password = "password should be 8-20 characters";
    }
    if (!input.phone) {
      errors.phone = "Password is required";
    } else if (!regex.phone.test(input.phone)) {
      errors.phone = "valid phone no should be 10 digit long";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validates(formValues, patterns));
    setFormErrors(validates(formValues, patterns));
  };

  return (
    <div className="container-lg  my-5 py-2">
      <div className="text-center">
        <h4 className="">Fill Out The Form</h4>
        <hr />
      </div>
      <div className="row justify-content-center my-8">
        <div className="col-md-7">
          <form
            action=""
            className="  text-start border border-secondary rounded p-5"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="name" className="form-label ">
              Name
            </label>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-person"></i>
              </span>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="e.g. mario"
                name="name"
                value={formValues.name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p>{formErrors.name}</p>
            {/* --------------------------------------- */}
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="e.g. mario@example.com"
                name="email"
                value={formValues.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p>{formErrors.email}</p>
            {/* -------------------------------------------------- */}
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-key"></i>
              </span>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="e.g. Mario8@"
                name="password"
                value={formValues.password}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p>{formErrors.password}</p>
            {/* ---------------------------------- */}
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-telephone"></i>
              </span>
              <input
                id="phone"
                type="tel"
                className="form-control"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="e.g. 987-654-3210"
                name="phone"
                value={formValues.phone}
                onChange={(e) => {
                  handleChange(e);
                }}
                // required
              />
            </div>
            <p>{formErrors.phone}</p>
            {/* --------------------------------------- */}

            {/* <label htmlFor="phone" className="form-label">
            Submit The Form
          </label> */}
            <input
              type="submit"
              value="submit"
              className="form-control btn btn-secondary my-4"
              // style={{ width: '200px' }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
