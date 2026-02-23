// Import necessary components
import ContactForm from './ContactForm';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            {/* Date and Time Selection UI */}
            <div>
                <label>Select Date:</label>
                <input type='date' />
                <label>Select Time:</label>
                <input type='time' />
            </div>
            {/* Existing Contact Form */}
            <ContactForm />
        </div>
    );
};

export default ContactPage;