import { useState } from 'react'
import type { FormEvent } from 'react'
/* Library for send email */
import emailjs from '@emailjs/browser'
import './Contact.css'
import { FaPaperPlane } from "react-icons/fa"
import { useLang } from "../i18n/LanguageContext"

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

const INITIAL_FORM: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error'

export const Contact = () => {
    const { t } = useLang();
    const [form, setForm] = useState<FormData>(INITIAL_FORM)
    const [status, setStatus] = useState<SubmitStatus>('idle')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject || `${t.contact.defaultSubject} — ${form.name}`,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setStatus('sent')
            setTimeout(() => {
                setStatus('idle')
                setForm(INITIAL_FORM)
            }, 3000)
        } catch (error) {
            console.error('Error enviando el mensaje:', error)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 3000)
        }
    }

    const buttonLabel = {
        idle: t.contact.submitButton,
        sending: t.contact.submitButtonSending,
        sent: t.contact.submitButtonSent,
        error: t.contact.submitButtonError,
    }[status]

    return (
        <section id="contact" className="contact-section" aria-labelledby="contact-title">
            <div className="section-title">
                <h2 id="contact-title">{t.contact.title}</h2>
                <span>{t.contact.subtitle}</span>
            </div>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label={t.contact.formAriaLabel}
            >
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="contact-name">{t.contact.nameLabel}</label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder={t.contact.namePlaceholder}
                            required
                            autoComplete="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact-email">{t.contact.emailLabel}</label>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t.contact.emailPlaceholder}
                            required
                            autoComplete="email"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="contact-subject">{t.contact.subjectLabel}</label>
                    <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder={t.contact.subjectPlaceholder}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact-message">{t.contact.messageLabel}</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t.contact.messagePlaceholder}
                        rows={5}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`contact-submit ${status === 'sent' ? 'is-sent' : ''} ${status === 'error' ? 'is-error' : ''}`}
                    disabled={!form.name || !form.email || !form.message || status === 'sending'}
                >
                    <FaPaperPlane />
                    <span>{buttonLabel}</span>
                </button>
            </form>
        </section>
    )
}