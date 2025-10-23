"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TradeTable() {
  // Placeholder data
  const orders = [
    { id: 1, asset: "RELIANCE", type: "Limit", qty: 10, price: 2000, status: "Open" },
    { id: 2, asset: "NIFTY", type: "Market", qty: 5, price: 15000, status: "Closed" },
  ];

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((o) => (
            <TableRow key={o.id}>
              <TableCell>{o.asset}</TableCell>
              <TableCell>{o.type}</TableCell>
              <TableCell>{o.qty}</TableCell>
              <TableCell>{o.price}</TableCell>
              <TableCell>{o.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
