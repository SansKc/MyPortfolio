'use client';

import { FormEvent, useState } from 'react';

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus('sending');

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
          },
        }),
      });

      if (!response.ok) throw new Error('EmailJS request failed');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const isSending = status === 'sending';

  return (
    <form className="font-[family-name:var(--font-roboto)]" onSubmit={handleSubmit}>
      <div className="grid border border-black md:grid-cols-2">
        <label className="group flex min-h-36 flex-col justify-center border-b border-black px-5 py-6 md:border-b-0 md:border-r sm:px-8">
          <span className="mb-3 text-xs uppercase tracking-[0.08em] text-black/55">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full bg-transparent text-lg outline-none placeholder:text-black/55"
          />
        </label>
        <label className="flex min-h-36 flex-col justify-center px-5 py-6 sm:px-8">
          <span className="mb-3 text-xs uppercase tracking-[0.08em] text-black/55">Phone number</span>
          <input type="tel" name="phone" placeholder="+977 98 0000 0000" className="w-full bg-transparent text-lg outline-none placeholder:text-black/55" />
        </label>
        <label className="flex min-h-44 flex-col justify-center border-t border-black px-5 py-6 md:col-span-2 sm:px-8">
          <span className="mb-3 text-xs uppercase tracking-[0.08em] text-black/55">Message</span>
          <textarea name="message" required rows={2} placeholder="Tell me a little about your project..." className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-black/55" />
        </label>
        <button
          type="submit"
          disabled={isSending}
          className="group flex min-h-28 items-center justify-between border-t border-black px-5 text-left text-lg transition-colors hover:bg-black hover:text-[#fcff35] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2 sm:px-8"
        >
          {isSending ? 'Sending…' : 'Send message'}
          <span className="text-2xl transition-transform group-hover:translate-x-2" aria-hidden="true">↗</span>
        </button>
      </div>
      <div className="flex flex-col justify-between gap-4 pt-3 font-[family-name:var(--font-roboto)] text-xs uppercase leading-tight sm:flex-row" aria-live="polite">
        <p>
          {status === 'success' ? 'Thanks — your message has been sent.' : status === 'error' ? 'Unable to send your message. Please try again or email me directly.' : 'Enter your email or phone number so I can reply.'}
        </p>
        <p className="max-w-[290px] sm:text-right">I&apos;ll only use your details to respond to your message.</p>
      </div>
    </form>
  );
}
