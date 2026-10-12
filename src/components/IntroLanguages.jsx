import { useState } from 'react'
import { ChevronLeft, ChevronRight, Languages } from 'lucide-react'

// Short intro in Indian and international languages. Every version is rendered into the
// prerendered HTML (inactive ones are hidden), so search engines can read all of them.
const intros = [
    {
        code: 'kn', label: 'ಕನ್ನಡ', name: 'Kannada',
        text: 'ವೈಶಾಖ್ ಕಣ್ಣನ್ ಐಯ್ಯಂಗಾರ್ (ವೈಶಾಖ್ ಐಯ್ಯಂಗಾರ್) ಕರ್ನಾಟಕ ಮೂಲದ, ಲಂಡನ್‌ನಲ್ಲಿ ನೆಲೆಸಿರುವ ತಂತ್ರಜ್ಞ ಮತ್ತು ಸಾಮಾಜಿಕ ಉದ್ಯಮಿ. ಅವರು ಮೆಟಾದಲ್ಲಿ ಪ್ರಾಡಕ್ಟ್ ಸ್ಟ್ರಾಟಜಿ ಮತ್ತು ಗ್ರೋತ್ ವಿಭಾಗದಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದ್ದಾರೆ, ಲಂಡನ್ ಬಿಸಿನೆಸ್ ಸ್ಕೂಲ್‌ನಲ್ಲಿ ಎಂಬಿಎ ಪಡೆದಿದ್ದಾರೆ ಮತ್ತು ಬ್ಲೂಫಿನ್ ಫೌಂಡೇಶನ್‌ನ ಸಹ-ಸಂಸ್ಥಾಪಕರು. ತಾಯಿಗಾಗಿ ಅವರು ರೂಪಿಸಿದ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಎಐ ಶಾಪಿಂಗ್ ಏಜೆಂಟ್ ಕುರಿತು ಪ್ರಜಾವಾಣಿ ವರದಿ ಮಾಡಿದೆ.'
    },
    {
        code: 'hi', label: 'हिन्दी', name: 'Hindi',
        text: 'वैशाख कन्नन अय्यंगार कर्नाटक से हैं और लंदन में रहने वाले टेक्नोलॉजिस्ट और सामाजिक उद्यमी हैं। उन्होंने मेटा में प्रोडक्ट स्ट्रैटेजी और ग्रोथ में काम किया है, लंदन बिज़नेस स्कूल से एमबीए किया है और ब्लूफ़िन फ़ाउंडेशन के सह-संस्थापक हैं। अपनी माँ के लिए बनाए गए उनके व्हाट्सऐप एआई शॉपिंग एजेंट पर प्रजावाणी ने रिपोर्ट प्रकाशित की है।'
    },
    {
        code: 'ta', label: 'தமிழ்', name: 'Tamil',
        text: 'வைஷாக் கண்ணன் ஐயங்கார் கர்நாடகாவைச் சேர்ந்தவர்; லண்டனில் வசிக்கும் தொழில்நுட்ப நிபுணர் மற்றும் சமூக தொழில்முனைவோர். அவர் மெட்டாவில் தயாரிப்பு உத்தி மற்றும் வளர்ச்சிப் பிரிவில் பணியாற்றியுள்ளார், லண்டன் பிசினஸ் ஸ்கூலில் எம்பிஏ பெற்றுள்ளார், ப்ளூஃபின் அறக்கட்டளையின் இணை நிறுவனர். தன் தாய்க்காக அவர் வடிவமைத்த வாட்ஸ்அப் AI ஷாப்பிங் ஏஜென்ட் குறித்து பிரஜாவாணி செய்தி வெளியிட்டுள்ளது.'
    },
    {
        code: 'te', label: 'తెలుగు', name: 'Telugu',
        text: 'వైశాఖ్ కణ్ణన్ అయ్యంగార్ కర్ణాటకకు చెందినవారు; లండన్‌లో నివసిస్తున్న సాంకేతిక నిపుణుడు, సామాజిక వ్యవస్థాపకుడు. ఆయన మెటాలో ప్రోడక్ట్ స్ట్రాటజీ & గ్రోత్ విభాగంలో పనిచేశారు, లండన్ బిజినెస్ స్కూల్ నుంచి ఎంబీఏ పొందారు, బ్లూఫిన్ ఫౌండేషన్ సహ వ్యవస్థాపకుడు. తన తల్లి కోసం ఆయన రూపొందించిన వాట్సాప్ AI షాపింగ్ ఏజెంట్‌పై ప్రజావాణి కథనం ప్రచురించింది.'
    },
    {
        code: 'en', label: 'English', name: 'English',
        text: 'Vyshak Kannan Iyengar is a London-based technologist and social entrepreneur from Karnataka. He worked in Product Strategy & Growth at Meta, holds an MBA from London Business School, and co-founded BluFin Foundation. Prajavani reported on the WhatsApp AI shopping agent he designed for his mother.'
    },
    {
        code: 'fr', label: 'Français', name: 'French',
        text: 'Vyshak Kannan Iyengar est un technologue et entrepreneur social originaire du Karnataka, basé à Londres. Il a travaillé chez Meta en stratégie produit et croissance, est titulaire d’un MBA de la London Business School et a cofondé la BluFin Foundation. Le quotidien Prajavani a consacré un article à l’agent d’achat IA sur WhatsApp qu’il a conçu pour sa mère.'
    },
    {
        code: 'es', label: 'Español', name: 'Spanish',
        text: 'Vyshak Kannan Iyengar es un tecnólogo y emprendedor social de Karnataka que vive en Londres. Trabajó en estrategia de producto y crecimiento en Meta, tiene un MBA de London Business School y es cofundador de BluFin Foundation. El diario Prajavani publicó un reportaje sobre el agente de compras con IA en WhatsApp que diseñó para su madre.'
    },
    {
        code: 'de', label: 'Deutsch', name: 'German',
        text: 'Vyshak Kannan Iyengar ist ein Technologe und Sozialunternehmer aus Karnataka mit Sitz in London. Er arbeitete bei Meta im Bereich Produktstrategie und Wachstum, hat einen MBA der London Business School und ist Mitgründer der BluFin Foundation. Die Zeitung Prajavani berichtete über den KI-Einkaufsagenten auf WhatsApp, den er für seine Mutter entwickelt hat.'
    },
    {
        code: 'ja', label: '日本語', name: 'Japanese',
        text: 'ヴァイシャーク・カンナン・アイヤンガーは、インド・カルナータカ州出身でロンドンを拠点とするテクノロジストであり、社会起業家です。Metaでプロダクト戦略とグロースに携わり、ロンドン・ビジネス・スクールでMBAを取得、BluFin Foundationを共同設立しました。母親のために設計したWhatsApp上のAIショッピングエージェントは、カンナダ語紙プラジャヴァーニで紹介されました。'
    },
    {
        code: 'ar', label: 'العربية', name: 'Arabic', dir: 'rtl',
        text: 'فيشاك كانان أيينغار تقني ورائد أعمال اجتماعي من ولاية كارناتاكا ويقيم في لندن. عمل في استراتيجية المنتجات والنمو لدى ميتا، وحصل على ماجستير إدارة الأعمال من كلية لندن للأعمال، وشارك في تأسيس مؤسسة بلوفين. نشرت صحيفة براجافاني تقريرًا عن وكيل التسوق بالذكاء الاصطناعي على واتساب الذي صممه لوالدته.'
    }
]

