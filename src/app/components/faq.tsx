import React from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';

const faqItems = [
  {
    id: 'what-is',
    question: 'What is the Tourism Innovation Exploria Challenge?',
    answer:
      'It is an interactive arena where design meets technology to reimagine Algeria\'s tourism experience for the digital age. Participants compete, showcase their ideas, and inspire innovation in the tourism sector through a structured ideathon and hackathon format.',
  },
  {
    id: 'who-can',
    question: 'Who can participate?',
    answer:
      'The challenge is open to students, developers, designers, and innovators passionate about tourism and technology. Whether you are a seasoned professional or a first-time participant, we encourage you to join and bring your unique perspective.',
  },
  {
    id: 'fee',
    question: 'Is there a participation fee?',
    answer:
      'No, participation is completely free. Registration requires only your commitment and enthusiasm to innovate.',
  },
  {
    id: 'team-size',
    question: 'What is the team size?',
    answer:
      'Teams can consist of 2 to 5 members. We encourage diverse teams that combine technical skills with creative and domain expertise to maximize impact.',
  },
  {
    id: 'timeline',
    question: 'What is the event timeline?',
    answer:
      'The event runs from March 10 to March 17, 2026. Phase 1 (Online Ideathon) takes place during the first half of the week, followed by the in-person hackathon and final presentations. The detailed agenda is available in the Agenda section above.',
  },
  {
    id: 'prizes',
    question: 'What are the prizes?',
    answer:
      'Winning teams receive recognition, mentorship opportunities, and the chance to have their solutions showcased to industry leaders and tourism stakeholders. Specific prize details will be announced closer to the event date.',
  },
  {
    id: 'online',
    question: 'Can I participate online?',
    answer:
      'Yes. Phase 1 (Online Ideathon) is fully remote. Join our Discord server to connect with your team, download the competition guide, and submit your proposal online. Only the final phase takes place in person at the Algiers location.',
  },
  {
    id: 'bring',
    question: 'What should I bring to the in-person event?',
    answer:
      'Bring a laptop, charger, any necessary materials for your presentation, and your creativity. Food, drinks, and workspace will be provided at the venue.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-['Raleway'] font-semibold text-sm md:text-base text-[#26A19E] uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-gray-900 mt-3 mb-4">
            Frequently Asked <span className="text-[#F67861]">Questions</span>
          </h2>
          <p className="font-['Inter'] text-base text-gray-500 max-w-xl mx-auto">
            Everything you need to know about the challenge. Still have questions? Reach out to us.
          </p>
        </motion.div>

        {/* Glass card container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-xl border border-[#A4E2DB]/50 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] rounded-2xl px-6 md:px-10"
        >
          <Accordion type="single" collapsible className="py-2">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border-[#A4E2DB]/40"
              >
                <AccordionTrigger className="font-['Raleway'] font-semibold text-base md:text-lg text-gray-900 hover:text-[#26A19E] transition-colors py-5 group cursor-pointer">
                  <span className="flex items-center gap-3 text-left">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#E0F2F1] text-[#4DB6AC] flex items-center justify-center text-xs font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-['Inter'] text-[15px] text-gray-600 leading-relaxed pl-10 pr-4 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="font-['Inter'] text-sm text-gray-400">
            Still have questions?{' '}
            <a href="#contact" className="text-[#26A19E] hover:text-[#1f8784] font-medium transition-colors underline underline-offset-2">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
