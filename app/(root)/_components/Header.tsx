import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Notly</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button>Get Notly free</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