export default function IntroLanguages() {
    const [active, setActive] = useState(0)
    const go = step => setActive(i => (i + step + intros.length) % intros.length)
    const current = intros[active]

    return (
        <section className="intro-lang" aria-label="Short introduction in other languages">
            <div className="intro-lang-head">
                <span className="intro-lang-title"><Languages size={14} aria-hidden="true" /> Intro in {intros.length} languages</span>
                <div className="intro-lang-arrows">
                    <button type="button" onClick={() => go(-1)} aria-label="Previous language"><ChevronLeft size={16} /></button>
                    <span className="intro-lang-count" aria-live="polite">{current.name} · {active + 1}/{intros.length}</span>
                    <button type="button" onClick={() => go(1)} aria-label="Next language"><ChevronRight size={16} /></button>
                </div>
            </div>

            <div className="intro-lang-tabs" role="tablist" aria-label="Choose a language">
                {intros.map((intro, i) => (
                    <button
                        key={intro.code}
                        type="button"
                        role="tab"
                        id={`intro-tab-${intro.code}`}
                        aria-selected={i === active}
                        aria-controls={`intro-panel-${intro.code}`}
                        lang={intro.code}
                        className={i === active ? 'is-active' : ''}
                        onClick={() => setActive(i)}
                    >
                        {intro.label}
                    </button>
                ))}
            </div>

            {intros.map((intro, i) => (
                <p
                    key={intro.code}
                    id={`intro-panel-${intro.code}`}
                    role="tabpanel"
                    aria-labelledby={`intro-tab-${intro.code}`}
                    lang={intro.code}
                    dir={intro.dir || 'ltr'}
                    hidden={i !== active}
                    className="intro-lang-text"
                >
                    {intro.text}
                </p>
            ))}
        </section>
    )
}
