import { useState, useEffect } from 'react';
import { checkRateLimit, recordSubmission } from '../utils/rateLimit';

const wilayas = [
  'Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida',
  'Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel',
  'Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem',
  "M'Sila",'Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arréridj','Boumerdès','El Tarf',
  'Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma',
  'Aïn Témouchent','Ghardaïa','Relizane',
  'Aflou', 'El Abiodh Sidi Cheikh', 'El Aricha', 'El Kantara',
  'Barika', 'Bou Saâda', 'Bir El Ater', 'Ksar El Boukhari',
  'Ksar Chellala', 'Aïn Oussara', 'Messaâd',
];

const sizes = ['XS','S','M','L','XL','XXL'];

const inputCls = "bg-[#c2d5e0] border-none rounded-lg px-3 py-2.5 text-xs text-[#4a6070] outline-none w-full placeholder:text-[#7a99aa] focus:outline-2 focus:outline-[#2abfa3] focus:outline-offset-1 font-['Montserrat',sans-serif]";
const labelCls = "text-[11px] font-semibold text-[#3a4a55]";
const errorCls = "text-[10px] text-red-500 mt-0.5 font-['Montserrat',sans-serif]";

interface MemberData {
  fullName: string; phone: string; email: string; birthDate: string;
  isStudent: boolean; university: string; wilaya: string; discord: string;
  nationalId: string; tshirt: string;
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

function MemberSection({ num, data, onChange, errors }: { num: string; data: MemberData; onChange: (d: MemberData) => void; errors?: Record<string, string> }) {
  const update = (field: keyof MemberData) => (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    onChange({ ...data, [field]: value });
  };

  const cls = (field: string) => `${inputCls}${errors?.[field] ? ' outline-2 outline-red-400' : ''}`;

  return (
    <div className="bg-[#e2edf4] rounded-[14px] p-4 sm:p-5 mb-4">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="border-[1.5px] border-[#2abfa3] rounded-[7px] text-[10px] font-semibold text-[#2abfa3] px-1.5 py-0.5">{num}</span>
        <span className="text-sm font-bold text-[#2abfa3] tracking-wide">{num === '01' ? 'Member 1' : 'Member 2'}</span>
      </div>
      <div className="flex flex-col gap-1 mb-2.5">
        <label className={labelCls}>Full Name</label>
        <input type="text" placeholder="Full name" value={data.fullName} onChange={update('fullName')} className={cls('fullName')} />
        {errors?.fullName && <span className={errorCls}>{errors.fullName}</span>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
        <div className="flex flex-col gap-1">
          <label className={labelCls}>Phone</label>
          <input type="text" placeholder="213+ -------" value={data.phone} onChange={update('phone')} className={cls('phone')} />
          {errors?.phone && <span className={errorCls}>{errors.phone}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelCls}>Email</label>
          <input type="email" placeholder="your@email.com" value={data.email} onChange={update('email')} className={cls('email')} />
          {errors?.email && <span className={errorCls}>{errors.email}</span>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
        <div className="flex flex-col gap-1">
          <label className={labelCls}>Birth Date</label>
          <input type="date" value={data.birthDate} onChange={update('birthDate')} className={cls('birthDate')} />
          {errors?.birthDate && <span className={errorCls}>{errors.birthDate}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelCls}>National Nº</label>
          <input type="text" placeholder="e.g. 123456780123456" value={data.nationalId} onChange={update('nationalId')} className={cls('nationalId')} />
          {errors?.nationalId && <span className={errorCls}>{errors.nationalId}</span>}
        </div>
      </div>
      <div className="flex items-center gap-3 mb-2.5 bg-[#c2d5e0] rounded-lg px-3 py-2.5">
        <label className={`${labelCls} cursor-pointer flex items-center gap-2 select-none`}>
          <input type="checkbox" checked={data.isStudent} onChange={update('isStudent')} className="w-4 h-4 accent-[#2abfa3] cursor-pointer rounded" />
          Student
        </label>
      </div>
      {data.isStudent && (
        <div className="flex flex-col gap-1 mb-2.5">
          <label className={labelCls}>University</label>
          <input type="text" placeholder="University name" value={data.university} onChange={update('university')} className={inputCls} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
        <div className="flex flex-col gap-1">
          <label className={labelCls}>Wilaya</label>
          <select value={data.wilaya} onChange={update('wilaya')} className={cls('wilaya')}>
            <option value="" disabled>Select your wilaya</option>
            {wilayas.map(w => <option key={w} value={w} className="text-[#4a6070]">{w}</option>)}
          </select>
          {errors?.wilaya && <span className={errorCls}>{errors.wilaya}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelCls}>Discord Username</label>
          <input type="text" placeholder="e.g. username#1234" value={data.discord} onChange={update('discord')} className={cls('discord')} />
          {errors?.discord && <span className={errorCls}>{errors.discord}</span>}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className={labelCls}>T-shirt Size</label>
        <select value={data.tshirt} onChange={update('tshirt')} className={cls('tshirt')}>
          <option value="" disabled>Select your size</option>
          {sizes.map(s => <option key={s} value={s} className="text-[#4a6070]">{s}</option>)}
        </select>
        {errors?.tshirt && <span className={errorCls}>{errors.tshirt}</span>}
      </div>
    </div>
  );
}

const emptyMember: MemberData = { fullName: '', phone: '', email: '', birthDate: '', isStudent: false, university: '', wilaya: '', discord: '', nationalId: '', tshirt: '' };

export default function RegistrationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [teamName, setTeamName] = useState('');
  const [m1, setM1] = useState<MemberData>({ ...emptyMember });
  const [m2, setM2] = useState<MemberData>({ ...emptyMember });
  const [driveLink, setDriveLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) { setVisible(true); document.body.style.overflow = 'hidden'; }
    else {
      document.body.style.overflow = '';
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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

    // Rate limit check
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
        onClose();
      }, 2000);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!visible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-start justify-center transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className={`relative w-full max-w-[620px] mx-4 my-6 sm:my-10 max-h-[calc(100vh-48px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto rounded-[20px] shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'}`}
        style={{ background: '#d6e4ed' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="sticky top-3 float-right mr-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#3a4a55] hover:bg-white hover:text-[#f4845f] transition-all shadow-sm">
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#2abfa3] flex items-center justify-center mb-4 animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3a4a55] mb-2 font-['Montserrat',sans-serif]">Registration Submitted!</h3>
              <p className="text-sm text-[#7a99aa] font-['Montserrat',sans-serif]">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="font-['Montserrat',sans-serif]">
              {fieldErrors.rateLimit && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4 text-xs text-red-600 text-center">
                  {fieldErrors.rateLimit}
                </div>
              )}

              <div className="bg-[#e2edf4] rounded-[14px] p-4 sm:p-5 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#3a4a55]">Team Name</label>
                  <input type="text" placeholder="Your team name" value={teamName} onChange={(e) => setTeamName(e.target.value)}
                    className={`${inputCls} !text-sm !py-3${fieldErrors.teamName ? ' outline-2 outline-red-400' : ''}`} />
                  {fieldErrors.teamName && <span className={errorCls}>{fieldErrors.teamName}</span>}
                </div>
              </div>

              <MemberSection num="01" data={m1} onChange={setM1} errors={fieldErrors.m1} />
              <MemberSection num="02" data={m2} onChange={setM2} errors={fieldErrors.m2} />

              <div className="bg-[#e2edf4] rounded-[14px] p-4 sm:p-5 mb-4">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="border-[1.5px] border-[#f4845f] rounded-[7px] text-[13px] font-semibold text-[#f4845f] px-1.5 py-0.5">
                    <i className="fa-brands fa-google-drive text-[10px]"></i>
                  </span>
                  <span className="text-sm font-bold text-[#f4845f] tracking-wide">Project Drive Link</span>
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelCls}>Drive Link</label>
                  <input type="url" placeholder="https://drive.google.com/..." value={driveLink} onChange={(e) => setDriveLink(e.target.value)}
                    className={`${inputCls}${fieldErrors.driveLink ? ' outline-2 outline-red-400' : ''}`} />
                  {fieldErrors.driveLink && <span className={errorCls}>{fieldErrors.driveLink}</span>}
                </div>
              </div>

              <button type="submit" disabled={submitting}
                className="w-full py-4 rounded-xl text-white text-[15px] font-bold tracking-wide cursor-pointer mt-2 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 font-['Montserrat',sans-serif]"
                style={{ background: 'linear-gradient(135deg, #f5c842 0%, #f4a050 40%, #f4845f 100%)', boxShadow: '0 4px 16px rgba(244, 132, 95, 0.35)' }}>
                {submitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
