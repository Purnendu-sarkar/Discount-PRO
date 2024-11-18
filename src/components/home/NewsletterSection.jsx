import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="py-16 bg-indigo-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Never Miss a Deal
          </h2>
          <p className="mb-8" data-aos="fade-up" data-aos-delay="100">
            Subscribe to our newsletter and get the latest deals delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-indigo-600 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
