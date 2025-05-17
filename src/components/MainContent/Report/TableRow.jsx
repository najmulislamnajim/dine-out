export default function TableRow({customerId, customerName, orderItem, orderAmount, orderStatus, orderStatusClass, children}) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{customerId}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{orderItem}</td>
      <td className="py-3">{orderAmount}</td>
      <td className="py-3">
        <span className={orderStatusClass}>{orderStatus}</span>
      </td>
      <td className="py-3">
        {children}
      </td>
    </tr>
  );
}
