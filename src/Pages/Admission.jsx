import React , {useState} from 'react'
import logo from '../assets/images/logo.png'
const Admission = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    classToApply: '',
    phone: '',
    dob: '',
    gender: '',
    guardianFirstName: '',
    guardianLastName: '',
    city: '',
    state: '',
    streetAddress: '',
    postalCode: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.classToApply) errors.classToApply = 'Class is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.dob) errors.dob = 'Date of Birth is required';
    if (!formData.guardianFirstName) errors.guardianFirstName = 'Guardian/Parent First Name is required';
    if (!formData.guardianLastName) errors.guardianLastName = 'Guardian/Parent Last Name is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.streetAddress) errors.streetAddress = 'Street Address is required';
    if (!formData.postalCode) errors.postalCode = 'Postal Code is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, handle submission (e.g., send data to server)
      console.log('Form Data Submitted:', formData);
      // Reset form or show success message if needed
    }
  };
  return (
    <>
    <div className="admissions-container p-8">
      <h2 className="text-3xl font-bold mb-6">Admissions</h2>

      {/* Admissions Process */}
      <div className="admissions-process mb-6">
        <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      </div>

      {/* Admission Criteria */}
      <div className="admissions-criteria mb-6">
        <h3 className="text-2xl font-semibold mb-4">Admission Criteria</h3>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      </div>

      {/* Important Dates */}
      <div className="important-dates">
        <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Admission Form Availability:</strong> March 1st</li>
          <li><strong>Last Date for Submission:</strong> March 31st</li>
          <li><strong>Entrance Test:</strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </div>
    </div>

    <div className='text-white bg-blue-900 w-full flex flex-col lg:flex-row'>
      
      <div className='w-full lg:w-[45%]'>
        <div className='  bg-black/20 absolute w-full lg:w-[45%] mt-10 h-[51.2rem]'>
         <h1 className='text-white font-bold text-center mt-[28%] w-[50%] mx-auto text-[3.5rem]'>Start <span className='text-blue-600'>Your</span> Fun Today!</h1> 
        </div>
        <div className='bg-blue-500'>
        <img className='h-[51.2rem] mt-10 w-full object-cover' src={logo} alt="" />
        </div>
      </div>

      <div className='w-full lg:w-[55%] mx-auto'>
      <form onSubmit={handleSubmit} className='w-full px-2 py-10 mx-auto p-2 flex flex-col gap-3 font-bold'>
      <h1 className='text-[1.5rem] border-b-2'>Admission Form</h1>
      
      <div className='flex gap-2 items-center'>
        <input
          className='w-full h-[3rem] outline-none p-2 text-black font-bold'
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder='First Name'
        />
        {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
        <input
          className='w-full h-[3rem] outline-none p-2 text-black font-bold'
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder='Last Name'
        />
        {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
      </div>

      <input
        className='w-full h-[3rem] outline-none p-2 text-black font-bold'
        type="text"
        name="classToApply"
        value={formData.classToApply}
        onChange={handleChange}
        placeholder='Class you want to apply for'
      />
      {errors.classToApply && <span className="text-red-500">{errors.classToApply}</span>}

      <input
        className='w-full h-[3rem] outline-none p-2 text-black font-bold'
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder='Phone'
      />
      {errors.phone && <span className="text-red-500">{errors.phone}</span>}
      
      <label htmlFor="dob">Students DOB:</label>
      <input
        className='w-full h-[3rem] outline-none p-2 text-black font-bold'
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      {errors.dob && <span className="text-red-500">{errors.dob}</span>}

      <div className='gap-2 flex flex-col'>
        <div className='flex items-center gap-4 text-[1.2rem]'>
          <div>Gender:</div>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                name='gender'
                value='male'
                checked={formData.gender === 'male'}
                onChange={handleRadioChange}
              />
              <p>Male</p>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                name='gender'
                value='female'
                checked={formData.gender === 'female'}
                onChange={handleRadioChange}
              />
              <p>Female</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <input
          className='w-full h-[3rem] outline-none p-2 text-black font-bold'
          type="text"
          name="guardianFirstName"
          value={formData.guardianFirstName}
          onChange={handleChange}
          placeholder='Guardians/Parents First Name'
        />
        {errors.guardianFirstName && <span className="text-red-500">{errors.guardianFirstName}</span>}
        <input
          className='w-full h-[3rem] outline-none p-2 text-black font-bold'
          type="text"
          name="guardianLastName"
          value={formData.guardianLastName}
          onChange={handleChange}
          placeholder='Guardians/Parents Last Name'
        />
        {errors.guardianLastName && <span className="text-red-500">{errors.guardianLastName}</span>}
      </div>

      <div className='flex items-center gap-3'>
        <input
          className='w-full h-[3rem] outline-none p-2 text-black font-bold'
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder='Your City'
        />
        {errors.city && <span className="text-red-500">{errors.city}</span>}
        <input
          className='w-full h-[3rem] outline-none p-2 text-black font-bold'
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder='Your State'
        />
        {errors.state && <span className="text-red-500">{errors.state}</span>}
      </div>

      <input
        className='w-full h-[3rem] outline-none p-2 text-black font-bold'
        type="text"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleChange}
        placeholder='Street Address'
      />
      {errors.streetAddress && <span className="text-red-500">{errors.streetAddress}</span>}

      <input
        className='w-full h-[3rem] outline-none p-2 text-black font-bold'
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        placeholder='Postal Code'
      />
      {errors.postalCode && <span className="text-red-500">{errors.postalCode}</span>}

      <input
        className='w-full h-[3rem] outline-none p-2 text-black font-bold'
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder='Email'
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}

      <button type="submit" className='bg-blue-500 py-4 text-[1.3rem] text-white'>Submit</button>
    </form>
      </div>
    </div>
    </>
  )
}

export default Admission
