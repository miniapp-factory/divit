import { TradeForm } from "@/components/trading/trade-form";
import { TradeTable } from "@/components/trading/trade-table";
import { TradeChart } from "@/components/trading/trade-chart";
import { AssetSelector } from "@/components/trading/trade-asset-selector";

export default function TradingPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Trading Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <TradeChart />
        </div>
        <div className="md:col-span-1">
          <AssetSelector />
          <TradeForm />
        </div>
      </div>
      <TradeTable />
    </div>
  );
}
