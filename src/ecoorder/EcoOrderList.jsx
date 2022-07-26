import dummy from '../db/data.json'

function EcoOrderList() {
  console.log(dummy);
  return <ul className="list_Order">
    <h1>주문내역</h1>
    <table border={1}>
    <thead>
        <td width="10" align="center"></td>
        <td width="10" align="center">주문일자</td>
        <td width="100" align="center">상품명</td>
        <td width="70" align="center">결제금액</td>
        <td width="50" align="center">결제방법</td>
        <td width="50" align="center">결제상태</td>
      </thead>
      <tbody>
        {dummy.ecoOrders.map(ecoOrder => (
        <tr key={ecoOrder.ecoOrderId}>
          <td align="center"><input type="checkbox" /></td>
          <td align="center">{ecoOrder.orderDate}</td>
          <td>{ecoOrder.orderName}</td>
          <td align="right">{ecoOrder.totalPrice}</td>
          <td align="center">{ecoOrder.orderMethod}</td>
          <td align="center">{ecoOrder.orderState}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <h1> </h1>
    <button>주문취소</button>
  </ul>;
}

export default EcoOrderList
