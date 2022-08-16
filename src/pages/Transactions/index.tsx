import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransacionsTable, TransactionsContainer } from "./styles";



export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
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