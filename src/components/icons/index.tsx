export function AxisLogo({ className = "w-auto h-12" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 2000 2000"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g transform="matrix(0.71007,-0.71007,0.707107,0.707107,-421.891,873.849)">
                <path d="M1166.47,1580.278L1166.47,2079L1164.26,2079L913.53,1827.219L913.53,1580L667.342,1580L429.06,1340.719L429.06,1093.5L182.872,1093.5L-67.858,841.719L-67.858,839.5L428.783,839.5L682,1093.778L682,1326L913.253,1326L1166.47,1580.278ZM507.648,839.5L913.53,839.5L913.53,607L682,607L682,353L1398,353L1398,607L1166.47,607L1166.47,839.5L1398,839.5L1398,607L1650.94,607L1650.94,1326L1398,1326L1398,1093.5L1166.47,1093.5L1166.47,1501.082L913.53,1247.082L913.53,1093.5L760.589,1093.5L507.648,839.5Z"/>
            </g>
        </svg>
    );
}

export const ShoppingBagIcon = ({ count = 0, className = "" }: { count?: number, className?: string }) => (
    <svg
        viewBox="0 0 30 40"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H26C28.2091 40 30 38.2091 30 36V4C30 1.79086 28.2091 0 26 0H4ZM11 4C9.89543 4 9 4.89543 9 6C9 7.10457 9.89543 8 11 8H19C20.1046 8 21 7.10457 21 6C21 4.89543 20.1046 4 19 4H11Z"
        />
        <text
            transform="translate(15.6 31)"
            textAnchor="middle"
            fill="white"
            className="text-[12px] font-bold font-mono"
        >
            <tspan x="0" y="0">{count}</tspan>
        </text>
    </svg>
);

export const PlusIcon = ({ className = "" }: { className?: string }) => (
    <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className={className}
    >
        <path
            d="M12 4v16m8-8H4"
            strokeWidth="1.5"
            strokeLinecap="square"
        />
    </svg>
);

export function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 30 150" // Ajustamos el viewbox para que no se corte el radio
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g fill="currentColor">
                <circle cx="15" cy="20" r="15" />
                <circle cx="15" cy="75" r="15" />
                <circle cx="15" cy="130" r="15" />
            </g>
        </svg>
    );
}