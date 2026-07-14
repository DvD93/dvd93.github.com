import './EmailContact.css'
import { useState } from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

interface EmailContactProps {
    email: string
}

export const EmailContact = ({ email }: EmailContactProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        })
    }

    return (
        <div className="email-container">
            <span className="email-input-box">{email}</span>

            <div className='email-btn-group'>
                <button
                    className={`email-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                    aria-label="Copiar email"
                >
                    <FaCopy className="" fontSize={25} color='white' />
                </button>

                <a href={`mailto:${email}`} className="email-btn" aria-label="Enviar email">
                    <FaPaperPlane fontSize={22} />
                </a>
            </div>

        </div>
    )
}