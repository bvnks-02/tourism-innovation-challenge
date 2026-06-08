import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Users, Link } from 'lucide-react';
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
import { checkRateLimit, recordSubmission } from '../utils/rateLimit';

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
  'Aflou', 'El Abiodh Sidi Cheikh', 'El Aricha', 'El Kantara',
  'Barika', 'Bou Saâda', 'Bir El Ater', 'Ksar El Boukhari',
  'Ksar Chellala', 'Aïn Oussara', 'Messaâd',
];

const tshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

const emptyMember = {
  fullName: '', phone: '', email: '', birthDate: '', nationalId: '',
  isStudent: false, university: '', wilaya: '', discord: '', tshirt: '',
};

interface MemberData {
  fullName: string; phone: string; email: string; birthDate: string;
  nationalId: string; isStudent: boolean; university: string;
  wilaya: string; discord: string; tshirt: string;
}

function validateMember(data: MemberData): Record<string, string> {
  const errs: Record<string, string> = {};
  if (!data.fullName.trim()) errs.fullName = 'Full Name is required';
  if (!data.phone.trim()) errs.phone = 'Phone is required';
  if (!data.email.trim()) errs.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Invalid email format';
  if (!data.birthDate) errs.birthDate = 'Birth Date is required';
  if (!data.nationalId.trim()) errs.nationalId = 'National Nº is required';
  else if (!/^\d{10,20}$/.test(data.nationalId.replace(/\s/g, ''))) errs.nationalId = 'Must be 10–20 digits';
  if (!data.wilaya) errs.wilaya = 'Select your wilaya';
  if (!data.discord.trim()) errs.discord = 'Discord is required';
  else if (!/^.{2,32}#\d{4}$/.test(data.discord.trim())) errs.discord = 'Format: username#1234';
  if (!data.tshirt) errs.tshirt = 'Select your size';
  return errs;
}

interface FieldErrors {
  teamName?: string;
  m1?: Record<string, string>;
  m2?: Record<string, string>;
  driveLink?: string;
  rateLimit?: string;
}

function MemberSection({
  number, data, onChange, errors,
}: {
  number: string; data: MemberData; onChange: (data: MemberData) => void; errors?: Record<string, string>;
}) {
  const update = (field: keyof MemberData) => (value: string | boolean) => {
    onChange({ ...data, [field]: value });
  };

  const inputErr = (field: string) =>
    errors?.[field] ? 'border-red-400 focus-visible:border-red-400' : 'border-[#A4E2DB]/60 focus-visible:border-[#26A19E]';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#26A19E] text-white flex items-center justify-center text-sm font-bold">
          {number}
        </div>
        <h3 className="font-['Raleway'] font-bold text-lg text-gray-900">
          {number === '01' ? 'Member 1' : 'Member 2'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">Full Name</Label>
          <Input value={data.fullName} onChange={(e) => update('fullName')(e.target.value)}
            placeholder="Full name" className={`bg-white/70 font-['Inter'] text-sm ${inputErr('fullName')}`} />
          {errors?.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">Phone</Label>
          <div className="flex gap-2">
            <div className="flex-shrink-0 h-9 px-3 rounded-md border border-[#A4E2DB]/60 bg-gray-50/50 flex items-center text-sm font-['Inter'] text-gray-500">+213</div>
            <Input value={data.phone} onChange={(e) => update('phone')(e.target.value)}
              type="tel" placeholder="-------" className={`bg-white/70 font-['Inter'] text-sm ${inputErr('phone')}`} />
          </div>
          {errors?.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">Email</Label>
          <Input value={data.email} onChange={(e) => update('email')(e.target.value)}
            type="email" placeholder="__VG_EMAIL_7232de10f831__" className={`bg-white/70 font-['Inter'] text-sm ${inputErr('email')}`} />
          {errors?.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">Birth Date</Label>
          <Input value={data.birthDate} onChange={(e) => update('birthDate')(e.target.value)}
            type="date" className={`bg-white/70 font-['Inter'] text-sm ${inputErr('birthDate')}`} />
          {errors?.birthDate && <p className="text-xs text-red-500 mt-1">{errors.birthDate}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">National Nº</Label>
          <Input value={data.nationalId} onChange={(e) => update('nationalId')(e.target.value)}
            placeholder="e.g. 123456780123456" className={`bg-white/70 font-['Inter'] text-sm ${inputErr('nationalId')}`} />
          {errors?.nationalId && <p className="text-xs text-red-500 mt-1">{errors.nationalId}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">Wilaya</Label>
          <Select value={data.wilaya} onValueChange={(v) => update('wilaya')(v)}>
            <SelectTrigger className={`bg-white/70 font-['Inter'] text-sm ${errors?.wilaya ? 'border-red-400' : 'border-[#A4E2DB]/60'}`}>
              <SelectValue placeholder="Select your wilaya" />
            </SelectTrigger>
            <SelectContent className="max-h-64">
              {wilayas.map((wilaya) => (<SelectItem key={wilaya} value={wilaya}>{wilaya}</SelectItem>))}
            </SelectContent>
          </Select>
          {errors?.wilaya && <p className="text-xs text-red-500 mt-1">{errors.wilaya}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">Discord Username</Label>
          <Input value={data.discord} onChange={(e) => update('discord')(e.target.value)}
            placeholder="e.g. username#1234" className={`bg-white/70 font-['Inter'] text-sm ${inputErr('discord')}`} />
          {errors?.discord && <p className="text-xs text-red-500 mt-1">{errors.discord}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">T-shirt Size</Label>
          <Select value={data.tshirt} onValueChange={(v) => update('tshirt')(v)}>
            <SelectTrigger className={`bg-white/70 font-['Inter'] text-sm ${errors?.tshirt ? 'border-red-400' : 'border-[#A4E2DB]/60'}`}>
              <SelectValue placeholder="Select your size" />
            </SelectTrigger>
            <SelectContent>{tshirtSizes.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}</SelectContent>
          </Select>
          {errors?.tshirt && <p className="text-xs text-red-500 mt-1">{errors.tshirt}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3 bg-[#E0F2F1]/60 rounded-lg px-4 py-3 border border-[#A4E2DB]/40">
        <label className="flex items-center gap-2.5 cursor-pointer select-none font-['Inter'] text-sm font-medium text-gray-700">
          <input type="checkbox" checked={data.isStudent} onChange={(e) => update('isStudent')(e.target.checked)}
            className="w-4 h-4 accent-[#26A19E] cursor-pointer rounded" />
          Student
        </label>
      </div>

      {data.isStudent && (
        <div className="space-y-1.5">
          <Label className="font-['Inter'] text-sm font-medium text-gray-700">University</Label>
          <Input value={data.university} onChange={(e) => update('university')(e.target.value)}
            placeholder="University name" className="bg-white/70 border-[#A4E2DB]/60 focus-visible:border-[#26A19E] font-['Inter'] text-sm" />
        </div>
      )}
    </div>
  );
}

export function Registration() {
  const [teamName, setTeamName] = useState('');
  const [m1, setM1] = useState<MemberData>({ ...emptyMember });
  const [m2, setM2] = useState<MemberData>({ ...emptyMember });
  const [driveLink, setDriveLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FieldErrors = {};
    if (!teamName.trim()) errs.teamName = 'Team name is required';

    const e1 = validateMember(m1);
    if (Object.keys(e1).length) errs.m1 = e1;

    const e2 = validateMember(m2);
    if (Object.keys(e2).length) errs.m2 = e2;

    if (driveLink.trim() && !/^https?:\/\/.+/.test(driveLink.trim())) {
      errs.driveLink = 'Must be a valid URL (https://...)';
    }

    const { allowed, remaining, resetIn } = checkRateLimit();
    if (!allowed) {
      const mins = Math.ceil(resetIn / 60);
      errs.rateLimit = `Too many registrations from this device. Try again in ${mins} minute${mins > 1 ? 's' : ''}.`;
    }

    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    if (!validate()) return;
    setSubmitting(true);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxozND5ds-NjZ93k74tDvkUASxf_Pwz1RRqXFwIXzTy12TdUVHsyP3Ysk47fgdTLkML/exec', {
        method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teamName, m1, m2, driveLink }),
      });
      recordSubmission();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setTeamName(''); setM1({ ...emptyMember }); setM2({ ...emptyMember }); setDriveLink('');
      }, 3000);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-['Raleway'] font-semibold text-sm md:text-base text-[#26A19E] uppercase tracking-widest">Register Now</span>
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-gray-900 mt-3 mb-4">
            Team <span className="text-[#F67861]">Registration</span>
          </h2>
          <p className="font-['Inter'] text-base text-gray-500 max-w-xl mx-auto">
            Fill out the form below to register your team for the Tourism Innovation Exploria Challenge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-xl border border-[#A4E2DB]/50 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] rounded-2xl px-6 md:px-10 py-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="w-16 h-16 rounded-full bg-[#26A19E] flex items-center justify-center mb-4"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="font-['Raleway'] font-bold text-xl text-gray-900 mb-2">Registration Submitted!</h3>
              <p className="font-['Inter'] text-sm text-gray-500">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {fieldErrors.rateLimit && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600 text-center">
                  {fieldErrors.rateLimit}
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-1">
                  <Users className="w-5 h-5 text-[#26A19E]" />
                  <Label htmlFor="team-name" className="font-['Raleway'] font-bold text-base text-gray-900">Team Name</Label>
                </div>
                <Input id="team-name" value={teamName} onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Your team name"
                  className={`bg-white/70 font-['Inter'] text-sm max-w-md ${fieldErrors.teamName ? 'border-red-400' : 'border-[#A4E2DB]/60'}`} />
                {fieldErrors.teamName && <p className="text-xs text-red-500 mt-1">{fieldErrors.teamName}</p>}
              </div>

              <div className="h-px bg-gradient-to-r from-[#A4E2DB]/60 via-[#A4E2DB]/30 to-transparent" />
              <MemberSection number="01" data={m1} onChange={setM1} errors={fieldErrors.m1} />
              <div className="h-px bg-gradient-to-r from-[#A4E2DB]/60 via-[#A4E2DB]/30 to-transparent" />
              <MemberSection number="02" data={m2} onChange={setM2} errors={fieldErrors.m2} />
              <div className="h-px bg-gradient-to-r from-[#A4E2DB]/60 via-[#A4E2DB]/30 to-transparent" />

              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-1">
                  <Link className="w-5 h-5 text-[#26A19E]" />
                  <Label htmlFor="drive-link" className="font-['Raleway'] font-bold text-base text-gray-900">Project Drive Link</Label>
                </div>
                <Input id="drive-link" value={driveLink} onChange={(e) => setDriveLink(e.target.value)}
                  type="url" placeholder="https://drive.google.com/..."
                  className={`bg-white/70 font-['Inter'] text-sm max-w-xl ${fieldErrors.driveLink ? 'border-red-400' : 'border-[#A4E2DB]/60'}`} />
                {fieldErrors.driveLink && <p className="text-xs text-red-500 mt-1">{fieldErrors.driveLink}</p>}
              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" disabled={submitting}
                  className="bg-[#26A19E] hover:bg-[#1f8784] text-white font-['Raleway'] font-bold text-base px-10 py-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 cursor-pointer">
                  <Send className="w-4 h-4" />
                  {submitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
