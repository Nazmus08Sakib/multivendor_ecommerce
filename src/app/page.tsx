import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 relative">
      <div className="w-100 flex justify-end absolute top-5 right-5">
        <ThemeToggle />
      </div>
      <h1 className="fon-bold text-blue-500 font-barlow">welcome to our course</h1>
      <Button variant="destructive">click me</Button>
    </div>
  );
}
