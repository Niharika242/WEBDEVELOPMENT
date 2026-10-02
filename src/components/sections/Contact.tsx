import { useRef, useState, type FormEvent } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { sendContactMessage } from '../../lib/api/contact';
import SectionHeading from '../ui/SectionHeading';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionState === 'submitting') return;

    const formData = new FormData(event.currentTarget);
    const contact = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
      website: String(formData.get('website') ?? ''),
    };

    setSubmissionState('submitting');
    setFeedback('Sending your message…');
    try {
      const result = await sendContactMessage(contact);
      setSubmissionState('success');
      setFeedback(result.message);
      formRef.current?.reset();
    } catch (error) {
      setSubmissionState('error');
      setFeedback(error instanceof Error ? error.message : "We couldn't send your message right now. Please try again later.");
    }
  }

  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeading id="contact-title" index="05" eyebrow="Contact" title="Let’s build something useful." />
      <div className="contact-panel" data-reveal>
        <div className="contact-form-heading">
          <p className="contact-panel__intro">Tell me what you’re working on. I’ll get back to you by email.</p>
          <span className="contact-form-heading__note"><Mail size={15} aria-hidden="true" /> Your note goes straight to my inbox.</span>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="contact-form__honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="contact-form__grid">
            <div className="contact-form__field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required disabled={submissionState === 'submitting'} />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required disabled={submissionState === 'submitting'} />
            </div>
            <div className="contact-form__field contact-form__field--wide">
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text" minLength={3} maxLength={150} required disabled={submissionState === 'submitting'} />
            </div>
            <div className="contact-form__field contact-form__field--wide">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} minLength={10} maxLength={5000} required disabled={submissionState === 'submitting'} />
            </div>
          </div>
          <div className="contact-form__actions">
            <button className="button button--primary" type="submit" disabled={submissionState === 'submitting'}>
              {submissionState === 'submitting' ? 'Sending…' : 'Send Message'} <ArrowRight size={16} aria-hidden="true" />
            </button>
            <p className={`contact-form__feedback contact-form__feedback--${submissionState}`} role={submissionState === 'error' ? 'alert' : 'status'} aria-live={submissionState === 'error' ? 'assertive' : 'polite'}>
              {feedback}
            </p>
          </div>
        </form>
        <div className="contact-panel__foot">
          <span>Prefer email? <a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={13} aria-hidden="true" /></a></span>
          <a className="contact-back-top" href="#home">Back to the top <ArrowDownRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
