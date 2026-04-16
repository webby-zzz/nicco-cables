import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, X, Send, CheckCircle2 } from 'lucide-react';

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochureTitle: string;
  pdfUrl: string;
}

const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({
  isOpen,
  onClose,
  brochureTitle,
  pdfUrl,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key:
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: `New Brochure Download: ${brochureTitle}`,
          from_name: data.name,
          email: data.email,
          phone: data.phone,
          brochure: brochureTitle,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        console.error('Server returned error:', result.error);
        // We still allow the download even if email fails, but we log it
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setLoading(false);
    setIsSubmitted(true);

    // Trigger download after a short delay
    setTimeout(() => {
      if (pdfUrl && pdfUrl !== '#') {
        window.open(encodeURI(pdfUrl), '_blank');
      }
    }, 1000);
  };

  // Reset state when closing/opening
  React.useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setLoading(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-gray-100 transition-colors z-50"
            >
              <X className="w-6 h-6 text-brand-dark" />
            </button>

            <div className="p-6 md:p-16">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">
                    Thank{"\u00A0"}You!
                  </h3>
                  <p className="text-black font-medium mb-8 text-base">
                    Your download will start automatically. If it doesn't, click
                    the button below.
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-secondary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all"
                  >
                    <Download className="w-4 h-4" /> RESTART DOWNLOAD
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="flex items-center gap-3 text-brand-secondary mb-4">
                      <FileText className="w-5 h-5" />
                      <span className="text-xs font-black uppercase tracking-[0.3em]">
                        DOWNLOAD REQUEST
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-brand-dark tracking-tighter mb-4 pr-12">
                      {brochureTitle}
                    </h3>
                    <p className="text-black font-medium text-base">
                      Please provide your details to access the technical
                      documentation.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-3 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-3 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div>
                        <label className="text-xs font-black text-brand-dark uppercase tracking-widest mb-3 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-brand-secondary transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-brand-secondary text-white font-black text-xs uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-brand-dark transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? 'PROCESSING...' : 'ACCESS BROCHURE'}{' '}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BrochureDownloadModal;
