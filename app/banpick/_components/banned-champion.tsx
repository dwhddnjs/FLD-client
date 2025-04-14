import { ChampionTypes } from "@/hooks/query/champion"
import Image from "next/image"
import React from "react"

interface BannedChampionProps {
  championList?: ChampionTypes[]
}

export const BannedChampion = ({ championList }: BannedChampionProps) => {
  return (
    <div className="space-y-[12px] flex flex-1 flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center px-[12px] space-y-[12px]">
        <div className="flex gap-x-[24px]">
          <div className="border-4 w-[110px] h-[110px]">
            {championList && (
              <Image
                src={championList[0].icon_image}
                width={110}
                height={110}
                alt=""
              />
            )}
          </div>
          <div className="border-4 w-[110px] h-[110px]">
            {championList && (
              <Image
                src={championList[1].icon_image}
                width={110}
                height={110}
                alt=""
              />
            )}
          </div>
          <div className="border-4 w-[110px] h-[110px]">
            {championList && (
              <Image
                src={championList[2].icon_image}
                width={110}
                height={110}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="flex gap-x-[24px]">
          <div className="border-4 w-[110px] h-[110px]">
            {championList && (
              <Image
                src={championList[3].icon_image}
                width={110}
                height={110}
                alt=""
              />
            )}
          </div>
          <div className="border-4 w-[110px] h-[110px]">
            {championList && (
              <Image
                src={championList[4].icon_image}
                width={110}
                height={110}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
