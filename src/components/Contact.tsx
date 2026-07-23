'use client';

import { useActionState, useEffect, useState } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import AnfrageButton from '@/components/AnfrageButton';

const initialState: ContactFormState = { success: false, message: '' };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [visible, setVisible] = useState(false);
  const [lastMessage, setLastMessage] = useState<string | null>(null);

  if (state.message && state.message !== lastMessage) {
    setLastMessage(state.message);
    setVisible(true);
  }

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <section className="bg-dark text-paper py-24" id="kontakt">
      <div className="max-w-300 mx-auto px-8">
        <div className="font-mono text-xs tracking-[0.16em] text-red uppercase mb-3.5">Kontakt</div>
        <h2 className="font-display font-extrabold text-[clamp(30px,3.6vw,42px)] tracking-tight text-white">
          Projekt anfragen.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-16 mt-12">
          <div>
            <div className="mb-6.5 pb-6.5 border-b border-grey-line">
              <div className="font-mono text-[11.5px] tracking-widest uppercase text-grey-soft mb-1.5">Einsatzgebiet</div>
              <div className="text-base font-medium text-white">Unser Einsatzgebiet umfasst die Region Inn-Salzach sowie den gesamten südostbayerischen Raum. Je nach Projektgröße und Leistungsumfang sind wir auch darüber hinaus für Sie im Einsatz. Sprechen Sie uns gerne an.</div>
            </div>

            <div className="mb-6.5 pb-6.5 border-b border-grey-line">
              <div className="font-mono text-[11.5px] tracking-widest uppercase text-grey-soft mb-1.5">Adresse</div>
              <div className="text-base font-medium text-white">
                Hütweg 19, 84518 Garching a.d.Alz
              </div>
            </div>

            <div className="mb-6.5 pb-6.5 border-b border-grey-line">
              <div className="font-mono text-[11.5px] tracking-widest uppercase text-grey-soft mb-1.5">Telefon (auch WhatsApp)</div>
              <a className="text-base font-medium text-white hover:text-red" href="tel:+491627141491">
                (+49) 0162 7141491
              </a>
            </div>

            <div >
              <div className="font-mono text-[11.5px] tracking-widest uppercase text-grey-soft mb-1.5">E-Mail</div>
              <a
                className="text-base font-medium text-white hover:text-red"
                href="mailto:info@bau-eremie.de"
              >
                info@bau-eremie.de
              </a>
            </div>
          </div>

          <div>
            <form action={formAction} className="grid gap-4.5" id="anfrage-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[11.5px] tracking-[0.08em] uppercase text-grey-soft mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Vor- und Nachname"
                    required
                    className="w-full bg-dark-2 border border-grey-line text-white px-3.5 py-3 font-body text-[14.5px]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-mono text-[11.5px] tracking-[0.08em] uppercase text-grey-soft mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ihre Telefonnummer"
                    className="w-full bg-dark-2 border border-grey-line text-white px-3.5 py-3 font-body text-[14.5px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[11.5px] tracking-[0.08em] uppercase text-grey-soft mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ihre@email.de"
                  required
                  className="w-full bg-dark-2 border border-grey-line text-white px-3.5 py-3 font-body text-[14.5px]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[11.5px] tracking-[0.08em] uppercase text-grey-soft mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Kurz zu Ihrem Projekt: Ort, Umfang, gewünschter Zeitraum ..."
                  className="w-full bg-dark-2 border border-grey-line text-white px-3.5 py-3 font-body text-[14.5px] resize-y min-h-27.5"
                />
              </div>

              <div className="flex items-center gap-4 mt-1.5">
                <AnfrageButton disabled={isPending} label={isPending ? "Wird gesendet…" : "Anfrage senden"} />
                <span className="text-[12.5px] text-grey-soft">Wir melden uns bei Ihnen zurück.</span>
              </div>

              {visible && state.message && (
                <div
                  className={`px-4.5 py-4 text-[14.5px] border ${state.success
                    ? 'bg-dark-2 border-red text-paper'
                    : 'bg-dark-2 border-grey-line text-paper'
                    }`}
                  role="status"
                >
                  <strong className={state.success ? 'text-red' : 'text-grey-soft'}>
                    {state.success ? 'Danke.' : 'Hinweis.'}
                  </strong>{' '}
                  {state.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}