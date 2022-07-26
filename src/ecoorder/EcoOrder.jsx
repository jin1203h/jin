import dummy from '../db/data.json'

function EcoOrder() {
  console.log(dummy);
  return <ul className="list_item">
    <h1>주문</h1>
    <table border={'1px'} bordercollapse={'collapse'}>
      <thead>
        <td width="150" align="center">상품명</td>
        <td width="100" align="center">수량</td>
        <td width="100" align="center">단가</td>
        <td width="100" align="center">금액</td>
      </thead>
      <tbody>
        {dummy.ecoOrder.items.map(item => (
        <tr key={item.eProductId}>
          <td>{item.eProductName}</td>
          <td align="center">{item.eProductQty}</td>
          <td align="right">{item.unitPrie}</td>
          <td align="right">{item.eProductQty * item.unitPrie}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <h3>배송지</h3>
    <table>
      <tbody>
        <tr>
          <td>우편번호</td>
          <td><input placeholder='zipcode'/></td>
        </tr>
        <tr>
          <td>주소</td>
          <td><input placeholder='address'/></td>
        </tr>
        <tr>
          <td>상세주소</td>
          <td><input placeholder='address detail'/></td>
        </tr>
      </tbody>
    </table>
    <h3>결제방법</h3>
    <table>
      <tbody>
        <tr>
          <td>결제수단</td>
          <td>
            <select name='paymentKind'>
                <option value="">선택</option>
                <option value="ECOPOINT">ECOPOINT</option>
                <option value="CARD">카드</option>
                <option value="CASH">현금</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>할부선택</td>
          <td>
            <select name='paymentMethod'>
                <option value="">선택</option>
                <option value="LUMPSUM">일시불</option>
                <option value="3MONTHS">3개월</option>
                <option value="6MONTHS">6개월</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <h1> 합계 : {dummy.ecoOrder.totalPrice} 원</h1>
    <button>결제하기</button>
  </ul>;
}

export default EcoOrder
