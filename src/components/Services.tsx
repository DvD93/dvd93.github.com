import './Services.css'
import { MdBugReport, MdSpeed, MdIntegrationInstructions, MdManageSearch } from "react-icons/md"
import type { ReactNode } from 'react'
import { useLang } from '../i18n/LanguageContext'

interface ServiceStructure {
    id: string
    icon: ReactNode
}

const SERVICES: ServiceStructure[] = [
    { id: 'svc-1', icon: <MdIntegrationInstructions size={36} /> },
    { id: 'svc-2', icon: <MdBugReport size={36} /> },
    { id: 'svc-3', icon: <MdSpeed size={36} /> },
    { id: 'svc-4', icon: <MdManageSearch size={36} /> },
]

export const Services = () => {
    const { t } = useLang();

    return (
        <section id="services" className="services-section" aria-labelledby="services-title">
            <div className="section-title">
                <h2 id="services-title">{t.services.title}</h2>
                <span>{t.services.subtitle}</span>
            </div>

            <div className="services-grid">
                {SERVICES.map((service) => {
                    const serviceText = t.services.items[service.id];
                    return (
                        <article className="service-card" key={service.id}>
                            <div className="service-icon" aria-hidden="true">
                                {service.icon}
                            </div>
                            <h3 className="service-name">{serviceText.title}</h3>
                            <p className="service-desc">{serviceText.description}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}