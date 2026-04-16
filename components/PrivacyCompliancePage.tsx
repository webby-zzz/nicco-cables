
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, FileText, Lock } from 'lucide-react';

const PrivacyCompliancePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              LEGAL
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8"
            >
              Privacy &{"\u00A0"}Compliance
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-white leading-relaxed font-light max-w-2xl"
            >
              At Nicco Cables Pvt. Ltd., we are committed to maintaining high standards of integrity, transparency, and accountability in all our operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-brand-ash">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-16 rounded-[3rem] border-gray-100 shadow-2xl space-y-16"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-lg text-black font-medium leading-relaxed">
                At Nicco Cables Pvt. Ltd., we are committed to maintaining high standards of integrity, transparency, and accountability in all our operations. We recognize our responsibility towards our stakeholders, including customers, employees, business partners, and regulatory authorities.
              </p>
            </div>

            {/* Privacy Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark tracking-tighter">Privacy</h3>
              </div>
              
              <div className="space-y-6 text-black/80 leading-relaxed">
                <p>
                  We respect and value the privacy of all individuals who interact with us. Any personal or sensitive information collected through our website or during the course of our business is handled with due care and in accordance with applicable laws and best practices.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>We collect information only for legitimate business purposes and ensure it is used in a fair and lawful manner.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>Appropriate safeguards are implemented to protect data from unauthorized access, disclosure, alteration, or destruction.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>We do not sell, trade, or rent personal information to third parties. Information may be shared only where required by law, regulatory authorities, or for legitimate business purposes under appropriate confidentiality obligations.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>Users of our website are encouraged to exercise discretion while sharing personal information online.</span>
                  </li>
                </ul>
                <p className="font-bold text-brand-dark">
                  By accessing our website, you acknowledge and agree to the terms of this privacy framework.
                </p>
              </div>
            </div>

            {/* Compliance Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark tracking-tighter">Compliance</h3>
              </div>
              
              <div className="space-y-6 text-black/80 leading-relaxed">
                <p>
                  Nicco Cables Pvt. Ltd. is committed to complying with all applicable laws, rules, and regulations governing its operations.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>We adhere to the provisions of the Companies Act, 2013, and other applicable statutory requirements.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>We maintain internal policies and procedures designed to ensure legal and regulatory compliance across all areas of our business.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>Our operations are guided by ethical business practices, and employees are expected to comply with our Code of Conduct and internal policies.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>We are committed to preventing fraud, corruption, and unethical practices, and we encourage the reporting of concerns through appropriate internal mechanisms.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-1" />
                    <span>We continuously review and strengthen our internal controls and compliance framework to ensure operational integrity and efficiency.</span>
                  </li>
                </ul>
                <p className="font-bold text-brand-dark">
                  Through a culture of responsibility and continuous improvement, we strive to uphold trust and build long-term relationships with all our stakeholders.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyCompliancePage;
