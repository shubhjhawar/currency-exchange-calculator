export default function CurrencyRow(props) {
    const {
        currencyOptions,
        showCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    }  = props;
    return(
        <div>
            <input type="number" className="input" value={amount} onChange = {onChangeAmount}></input>
            <select value={showCurrency} onChange={onChangeCurrency}> 
                {currencyOptions.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
                
            </select>
        </div>
    )
}