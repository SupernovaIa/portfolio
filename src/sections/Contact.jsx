import { useState } from "react";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import { ME } from "../data/content";
import { SectionHeader } from "../components/Shared";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // TODO: conecta esto a tu backend o servicio de formularios
    // (Formspree, Resend, Web3Forms, una API propia, etc.)
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="pf-section">
      <SectionHeader
        eyebrow="04 / contacto"
        title="Hablemos"
        subtitle="Si tienes un proyecto interesante, una pregunta técnica o solo quieres saludar."
      />

      <div className="pf-contact-grid">
        <div className="pf-contact-info">
          <a href={`mailto:${ME.email}`} className="pf-contact-email">
            <Mail size={16} strokeWidth={1.5} />
            <span>{ME.email}</span>
            <ArrowUpRight size={14} />
          </a>

          <div className="pf-contact-socials">
            <h4>O por aquí</h4>
            {ME.social.map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="pf-contact-social">
                <s.Icon size={15} strokeWidth={1.5} />
                <div>
                  <strong>{s.label}</strong>
                  <span>{s.handle}</span>
                </div>
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>

          <div className="pf-contact-availability">
            <span className="pf-status-dot" />
            <div>
              <strong>Disponible para nuevos proyectos</strong>
              <span>Respondo en menos de 24h</span>
            </div>
          </div>
        </div>

        <div className="pf-contact-form">
          <div className="pf-field">
            <label>Nombre</label>
            <input type="text" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Cómo te llamas" />
          </div>
          <div className="pf-field">
            <label>Email</label>
            <input type="email" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tu@email.com" />
          </div>
          <div className="pf-field">
            <label>Mensaje</label>
            <textarea rows="5" value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Cuéntame en qué andas..." />
          </div>
          <button className="pf-btn primary full" onClick={handleSubmit} disabled={sent}>
            {sent ? "✓ Mensaje enviado" : <>Enviar mensaje <Send size={13} /></>}
          </button>
        </div>
      </div>
    </section>
  );
}
