interface PriceSummaryProps {
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
}

export const PriceSummary = ({ totals }: { totals: PriceSummaryProps }) => (
    <div className="space-y-[2vw] pt-[2vw]">
        <div className="flex justify-between text-[3vw] font-light text-gray-500">
            <span>subtotal</span>
            <span>{totals.subtotal.toFixed(2)} MXN</span>
        </div>
        <div className="flex justify-between text-[3vw] font-light text-gray-500">
            <span>tax (iva)</span>
            <span>{totals.tax.toFixed(2)} MXN</span>
        </div>
        <div className="flex justify-between text-[3vw] font-light text-gray-500">
            <span>shipping</span>
            <span>{totals.shipping === 0 ? 'free' : `${totals.shipping.toFixed(2)} MXN`}</span>
        </div>
        <div className="flex justify-between text-[4vw] pt-[2vw] border-t border-gray-400 tracking-tighter">
            <span>total</span>
            <span>{totals.total.toFixed(2)} MXN</span>
        </div>
    </div>
);