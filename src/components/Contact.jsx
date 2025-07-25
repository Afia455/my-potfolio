import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import {cn} from "@/lib/utils";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
    const form = useRef();
      const sendEmail = (e) => {
    e.preventDefault();

    alert("Successfully Submited your message");

    emailjs
      .sendForm('service_ijyy1cs', 'template_p0bwdxp', form.current, {
        publicKey: 'TOEB8zJakHD8Le0Rn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };















    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     setTimeout(() => {
            
    //     }, 1500
    //     )
    // }

    return (
        <section 
        id="contact"
        className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate?
                    Feel free to reach out, I'm always open to
                    discussing new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-8">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex item-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:mughalafia200@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        mughalafia200@gmail.com
                                    </a>
                                </div>
                            </div>


                            <div className="flex item-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tell:+923183297771" className="text-muted-foreground hover:text-primary transition-colors">
                                        +(92) 318 3297771
                                    </a>
                                </div>
                            </div>


                            <div className="flex item-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">

                                        Township Sukkur, Sindh 
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with me</h4>
                            <div className="flex space-x-4 justify-content">
                                <a href="www.linkedin.com/in/afia-mughal-6b6703301" target="_blank">
                                   <Linkedin /> 
                                </a>

                                <a href="#" target="_blank">
                                   <Twitter /> 
                                </a>

                                <a href="https://github.com/Afia455" target="_blank">
                                   <Github /> 
                                </a>

                                <a href="#" target="_blank">
                                   <Instagram /> 
                                </a>
                            </div>    
                        </div>
                        
                    </div>


                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                        <form ref={form} onSubmit={sendEmail} action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-3 rounded-md py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Afia Mughal..." />
                            </div>


                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-3 rounded-md py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="mughalafia@gmail.com" />
                            </div>


                            <div>
                                <label htmlFor="massage" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required className="w-full px-3 rounded-md py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="write your query..." />
                            </div>

                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}>
                                Send Massege
                                <Send size={16} />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}