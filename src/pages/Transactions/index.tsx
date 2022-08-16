import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransacionsTable, TransactionsContainer } from "./styles";

interface Transacion {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createAt: string
}

export function Transactions() {
  const  [transactions, setTransactions ] = useState<Transacion[]>([])

  async function loadTransactions(){
    const response = await fetch('http://localhost:1455/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() =>{
    loadTransactions()
  }, [])

  return(
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransacionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td><PriceHighLight variant={transaction.type}>R$ {transaction.price}</PriceHighLight></td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransacionsTable>
      </TransactionsContainer>
    </div>
  )
}