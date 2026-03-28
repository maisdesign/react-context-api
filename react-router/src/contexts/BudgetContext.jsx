/*
* - Il context espone uno stato `budgetMode` (booleano) e la funzione `setBudgetMode` per modificarlo
* Wrappare l'intera applicazione con il `BudgetProvider`
*/

import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();


function BudgetProvider({ children }) {
    const [maxPrice, setMaxPrice] = useState(null);
    return <BudgetContext.Provider value={{ maxPrice, setMaxPrice }}>{children}</BudgetContext.Provider>;
}

function useBudget() {
    return useContext(BudgetContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { BudgetProvider, useBudget };