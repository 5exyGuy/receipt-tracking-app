import { useState } from 'react';
import { Button } from './components/Button';
import './App.scss';
import { Receipt } from './components/Receipt';

function App() {
    const [total, setTotal] = useState(0);
    const [receipts, setReceipts] = useState([] as Array<number>);

    function updateReceiptTotalPrice(index: number, price: number) {
        const newReceipts = [...receipts];
        newReceipts[index] = price;
        setReceipts(newReceipts);
        setTotal(newReceipts.reduce((a, b) => a + b, 0));
    }

    function addReceipt() {
        setReceipts([...receipts, 0]);
    }

    return (
        <div className="app-container">
            <div className="app-container__receipts">
                {receipts.map((_, index) => (
                    <Receipt key={index} onPriceChange={(price) => updateReceiptTotalPrice(index, price)} />
                ))}
            </div>
            <div className="app-container__nav">
                <div className="total-price">
                    <span className="total-price__text">Total:</span>
                    <span className="total-price__value">€{total}</span>
                </div>
                <Button onClick={addReceipt}>Add receipt</Button>
            </div>
        </div>
    );
}

export default App;
