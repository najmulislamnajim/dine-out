import FilterSvg from "../../MySvg/FilterSvg";
import ActionButton from "./ActionButton";
import TableRow from "./TableRow";

export default function Report() {
  const deleteBtn = <ActionButton title="Delete" extraClass="hover:bg-red-600 mr-1" />;
  const deliveredBtn = <ActionButton title="Delivered" extraClass="hover:bg-green-600" />;
  const dataList = [
    {
      Id: 1,
      customerId: 1,
      customerName: "John Doe",
      orderItem: 4,
      orderAmount: 120,
      orderStatus: "PENDING",
      orderStatusClass: "text-red-500",
      children: deleteBtn,
    },
    {
      Id: 2,
      customerId: 2,
      customerName: "John Doe",
      orderItem: 4,
      orderAmount: 120,
      orderStatus: "DELIVERED",
      orderStatusClass: "text-green-500",
      children:(
      <>
        {deleteBtn}
        {deliveredBtn}
      </>
    ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FilterSvg />
          <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {dataList.map((item) => {
                return (
                  <TableRow key={item.Id} {...item}>
                    {" "}
                    {item.children}{" "}
                  </TableRow>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
