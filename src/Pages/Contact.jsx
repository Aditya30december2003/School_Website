import React , {useState} from 'react';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
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
    <div className="contact-container p-8">
      <h2 className="text-3xl font-bold mb-6">General INQUIRIES</h2>

      {/* Contact Form */}
      <div className="contact-form mb-6 bg-blue-900 p-2 text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 font-semibold">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`p-2 outline-none border rounded ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Your Name"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`p-2 outline-none border rounded ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Your Email"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 font-semibold">Questions/Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={`p-2 border outline-none rounded ${errors.message ? 'border-red-500' : ''}`}
          rows="4"
          placeholder="Question"
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full rounded mx-auto"
      >
        Send
      </button>
    </form>
      </div>

      
      <div className="google-maps flex flex-col lg:flex-row mt-12 w-full">
      <div className="contact-info mb-6 w-full lg:w-[50%]">
        <h3 className="text-2xl font-semibold mb-2">Address</h3>
        <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Phone</h3>
        <p>+1 (123) 456-7890</p>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Email</h3>
        <p><a href="mailto:info@springdale.edu" className="text-blue-500">info@springdale.edu</a></p>
      </div>

      <div className='w-full lg:w-[50%]'>
        <h3 className="text-2xl font-semibold mb-4">Find Us on Google Maps</h3>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.8621622416514!2d-121.98908608469046!3d37.3590869798428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcaf3fdf6c2df%3A0x540044f538b264f2!2s123%20Education%20Lane%2C%20Cityville%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1625845697987!5m2!1sen!2sus"
          className="w-full h-64 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        </div>
      </div>


    </div>
  );
};

export default ContactUs;
