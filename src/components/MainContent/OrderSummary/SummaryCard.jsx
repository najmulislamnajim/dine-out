export default function SummaryCard({ title, count, titleClass }) {
  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className="text-5xl font-bold text-yellow-500 mb-2">{count}</div>
      <div className={titleClass}>{title}</div>
    </div>
  );
}
