'use client'

import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import Image from "next/image"
import { useResultModalStore } from "@/hooks/zustand/use-result-modal-store"
import { Button } from "@/components/ui/button"

export const ResultModal = () => {
  const { blue, red, match } = useBanpickStore()
  const { isOpen, setIsOpen, setIsOpen2 } = useResultModalStore()
  const { setAddMatch } = useBanpickStore()
  
  const onKeepPlaying = () => {
    setAddMatch()
  }

  return <Dialog
    open={isOpen}
  >
    <DialogContent className="w-[800px] !max-w-[800px] !min-w-[800px]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">{`${match} 세트 결과`}</DialogTitle>

      </DialogHeader>
      
      <div className="w-full flex flex-row pt-[24px] gap-x-[12px]">
        <div className="flex flex-col flex-1 gap-y-[24px]">
          <div className="flex flex-row bg-blue-500 w-full justify-center items-center h-[48px]">
            <p className="text-white font-bold text-xl">BLUE : {blue.team}</p>
          </div>
          <div className="w-full">
            <p className="text-white font-bold text-lg pb-[4px]">밴된 챔피언</p>
            <div className="flex flex-row">
              {blue.bannedChampionList.map((champion) => (
                <div key={champion.id} className="border-2">
                  <Image src={champion.icon_image} alt={champion.name} width={72} height={72} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-white font-bold text-lg pb-[4px]">블루 챔피언</p>
            <div className="flex flex-col w-full gap-y-[8px]">
              {blue.pickedChampionList.map((champion) => (
                <div key={champion.id} className="relative w-full h-[150px]">
                  <Image 
                    src={champion.splash_image} 
                    alt={champion.name} 
                    fill
                    className="object-cover object-top"
                  />
                  <p className="absolute bottom-0 left-3 right-0 bg-black/10 text-white py-1 font-bold">{champion.name}</p>
                </div>
              ))}
            </div>
          </div>
          <Button className="w-full h-[56px] rounded-full mt-[24px] bg-blue-500 text-white text-lg font-bold" onClick={onKeepPlaying}>
            블루 승
          </Button>
        </div>

        <div className="flex flex-col flex-1 gap-[24px]">
          <div className="flex flex-row bg-red-500 w-full justify-center items-center h-[48px]">
            <p className="text-center text-white font-bold text-xl">RED : {red.team}</p>
          </div>
          <div className="w-full">
            <p className="text-white font-bold text-lg pb-[4px]">밴된 챔피언</p>
            <div className="flex flex-row">
              {red.bannedChampionList.map((champion) => (
                <div key={champion.id} className="border-2">
                  <Image src={champion.icon_image} alt={champion.name} width={72} height={72} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-white font-bold text-lg pb-[4px]">레드 챔피언</p>
            <div className="flex flex-col w-full gap-y-[8px]">
              {red.pickedChampionList.map((champion) => (
                <div key={champion.id} className="relative w-full h-[150px]">
                  <Image 
                    src={champion.splash_image} 
                    alt={champion.name} 
                    fill
                    className="object-cover object-top"
                  />
                  <p className="absolute bottom-0 left-3 right-0 bg-black/10 text-white py-1 font-bold">{champion.name}</p>
                </div>
              ))}
            </div>
          </div>
          <Button className="w-full h-[56px] rounded-full mt-[24px] bg-red-500 text-white text-lg font-bold" onClick={onKeepPlaying}>
            레드 승
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}