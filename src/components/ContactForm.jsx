import { useState, useEffect } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { services } from '../data/siteData';
import { useToast } from './Toast';

const budgetOptions = [
  'Under ₹10 Lakhs',
  '₹10 Lakhs – ₹25 Lakhs',
  '₹25 Lakhs – ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  'Above ₹1 Crore',
];

const initial = {
  name: '',
  phone: '',
  email: '',
  companyName: '',
  city: '',
  service: '',
  budget: '',
  message: '',
  agree: false,
};

const rules = {
  name: (v) =>
    !v.trim()
      ? 'Please enter your full name.'
      : !/^[A-Za-z][A-Za-z .'-]{2,}$/.test(v.trim())
        ? 'Name must be at least 3 letters without numbers.'
        : '',
  phone: (v) =>
    !v.trim()
      ? 'Please enter your mobile number.'
      : !/^[6-9]\d{9}$/.test(v)
        ? 'Enter a valid 10-digit Indian mobile number (starting with 6–9).'
        : '',
  email: (v) =>
    !v.trim()
      ? 'Please enter your email address.'
      : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
        ? 'Enter a valid email address, e.g. name@company.in.'
        : '',
  companyName: (v) =>
    !v.trim()
      ? 'Please enter your company or brand name.'
      : v.trim().length < 2
        ? 'Company / Brand name must be at least 2 characters.'
        : '',
  city: (v) =>
    !v.trim()
      ? 'Please enter your project city or location.'
      : !/^[A-Za-z][A-Za-z .,'-]{1,}$/.test(v.trim())
        ? 'Please enter a valid city name.'
        : '',
  service: (v) => (!v ? 'Please select the service required.' : ''),
  budget: (v) => (!v ? 'Please select an estimated budget range.' : ''),
  message: (v) =>
    !v.trim()
      ? 'Please describe your project requirements.'
      : v.trim().length < 10
        ? 'Project details must be at least 10 characters.'
        : v.length > 500
          ? 'Project details must be under 500 characters.'
          : '',
  agree: (v) => (!v ? 'Please accept permission so our team can contact you.' : ''),
};

export default function ContactForm({ preselectedService = '' }) {
  const [data, setData] = useState({ ...initial, service: preselectedService });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (preselectedService) {
      setData((d) => ({ ...d, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (name, value) =>
    setErrors((e) => ({ ...e, [name]: rules[name](value) }));

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    let v = type === 'checkbox' ? checked : value;
    if (name === 'phone') v = v.replace(/\D/g, '').slice(0, 10);
    setData((d) => ({ ...d, [name]: v }));
    if (errors[name] !== undefined) validate(name, v);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const all = Object.fromEntries(Object.keys(rules).map((k) => [k, rules[k](data[k])]));
    setErrors(all);

    if (Object.values(all).some(Boolean)) {
      showToast('Please fix the highlighted form fields before submitting.', 'error', 'Validation Required');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Could not save enquiry.');
      }

      setSent(true);
      setData(initial);
      setErrors({});
      showToast(
        'Your enquiry has been saved to db.json. Our project director will call you within 24 hours.',
        'success',
        'Enquiry Submitted!'
      );
    } catch (err) {
      showToast(err.message || 'Unable to submit right now. Please try again.', 'error', 'Submission Failed');
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = (n) =>
    `input ${errors[n] ? '!border-red-500 focus:!ring-red-200' : ''}`;

  const bind = (n) => ({
    id: n,
    name: n,
    value: data[n],
    onChange,
    onBlur: (e) => validate(n, e.target.value),
    className: fieldCls(n),
    'aria-invalid': !!errors[n],
  });

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border-2 border-gold/40 bg-white p-8 text-center shadow-xl sm:p-10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <CheckCircle2 size={42} />
        </span>
        <h3 className="mt-4 text-2xl font-extrabold text-choco">Thank You! We Received Your Enquiry.</h3>
        <p className="mt-2 max-w-md text-sm text-stone-600 sm:text-base">
          Your project brief has been saved securely. Our Noida engineering &amp; design desk will reach out within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn-gold mt-6"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl border-2 border-stone-200/80 bg-white p-6 shadow-xl transition hover:border-gold/50 sm:p-8"
    >
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-xl font-extrabold text-choco sm:text-2xl">Request a Free Project Consultation</h3>
        <p className="mt-1 text-xs text-stone-500 sm:text-sm">
          Fill out all required fields below for an accurate site survey and BOQ estimate.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-choco">Full Name *</label>
          <input type="text" placeholder="e.g. Rajesh Khanna" autoComplete="name" {...bind('name')} />
          {errors.name && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-choco">Mobile Number *</label>
          <input type="tel" inputMode="numeric" placeholder="10-digit Indian mobile" autoComplete="tel" {...bind('phone')} />
          {errors.phone && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-choco">Email Address *</label>
          <input type="email" placeholder="name@company.in" autoComplete="email" {...bind('email')} />
          {errors.email && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-sm font-semibold text-choco">Company / Brand Name *</label>
          <input type="text" placeholder="e.g. Aurum Jewels Pvt. Ltd." autoComplete="organization" {...bind('companyName')} />
          {errors.companyName && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.companyName}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-semibold text-choco">Project City / Location *</label>
          <input type="text" placeholder="e.g. Noida, Delhi, Mumbai, Bengaluru" {...bind('city')} />
          {errors.city && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-choco">Estimated Budget *</label>
          <select {...bind('budget')}>
            <option value="">Select budget range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.budget && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.budget}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-choco">Service Required *</label>
        <select {...bind('service')}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-choco">Project Details *</label>
        <textarea
          rows="4"
          placeholder="Area in sq. ft., mall or high-street location, target opening date, and scope..."
          {...bind('message')}
        />
        <div className="mt-1 flex items-center justify-between">
          {errors.message ? (
            <p className="text-xs font-medium text-red-600" role="alert">{errors.message}</p>
          ) : (
            <span className="text-xs text-stone-400">Minimum 10 characters</span>
          )}
          <span className="text-xs text-stone-400">{data.message.length}/500</span>
        </div>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-stone-600">
          <input
            type="checkbox"
            name="agree"
            checked={data.agree}
            onChange={onChange}
            className="mt-1 h-4 w-4 rounded border-stone-300 accent-[#D4AF37]"
          />
          <span>I authorize AA Design &amp; Construction Pvt. Ltd. to contact me via phone or email regarding this project.</span>
        </label>
        {errors.agree && <p className="mt-1 text-xs font-medium text-red-600" role="alert">{errors.agree}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-gold w-full justify-center py-3.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Submitting Enquiry...
          </>
        ) : (
          <>
            Submit Enquiry <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
