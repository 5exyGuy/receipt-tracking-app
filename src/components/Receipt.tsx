import { useState } from 'react';
import { Button } from './Button';
import { Select } from './Select';
import { Expense } from './Expense';
import './Receipt.scss';
import { Categories } from '../enums';

interface ReceiptProps {
    onPriceChange?: (price: number) => void;
}

export function Receipt({ onPriceChange }: ReceiptProps) {
    const [total, setTotal] = useState(0);
    const [expenses, setExpenses] = useState([] as Array<number>);
    const [category, setCategory] = useState<string | null>(null);

    function updateExpenseTotalPrice(index: number, price: number) {
        const newExpenses = [...expenses];
        newExpenses[index] = price;
        const totalPrice = newExpenses.reduce((a, b) => a + b, 0);

        setExpenses(newExpenses);
        setTotal(totalPrice);
        onPriceChange && onPriceChange(totalPrice);
    }

    function addExpense() {
        if (!category) return;
        setExpenses([...expenses, 0]);
    }

    function selectCategory(value: string) {
        setCategory(value);
    }

    return (
        <div className="receipt">
            <div className="receipt__header">
                <Select options={Object.values(Categories) as Array<string>} onChange={selectCategory} />
                <Button background={false} onClick={addExpense}>
                    Add expense
                </Button>
            </div>
            {category && expenses.length > 0 && (
                <div className="receipt__body">
                    <div className="receipt__body__expenses">
                        {expenses.map((_, index) => (
                            <Expense key={index} onPriceChange={(price) => updateExpenseTotalPrice(index, price)} />
                        ))}
                    </div>
                    <div className="receipt__body__total-price">
                        <span className="receipt__body__total-price__text">Total:</span>
                        <span className="receipt__body__total-price__value">€{total}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
