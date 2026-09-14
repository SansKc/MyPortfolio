const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export function WhatsAppButton() {
  if (!whatsappNumber) return null;

  const phoneNumber = whatsappNumber.replace(/\D/g, '');

  if (!phoneNumber) return null;

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi Sanskar, I found your portfolio and would like to connect.')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sanskar on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3.2a12.6 12.6 0 0 0-10.7 19.25L4 28.8l6.5-1.7A12.6 12.6 0 1 0 16.02 3.2Zm0 22.9c-1.8 0-3.58-.48-5.12-1.4l-.37-.22-3.86 1.01 1.03-3.76-.24-.39a10.5 10.5 0 1 1 8.56 4.76Zm5.76-7.87c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.69.16-.2.31-.8 1-.97 1.2-.18.2-.35.22-.66.07-1.82-.91-3.01-1.63-4.2-3.7-.32-.55.32-.51.91-1.7.1-.2.05-.38-.03-.54-.08-.16-.7-1.67-.96-2.28-.25-.6-.51-.51-.7-.52h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58s1.1 3 1.25 3.2c.16.21 2.16 3.3 5.23 4.63.73.32 1.3.51 1.74.66.73.23 1.4.2 1.93.12.59-.09 1.83-.75 2.08-1.47.26-.72.26-1.34.18-1.47-.07-.13-.28-.2-.59-.35Z" />
      </svg>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
