import './ExpenseItem.css'
import Date from "./ExpenseDate"
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  const { title, date, amount } = props

  return (
    <li>
      <Card className='expense-item'>
        <Date date={date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
      </Card>
    </li>
  );
}
 
export default ExpenseItem;