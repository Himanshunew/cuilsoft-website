import React from "react";
import { ContactForm } from "../../molecules/contact-form";
import ContactUsInfo from "../../molecules/contact-info";
const ContactSection = () => {
  return (
    <section className="contact_main pt-20 md:py-24 pb-20 md:pb-24 lg:px-16 bg-[#fafafa]">
      <div className="container">
        <div className="md:flex mb-14  gap-8">
          <ContactUsInfo />
          <ContactForm />
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6862.662493354451!2d76.73347447771987!3d30.680954876620735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec0f85a242e5%3A0xf0cb2215497ec31e!2sCuilsoft!5e0!3m2!1sen!2sin!4v1663236307833!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
