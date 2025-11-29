import React, { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS Configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Validation functions
  const validateEmail = (email: string): string | undefined => {
    if (!email) {
      return 'Email is required';
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address (e.g., john@example.com)';
    }
    
    if (email.length > 254) {
      return 'Email address is too long (maximum 254 characters)';
    }
    
    return undefined;
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters long';
        if (value.trim().length > 100) return 'Name must be less than 100 characters';
        return undefined;
      
      case 'email':
        return validateEmail(value);
      
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters long';
        if (value.trim().length > 200) return 'Subject must be less than 200 characters';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters long';
        if (value.trim().length > 2000) return 'Message must be less than 2000 characters';
        return undefined;
      
      default:
        return undefined;
    }
  };

  const validateForm = (): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    Object.entries(formData).forEach(([fieldName, value]) => {
      const error = validateField(fieldName, value);
      if (error) {
        errors[fieldName as keyof FormData] = error;
      }
    });
    
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error for this field when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Real-time validation for email field
    if (name === 'email' && value) {
      const emailError = validateEmail(value);
      setValidationErrors(prev => ({
        ...prev,
        email: emailError
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setSubmitStatus('error');
      return;
    }

    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration missing. Please check environment variables.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors({});

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_name: 'Thushar D M',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:tushardm123@gmail.com">tushardm123@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+919964593390">+91 9964593390</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/thushar-d-m" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/thushar-d-m
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/Thushardm" target="_blank" rel="noopener noreferrer">
                  github.com/Thushardm
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Enter your full name"
                  className={validationErrors.name ? 'error' : ''}
                />
                {validationErrors.name && (
                  <div className="validation-error">
                    <i className="fas fa-exclamation-circle"></i>
                    {validationErrors.name}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Enter your email address"
                  className={validationErrors.email ? 'error' : ''}
                />
                {validationErrors.email && (
                  <div className="validation-error">
                    <i className="fas fa-exclamation-circle"></i>
                    {validationErrors.email}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder="What is this about?"
                  className={validationErrors.subject ? 'error' : ''}
                />
                {validationErrors.subject && (
                  <div className="validation-error">
                    <i className="fas fa-exclamation-circle"></i>
                    {validationErrors.subject}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  placeholder="Tell me more about your project, collaboration idea, or just say hello!"
                  className={validationErrors.message ? 'error' : ''}
                />
                {validationErrors.message && (
                  <div className="validation-error">
                    <i className="fas fa-exclamation-circle"></i>
                    {validationErrors.message}
                  </div>
                )}
              </div>
              
              <button
                type="submit"
                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  <i className="fas fa-exclamation-circle"></i>
                  Oops! Something went wrong. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
