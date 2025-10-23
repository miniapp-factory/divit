"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TradeForm() {
  const [asset, setAsset] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [orderType, setOrderType] = useState("market");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: send order to backend
    console.log({ asset, quantity, price, orderType });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select onValueChange={setOrderType} value={orderType}>
        <SelectTrigger>
          <SelectValue placeholder="Order Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="market">Market</SelectItem>
          <SelectItem value="limit">Limit</SelectItem>
          <SelectItem value="stop-loss">Stop‑Loss</SelectItem>
          <SelectItem value="take-profit">Take‑Profit</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="text"
        placeholder="Asset"
        value={asset}
        onChange={(e) => setAsset(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      {orderType !== "market" && (
        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      )}
      <Button type="submit" className="w-full">
        Place Order
      </Button>
    </form>
  );
}
