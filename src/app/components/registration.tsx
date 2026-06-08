import React from 'react';
import { motion } from 'motion/react';
import { Send, Users, User, Link } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';

const wilayas = [
  'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa',
  'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa',
  'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Algiers', 'Djelfa', 'Jijel',
  'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma',
  'Constantine', 'Médéa', 'Mostaganem', 'M\'Sila', 'Mascara', 'Ouargla',
  'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès',
  'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela',
  'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent',
  'Ghardaïa', 'Relizane', 'Timimoun', 'Bordj Badji Mokhtar', 'Ouled Djellal',
  'Béni Abbès', 'In Salah', 'In Guezzam', 'Touggourt', 'Djanet',
  'El M\'Ghair', 'El Meniaa',
];

const tshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

function MemberSection({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="space-y-5">
      {/* Member header */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#26A19E] text-white flex items-center justify-center text-sm font-bold">
          {number}
        </div>
        <h3 className="font-['Raleway'] font-bold text-lg text-gray-900">
          {label}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <Label htmlFor={`name-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <Input
            id={`name-${number}`}
            placeholder="Full name"
            className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <Label htmlFor={`phone-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            Phone
          </Label>
          <div className="flex gap-2">
            <div className="flex-shrink-0 h-9 px-3 rounded-md border border-[#A4E2DB]/60 bg-gray-50/50 flex items-center text-sm font-['Inter'] text-gray-500">
              +213
            </div>
            <Input
              id={`phone-${number}`}
              type="tel"
              placeholder="-------"
              className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor={`email-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            id={`email-${number}`}
            type="email"
            placeholder="email@example.com"
            className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
          />
        </div>

        {/* Birth Date */}
        <div className="space-y-1.5">
          <Label htmlFor={`birthdate-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            Birth Date
          </Label>
          <Input
            id={`birthdate-${number}`}
            type="text"
            placeholder="mm/dd/yyyy"
            className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
          />
        </div>

        {/* National Nº */}
        <div className="space-y-1.5">
          <Label htmlFor={`national-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            National Nº
          </Label>
          <Input
            id={`national-${number}`}
            placeholder="e.g. 123456780123456"
            className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
          />
        </div>

        {/* Wilaya */}
        <div className="space-y-1.5">
          <Label htmlFor={`wilaya-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            Wilaya
          </Label>
          <Select>
            <SelectTrigger
              id={`wilaya-${number}`}
              className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
            >
              <SelectValue placeholder="Select your wilaya" />
            </SelectTrigger>
            <SelectContent className="max-h-64">
              {wilayas.map((wilaya) => (
                <SelectItem key={wilaya} value={wilaya}>
                  {wilaya}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Discord Username */}
        <div className="space-y-1.5">
          <Label htmlFor={`discord-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            Discord Username
          </Label>
          <Input
            id={`discord-${number}`}
            placeholder="e.g. username#1234"
            className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
          />
        </div>

        {/* T-shirt Size */}
        <div className="space-y-1.5">
          <Label htmlFor={`tshirt-${number}`} className="font-['Inter'] text-sm font-medium text-gray-700">
            T-shirt Size
          </Label>
          <Select>
            <SelectTrigger
              id={`tshirt-${number}`}
              className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm"
            >
              <SelectValue placeholder="Select your size" />
            </SelectTrigger>
            <SelectContent>
              {tshirtSizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export function Registration() {
  return (
    <section id="registration" className="py-20 relative overflow-hidden">
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
            Register Now
          </span>
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-gray-900 mt-3 mb-4">
            Team <span className="text-[#F67861]">Registration</span>
          </h2>
          <p className="font-['Inter'] text-base text-gray-500 max-w-xl mx-auto">
            Fill out the form below to register your team for the Tourism Innovation Exploria Challenge.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-xl border border-[#A4E2DB]/50 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] rounded-2xl px-6 md:px-10 py-10"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-10"
          >
            {/* Team Name */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-1">
                <Users className="w-5 h-5 text-[#26A19E]" />
                <Label htmlFor="team-name" className="font-['Raleway'] font-bold text-base text-gray-900">
                  Team Name
                </Label>
              </div>
              <Input
                id="team-name"
                placeholder="Your team name"
                className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm max-w-md"
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#A4E2DB]/60 via-[#A4E2DB]/30 to-transparent" />

            {/* Member 1 */}
            <MemberSection number="01" label="Member 1" />

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#A4E2DB]/60 via-[#A4E2DB]/30 to-transparent" />

            {/* Member 2 */}
            <MemberSection number="02" label="Member 2" />

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#A4E2DB]/60 via-[#A4E2DB]/30 to-transparent" />

            {/* Project Drive Link */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-1">
                <Link className="w-5 h-5 text-[#26A19E]" />
                <Label htmlFor="drive-link" className="font-['Raleway'] font-bold text-base text-gray-900">
                  Project Drive Link
                </Label>
              </div>
              <Input
                id="drive-link"
                type="url"
                placeholder="https://drive.google.com/..."
                className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm max-w-xl"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-[#26A19E] hover:bg-[#1f8784] text-white font-['Raleway'] font-bold text-base px-10 py-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-500/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Registration
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
