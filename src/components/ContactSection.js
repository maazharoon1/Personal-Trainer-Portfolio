"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

const ContactSection = ({IsPage}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

 console.log(response.ok)
   
    if (response.ok) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
       setTimeout(() => setIsSubmitted(false), 800);

    } else {
      toast.error('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Network error:', error);
    toast.error('Something went wrong. Please check your connection.');
  }

  setIsSubmitting(false);

 ;
};


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hamzaharoon002@gmail.com',
      href: 'mailto:hamzaharoon002@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 334-2473211',
      href: 'tel:+923342473211',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karachi, Pakistan',
      href: 'https://www.google.com/maps/place/Karachi,+Pakistan/@25.1917402,66.4959058,9z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23!8m2!3d24.8607343!4d67.0011364!16zL20vMDRjam4?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D',
    } 
  ];

  return (
    <section className="min-h-screen  max-w-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-background via-background to-accent/10">
      <div className=" mx-auto max-w-11/12 pl-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium mb-6 from-0% to-75% bg-gradient-to-r from-gray-900 via-gray-500 to-gray-300  bg-clip-text text-transparent">
         Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Looking to transform your body, boost your strength, or start your fitness journey?
I’m here to guide you every step of the way — let’s achieve your goals together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-border/50 from-black/5 bg-gradient-to-bl dark:from-white/5 dark:bg-gradient-to-l  backdrop-blur-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className=' '
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 focus:ring-2 focus:ring-purple-500/20 border-border/50 focus:border-purple-500/50"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 focus:ring-2 focus:ring-purple-500/20 border-border/50 focus:border-purple-500/50"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-2 focus:ring-2 focus:ring-purple-500/20 border-border/50 focus:border-purple-500/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 focus:ring-2 focus:ring-purple-500/20 border-border/50 focus:border-purple-500/50 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-600 text-white border-0 relative overflow-hidden"
                  >
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      animate={isSubmitting ? { x: [0, -5, 5, 0] } : {}}
                      transition={isSubmitting ? { repeat: Infinity, duration: 0.5 } : {}}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Message Sent!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.div>
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-medium mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
             Whether you’re aiming to lose weight, build muscle, or improve your endurance,
I’m ready to help you push past limits and become your best self.
              </p>
            </div>

            <div className={`${!IsPage ? "py-3 flex items-center" : "space-y-4" }`}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-500 group-hover:from-gray-900 group-hover:to-gray-600 rounded-lg flex items-center justify-center 0 transition-all"
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    {IsPage && <p className="text-muted-foreground">{info.value}</p>}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
       {IsPage &&
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg border border-purple-500/20"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="min-w-3 min-h-3 bg-purple-500 rounded-full"
                />
                <div>
                  <p className="font-medium text-purple-700 dark:text-purple-400">
                   Available for New Clients
                  </p>
                  <p className="text-sm text-muted-foreground">
                   Now accepting new trainees for personal training, online coaching, and group sessions.
                  </p>
                </div>
              </div>
            </motion.div>
         }
         </motion.div>
        </div>
      </div>
    
    </section>
    
  );
}

export default ContactSection
