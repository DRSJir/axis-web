interface CartInputProps {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (val: string) => void;
    label?: string;
    readOnly?: boolean;
}

export const CartInput = ({
                              placeholder,
                              type = "text",
                              value,
                              onChange,
                              label,
                              readOnly = false
                          }: CartInputProps) => {
    return (
        <div className="relative w-full">
            {/* Si pasamos un label, lo posicionamos arriba para el estilo de "floating label" */}
            {label && (
                <label className="absolute text-[2.2vw] text-gray-400 top-2 left-3 tracking-wider font-medium">
                    {label}
                </label>
            )}

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                readOnly={readOnly}
                className={`
                    w-full rounded-[2vw] text-[3.5vw] font-light bg-[#f5f5f5] px-[3vw] 
                    border-none outline-none transition-all focus:ring-1 focus:ring-black/10
                    placeholder:text-gray-400 placeholder:text-[2.8vw]
                    ${label ? 'pt-6 pb-2' : 'py-[3.5vw]'}
                    ${readOnly ? 'cursor-not-allowed opacity-70' : ''}
                `}
            />
        </div>
    );
};