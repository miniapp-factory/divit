"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AssetSelector() {
  const [selected, setSelected] = useState("");

  return (
    <Select onValueChange={setSelected} value={selected}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Asset" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="RELIANCE">Reliance</SelectItem>
        <SelectItem value="TCS">TCS</SelectItem>
        <SelectItem value="NIFTY">NIFTY 50</SelectItem>
        <SelectItem value="NIFTY_50">NIFTY 50</SelectItem>
      </SelectContent>
    </Select>
  );
}
