import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Jessica White</span>
            <span className="block text-sm text-zinc-400 truncate">
              jessica@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 shrink-0" size-5 />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Dra. Rita Pacocha</span>
            <span className="block text-sm text-zinc-400 truncate">
              drarita@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 shrink-0" size-5 />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
