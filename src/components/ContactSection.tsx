import { ExternalLink,  Mail, MapPin, Phone } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";

import Linkedin from '../assets/Linkdn.svg'
import Github from '../assets/Github.svg'
import Instagram from '../assets/Instagram.svg'
import Twitter from '../assets/X.svg'




const ContactSection = ({ inView }: { inView: boolean }) => {
    const contactInfo = [
        { icon: Mail, label: "Email", value: "kehindetemitayo.b@gmail.com", href: "mailto:kehindetemitayo.b@gmail.com" },
        { icon: Phone, label: "Phone", value: "+234 8101288931", href: "tel:+2348101288931" },
        { icon: MapPin, label: "Location", value: "Nigeria", href: null },
        { icon: ExternalLink, label: "Portfolio", value: "kehindetemitayo.vercel.app", href: "https://kehindetemitayo.vercel.app" }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com/in/temitayo-kehinde", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/benkennyt", label: "GitHub" },
        { icon: Instagram, href: "https://instagram.com/iambenkenny", label: "Instagram" },
        { icon: Twitter, href: "https://x.com/BenKenny_T", label: "X" },


    ];

    return (
        <Section inview={inView} id="contact" title="Get In Touch">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        I'm currently open to new opportunities and interesting projects.
                        Let's connect and build something amazing together!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                <Card>
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="flex items-center">
                                    <contact.icon className="w-5 h-5 text-blue-400 mr-3" />
                                    {contact.href ? (
                                        <a
                                            href={contact.href}
                                            className="text-gray-300 hover:text-blue-400 transition-colors no-underline visited:text-gray-300 active:text-gray-300"
                                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="text-gray-300">{contact.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-300 mb-6">
                            Available for remote roles and open to relocation for onsite/hybrid opportunities.
                            Let's discuss how we can work together!
                        </p>
                        <div className="flex space-x-4 mb-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                                >
                                    <i className="w-6 h-6 text-gray-300 group-hover:text-white">
                                    <social.icon  />

                                    </i>
                                </a>
                            ))}
                        </div>
                        <Button className="w-full" onClick={() => window.open('mailto:kehindetemitayo.b@gmail.com', '_blank')}>
                            Send Email <Mail className="ml-2 w-4 h-4" />
                        </Button>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default ContactSection