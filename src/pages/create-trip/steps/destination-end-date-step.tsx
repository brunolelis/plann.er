import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
      
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-500" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>

      <div className="flex items-center gap-2 ml-2">
        <Calendar className="size-5 text-zinc-500 shrink-0"/>
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 max-w-40 outline-none" />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ?
        (
          <Button onClick={closeGuestsInput} variant="secondary">
            Alterar local/data
            < Settings2 className="size-5 shrink-0"/>
          </Button>
        )
        :
        (
          <Button onClick={openGuestsInput} variant="primary">
            Continuar
            < ArrowRight className="size-5 shrink-0" />
          </Button>
        )
      }
    </div>
  )
}