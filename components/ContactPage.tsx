
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  
  const [careerSubmitStatus, setCareerSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [careerErrorMessage, setCareerErrorMessage] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    try {
      const formDataObj = Object.fromEntries(formData.entries());
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: "New Contact Form Submission from Niccocables Website",
          from_name: formDataObj.name,
          email: formDataObj.email,
          phone: formDataObj.phone,
          company: formDataObj.company || 'N/A',
          message: formDataObj.message || 'N/A'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setErrorMessage('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  const handleCareerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCareerSubmitStatus('loading');
    setCareerErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: "New Career Application from Niccocables Website",
          name: formDataObj.name,
          email: formDataObj.email,
          phone: formDataObj.phone,
          position: formDataObj.position,
          cv_link: formDataObj.cv_link,
          message: formDataObj.message || 'N/A'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setCareerSubmitStatus('success');
      } else {
        setCareerSubmitStatus('error');
        setCareerErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Career form submission error:", error);
      setCareerSubmitStatus('error');
      setCareerErrorMessage('Network error. Please try again later.');
    }
  };

  const regionalOffices = [
    {
      city: "Mumbai",
      icon: "/brand identity/Mumbai.png",
      address: [
        "2O7, 2nd Floor",
        "Hubtown Viva",
        "Western Express Highway",
        "Jogeshwari (East) Mumbai, 400060"
      ]
    },
    {
      city: "Noida",
      icon: "/icons/Noida.png",
      address: [
        "Office No.404, 4th Floor",
        "Wave Silver Tower",
        "Sec 18,",
        "Noida – 201301"
      ]
    },
    {
      city: "Hyderabad",
      icon: "/brand identity/Hyderabad.png",
      address: [
        "48, 2nd Floor,",
        "Sarvasukhi Colony, West Marredpally,",
        "above Indian Overseas Bank,",
        "Sarvasukhi Colony,",
        "Secundarabad-500026"
      ]
    },
    {
      city: "Bhubaneswar",
      icon: "/brand identity/Bhubhaneswar.png",
      address: [
        "Pl. No. - 44, 1st floor,",
        "Ananda Bhaban",
        "Near Bharat Petrol Pump,",
        "Rasulgarh,",
        "Bhubaneswar- 751010"
      ]
    },
    {
      city: "Chennai",
      icon: "/brand identity/Chennai.png",
      address: [
        "Haive House, Old. No. 1226 New No. 24,",
        "20th Main Road, Anna Nagar,",
        "Chennai – 600040"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 md:pt-56 pb-16 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-6"
            >
              CONTACT US
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8"
            >
              <span className="block md:inline md:whitespace-nowrap">Have a question about our products or</span>
              <br className="hidden md:block" />
              <span className="block md:inline md:whitespace-nowrap">require technical support?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-white leading-relaxed font-light max-w-2xl"
            >
              Our team is here to assist you with product inquiries, project requirements, and technical{"\u00A0"}guidance.
            </motion.p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs font-black text-white uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@niccocables.com" className="text-sm font-bold text-white hover:text-brand-secondary transition-colors">info@niccocables.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs font-black text-white uppercase tracking-widest mb-1">Contact</p>
                  <a href="tel:03340647177" className="text-sm font-bold text-white hover:text-brand-secondary transition-colors">(033) 40647177</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Quick Form */}
            <div className="lg:col-span-5">
              <div className="bg-brand-ash p-6 md:p-8 rounded-[2rem] border-gray-100 shadow-xl sticky top-24">
                <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-6">QUICK FORM</h3>
                
                {submitStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h4 className="text-xl font-black text-brand-dark tracking-tighter mb-2">Message{"\u00A0"}Sent!</h4>
                    <p className="text-black font-medium mb-6 text-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                    <button 
                      onClick={() => setSubmitStatus('idle')}
                      className="text-xs font-bold text-brand-secondary uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-1.5 block">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-1.5 block">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-1.5 block">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-1.5 block">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest mb-1.5 block">Message (Optional)</label>
                      <textarea 
                        name="message"
                        rows={3} 
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-secondary transition-all resize-none"
                      ></textarea>
                    </div>
                    
                    {submitStatus === 'error' && (
                      <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                        {errorMessage || 'Something went wrong. Please try again.'}
                      </p>
                    )}

                    <button 
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className={`w-full bg-brand-secondary text-white font-black text-xs uppercase tracking-[0.3em] py-4 rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10 ${submitStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {submitStatus === 'loading' ? 'SENDING...' : 'SEND MESSAGE'} <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Offices */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-16"
            >
              
              {/* Head Office */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-brand-ash flex items-center justify-center flex-shrink-0 border border-brand-secondary/20 overflow-hidden p-2">
                  <img src="/brand identity/Head Office icon.png" alt="Head Office" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-1">HEAD OFFICE</h3>
                    <h4 className="text-2xl font-black text-brand-dark tracking-tighter">Nicco Cables</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-base text-black leading-relaxed font-medium">
                        Suket Building, 2nd Floor, 20 Ballygunge Circular Road Kolkata - 700019
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden shadow-2xl aspect-video bg-gray-100 border border-gray-100">
                      {/* Map for Head Office - Kolkata */}
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.9786!2d88.36!3d22.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02766666666667%3A0x6666666666666666!2s20%20Ballygunge%20Circular%20Road%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1710312000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Head Office Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing Plant */}
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-brand-ash flex items-center justify-center flex-shrink-0 border border-brand-secondary/20 overflow-hidden p-2">
                  <img src="/brand identity/Manufacturing Plant Icon.png" alt="Manufacturing Plant" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-1">MANUFACTURING PLANT</h3>
                    <h4 className="text-2xl font-black text-brand-dark tracking-tighter">Shyamnagar Unit</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("71 East Ghosh Para Road, North 24 Pgs., West Bengal – 743128")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-black leading-relaxed font-medium hover:text-brand-secondary transition-colors inline-block"
                      >
                        Shyamnagar Unit, 71 East Ghosh Para Road, North 24 Pgs., West Bengal – 743128
                      </a>
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden shadow-2xl aspect-video bg-gray-100 border border-gray-100">
                      {/* Map for Manufacturing Plant */}
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.9654!2d88.38!3d22.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ5JzQ4LjAiTiA4OMKwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1710312000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Manufacturing Plant Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-3">REGIONAL OFFICES</h3>
                  <div className="h-[1px] w-full bg-gray-100" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {regionalOffices.map((office, idx) => (
                    <div key={idx} className="bg-brand-ash/30 p-6 rounded-[1.5rem] border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col gap-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden p-2 mt-1">
                          <img src={office.icon} alt={office.city} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="flex flex-col mb-1">
                            <h4 className="text-lg font-black text-brand-dark tracking-tighter uppercase">{office.city}</h4>
                          </div>
                          <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.city} ${office.address.join(' ')}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black leading-relaxed font-medium hover:text-brand-secondary transition-colors block"
                          >
                            {office.address.map((line, i) => (
                              <React.Fragment key={i}>
                                {line}<br />
                              </React.Fragment>
                            ))}
                          </a>
                        </div>
                      </div>
                      <div className="w-full h-48 rounded-xl overflow-hidden shadow-inner border border-gray-200">
                        <iframe 
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(`${office.address.join(', ')}, ${office.city}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${office.city} Office Map`}
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Careers Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-brand-ash"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-6">CAREERS</h3>
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter leading-tight mb-8">
                Join Our Team & Build the Future of Power
              </h2>
              <p className="text-lg text-black leading-relaxed font-medium mb-8">
                At Nicco Cables, we're always looking for passionate individuals to join our growing family. If you're ready to make an impact in the cable industry, we want to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Mail className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <p className="text-sm font-bold text-brand-dark">info@niccocables.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-8 text-center">APPLY NOW</h3>
              
              {careerSubmitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-2xl font-black text-brand-dark tracking-tighter mb-4">Application Received!</h4>
                  <p className="text-black font-medium mb-8 text-base">Thank you for your interest. Our HR team will review your CV and contact you shortly.</p>
                  <button 
                    onClick={() => setCareerSubmitStatus('idle')}
                    className="text-xs font-bold text-brand-secondary uppercase tracking-widest hover:underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleCareerSubmit}
                  className="space-y-6"
                >
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-2 block">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-2 block">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-2 block">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-2 block">Position Applied For</label>
                      <input 
                        type="text" 
                        name="position"
                        required
                        placeholder="Sales Manager"
                        className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-2 block">Link to CV / Resume</label>
                    <input 
                      type="url" 
                      name="cv_link"
                      required
                      placeholder="https://drive.google.com/..."
                      className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all" 
                    />
                    <p className="text-[10px] text-brand-muted mt-2 uppercase tracking-widest font-bold">Please provide a link (Google Drive, Dropbox, or LinkedIn)</p>
                  </div>

                  <div>
                    <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-2 block">Message / Cover Letter</label>
                    <textarea 
                      name="message"
                      rows={4} 
                      placeholder="Tell us about yourself..."
                      className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all resize-none"
                    ></textarea>
                  </div>

                  {careerSubmitStatus === 'error' && (
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                      {careerErrorMessage}
                    </p>
                  )}

                  <button 
                    type="submit"
                    disabled={careerSubmitStatus === 'loading'}
                    className={`w-full bg-brand-dark text-white font-black text-xs uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-brand-secondary transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10 ${careerSubmitStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {careerSubmitStatus === 'loading' ? 'SENDING...' : 'SUBMIT APPLICATION'} <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
