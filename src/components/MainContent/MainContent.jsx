import CreateOrder from "./CreateOrder/CreateOrder";
import Summary from "./OrderSummary/Summary";
import Report from "./Report/Report";

export default function MainContent() {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrder />
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <Summary />
          <Report />
        </div>
      </div>
    </>
  );
}
