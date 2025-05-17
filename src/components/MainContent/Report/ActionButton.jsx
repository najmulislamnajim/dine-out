export default function ActionButton({title, extraClass}) {
  return (
    <button className={`bg-gray-800 text-xs px-3 py-1 rounded-full transition-colors duration-300 ${extraClass}`}>
      {title}
    </button>
  );
}
