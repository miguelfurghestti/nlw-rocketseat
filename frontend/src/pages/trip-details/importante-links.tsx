import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportanteLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Reserva do Airbnb</span>
            <a href="#" className="block text-xs text-zinc-400 truncate">
              https://www.airbnb.com.br/rooms/1047000111231231313123131
            </a>
          </div>
          <Link2 className="text-zinc-400 shrink-0" size-5 />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Reserva do Airbnb</span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/1047000111231231313123131
            </a>
          </div>
          <Link2 className="text-zinc-400 shrink-0" size-5 />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
