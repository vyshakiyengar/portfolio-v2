import { ChevronDown } from 'lucide-react'
import '../styles/ScrollIndicator.css'

const ScrollIndicator = ({ dark = true }) => {
    return (
        <div className={`scroll-indicator-wrapper fade-in ${dark ? 'dark' : 'light'}`}>
            <ChevronDown size={32} strokeWidth={1.5} className="scroll-arrow" />
            <ChevronDown size={32} strokeWidth={1.5} className="scroll-arrow delay" />
        </div>
    )
}

export default ScrollIndicator
