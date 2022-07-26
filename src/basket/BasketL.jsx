import dummy from '../db/data.json'
import imgUpdate from './update.png'

function BasketL() {
  console.log(dummy);
  return <ul className="list_item">
    <h1>장바구니</h1>
    <table border={1}>
      <thead>
        <td width="10" align="center"><input type="checkbox" /></td>
        <td width="100" align="center">상품명</td>
        <td width="70" align="center">수량</td>
        <td width="50" align="center">단가</td>
        <td width="50" align="center">금액</td>
        <td width="10" align="center">삭제</td>
      </thead>
      <tbody>
        {dummy.baskets.items.map(item => (
        <tr key={item.eProductId}>
          <td align="center"><input type="checkbox" /></td>
          <td>{item.eProductName}</td>
          <td align="center">{item.eProductQty}   <button>+</button> <button>-</button>  <button><img src={imgUpdate} width="25" height="25"></img></button></td>
          <td align="right">{item.unitPrie}</td>
          <td align="rigth">{item.eProductQty * item.unitPrie}</td>
          <td align="center"><button>X</button></td>
        </tr>
        ))}
      </tbody>
    </table>
    <h1> 합계 : {dummy.baskets.totalPrice}</h1>
    <button>주문하기</button>
  </ul>;
}

export default BasketL
