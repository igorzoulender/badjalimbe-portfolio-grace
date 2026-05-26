import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from '@/hooks/useTranslation';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const initialForm = { name: '', email: '', subject: '', message: '' };
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const qualities = [
    t('qPrecision'),
    t('qAdaptable'),
    t('qInnovative'),
    t('qLeadership'),
    t('qProblemSolving'),
    t('qExcellence'),
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: t('contactPhoneLabel'),
      value: '+228 70 05 09 87',
      href: 'tel:+22870050987',
    },
    {
      icon: Mail,
      label: t('contactEmailLabel'),
      value: 'gracefelix.b@gmail.com',
      href: 'mailto:gracefelix.b@gmail.com',
    },
    {
      icon: MapPin,
      label: t('contactLocationLabel'),
      value: t('contactLocationValue'),
      href: undefined,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error(t('toastErrorFields'));
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error(t('toastErrorEmail'));
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error(t('toastNotConfigured'));
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success(t('toastSuccess'));
      setFormData(initialForm);
    } catch (err) {
      console.error('[ContactSection] EmailJS error:', err);
      toast.error(t('toastErrorSend'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="editorial-wide">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="section-eyebrow">{t('eyebrowContact')}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="section-title">{t('contactTitle')}</h2>
            <p className="mt-6 font-serif text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              {t('contactLead')}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16">
          <div className="lg:col-span-5 space-y-12">
            <ul className="border-t border-border">
              {contactInfo.map((c) => {
                const content = (
                  <div className="flex items-start gap-4 py-6">
                    <c.icon className="h-4 w-4 mt-1 text-accent" />
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        {c.label}
                      </p>
                      <p className="mt-1 font-serif text-base text-foreground">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={c.label} className="border-b border-border">
                    {c.href ? (
                      <a
                        href={c.href}
                        className="block group transition-colors hover:bg-muted/40"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div>
              <p className="section-eyebrow mb-4">{t('contactQualities')}</p>
              <div className="flex flex-wrap gap-1.5">
                {qualities.map((q) => (
                  <span key={q} className="tag">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 border-t border-border pt-10 space-y-8"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              <Field
                label={t('formName')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('formNamePlaceholder')}
              />
              <Field
                label={t('formEmail')}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('formEmailPlaceholder')}
              />
            </div>

            <Field
              label={t('formSubject')}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t('formSubjectPlaceholder')}
            />

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-2"
              >
                {t('formMessage')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('formMessagePlaceholder')}
                rows={6}
                className="w-full bg-transparent border-b border-border focus:border-foreground py-3 font-serif text-base text-foreground placeholder:text-ink-muted/60 outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-border pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                — 48h max
              </p>
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                )}
                {loading ? t('formSending') : t('formSend')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

const Field = ({ label, name, value, onChange, placeholder, type = 'text' }: FieldProps) => (
  <div>
    <label
      htmlFor={name}
      className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-2"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-border focus:border-foreground py-3 font-serif text-base text-foreground placeholder:text-ink-muted/60 outline-none transition-colors"
    />
  </div>
);

export default ContactSection;
