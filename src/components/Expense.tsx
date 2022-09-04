import { useState } from 'react';
import { Input } from './Input';
import './Expense.scss';

interface ExpenseProps {
    onPriceChange?: (price: number) => void;
}

export function Expense({ onPriceChange }: ExpenseProps) {
    const [price, setPrice] = useState('€0.00');

    function updatePrice(event: React.ChangeEvent<HTMLInputElement>) {
        const targetPrice = parseFloat(event.target.value);
        const newPrice = Number.isNaN(targetPrice) ? price : event.target.value;
        setPrice(String(newPrice));
        onPriceChange && onPriceChange(Number(newPrice));
    }

    function addCurrencySymbol() {
        setPrice((price) => `€${Number(price).toFixed(2)}`);
    }

    function removeCurrencySymbol() {
        setPrice((price) => price.replace('€', ''));
    }

    return (
        <div className="expense">
            <Input className="expense__name" type="text" placeholder="Expense name" />
            <Input
                className="expense__price"
                type="text"
                value={price}
                placeholder="€0.00"
                onChange={updatePrice}
                onFocus={removeCurrencySymbol}
                onBlur={addCurrencySymbol}
            />
        </div>
    );
}
