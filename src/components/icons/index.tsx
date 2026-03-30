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