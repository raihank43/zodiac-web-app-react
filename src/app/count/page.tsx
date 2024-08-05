"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(150);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex justify-center items-center min-h-screen gap-10">
      <Button onClick={handleClick}>Dizkir</Button>
      <div className="text-4xl font-bold">{count}</div>
    </div>
  );
}
