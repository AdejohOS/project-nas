import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <Loader2 className="animate-spin size-10 text-white" />
    </div>
  );
};

export default loading;
