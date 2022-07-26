import dummy from '../db/data.json'

function Payment() {
  console.log(dummy);
  return <ul className="Pyament">
    <h1>Payment</h1>
    <table border={1}>
      <tbody>
        <tr>
          <td>ecoOrderId</td>
          <td>{dummy.payment.ecoOrderId}</td>
        </tr>
        <tr>
          <td>paymentKind</td>
          <td>{dummy.payment.paymentKind}</td>
        </tr>
        <tr>
          <td>paymentMethod</td>
          <td>{dummy.payment.paymentMethod}</td>
        </tr>
      </tbody>
    </table>
    <h1> amout : {dummy.payment.amout}</h1>
    <button>payment</button>
  </ul>;
}

export default Payment
