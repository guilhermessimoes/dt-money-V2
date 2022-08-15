import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransacionsTable, TransactionsContainer } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransacionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHighLight variant="income">R$ 12.000,00</PriceHighLight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Lanche</td>
              <td><PriceHighLight variant="outcome">-R$ 100,00</PriceHighLight></td>
              <td>Alimentação</td>
              <td>15/04/2022</td>
            </tr>
          </tbody>
        </TransacionsTable>
      </TransactionsContainer>
    </div>
  )
}