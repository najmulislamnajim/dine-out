import SummaryCard from "./SummaryCard";

export default function Summary() {
  const commonClasses =
    "bg-opacity-50 text-xs font-medium px-3 py-1 rounded-full inline-block";
  const summaryList = [
    {
      summaryId: 1,
      title: "Total Order",
      count: 8,
      titleClass: `bg-yellow-800 text-yellow-200 ${commonClasses}`,
    },
    {
      summaryId: 2,
      title: "Pending",
      count: 7,
      titleClass: `bg-red-800  text-red-200 ${commonClasses}`,
    },
    {
      summaryId: 3,
      title: "Delivered",
      count: 1,
      titleClass: `bg-green-800  text-green-200 ${commonClasses}`,
    },
  ];
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {summaryList.map((item) => {
          return (
            <SummaryCard
              key={item.summaryId}
              title={item.title}
              count={item.count}
              titleClass={item.titleClass}
            />
          );
        })}
      </div>
    </div>
  );
}
