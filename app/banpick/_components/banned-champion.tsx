import { ChampionTypes } from "@/hooks/query/champion"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import Image from "next/image"
import React from "react"

interface BannedChampionProps {
  championList?: ChampionTypes[]
  type: "red" | "blue"
}

export const BannedChampion = ({ championList, type }: BannedChampionProps) => {
  const store = useBanpickStore()
  const championTypeList = store[type].bannedChampionList

  return (
    <div className="space-y-[12px] flex flex-1 flex-col justify-center items-center border-b-4  border-card">
      <div className="flex flex-col justify-center items-center px-[12px] space-y-[12px]">
        <div className="flex gap-x-[24px]">
          <div className="border-4 w-[110px] h-[110px] relative bg-card">
            {championTypeList && championTypeList[0] && (
              <Image
                src={championTypeList[0].icon_image}
                width={110}
                height={110}
                className="grayscale"
                alt=""
              />
            )}
          </div>
          <div className="border-4 w-[110px] h-[110px] bg-card">
            {championTypeList && championTypeList[1] && (
              <Image
                src={championTypeList[1].icon_image}
                width={110}
                height={110}
                alt=""
                className="grayscale"
              />
            )}
          </div>
          <div className="border-4 w-[110px] h-[110px] bg-card">
            {championTypeList && championTypeList[2] && (
              <Image
                src={championTypeList[2].icon_image}
                width={110}
                height={110}
                alt=""
                className="grayscale"
              />
            )}
          </div>
        </div>
        <div className="flex gap-x-[24px]">
          <div className="border-4 w-[110px] h-[110px] bg-card">
            {championTypeList && championTypeList[3] && (
              <Image
                src={championTypeList[3].icon_image ?? ""}
                width={110}
                height={110}
                className="grayscale"
                alt=""
              />
            )}
          </div>
          <div className="border-4 w-[110px] h-[110px] bg-card">
            {championTypeList && championTypeList[4] && (
              <Image
                src={championTypeList[4].icon_image ?? ""}
                width={110}
                height={110}
                className="grayscale"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
