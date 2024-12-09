import { useState, FormEvent, ChangeEvent } from 'react';
import { Send } from 'lucide-react';
import "../styles/Contact.css"

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleContactSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactForm.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactForm.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={contactForm.message}
            onChange={handleInputChange}
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
          <Send className="send-icon" />
        </button>
      </form>
    </div>
  </section>
  )
}

export default Contact