import { createContext, ReactNode, useEffect, useState } from "react";

interface Transacion {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transacion[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps){
  const  [transactions, setTransactions ] = useState<Transacion[]>([])

  async function loadTransactions(){
    const response = await fetch('http://localhost:1455/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() =>{
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

