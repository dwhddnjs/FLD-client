'use client'

import { ChampionTypes } from "@/hooks/query/champion"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import Image from "next/image"
import React from "react"
import { twMerge } from "tailwind-merge"

interface PickChampionProps {  
  type?: "left" | "right"
}

export const PickChampion = ({
  type = "left",
}: PickChampionProps) => {

  const store = useBanpickStore()
  const championList = type === "left" ? store.blue.pickedChampionList : store.red.pickedChampionList


  return (
    <div className="flex flex-1 flex-col">
      {[...Array(5)].map((_, index) => {
        const item = championList?.[index]
        return (
          <div className="flex-1 relative overflow-hidden" key={index}>
            {item?.splash_image ? (
              <Image
                src={item.splash_image}
                fill
                className="object-cover object-top scale-120"
                alt="pick champion"
              />
            ) : (
              <div className="w-full h-full  border-b-4 border-r-4 border-l-4 border-card" />
            )}
            <p
              className={twMerge(
                "z-10 absolute text-2xl font-extrabold bottom-4 right-4 ",
                type === "right" && "left-4"
              )}
            >
              {item?.name || `Player ${index + 1}`}
            </p>
          </div>
        )
      })}
    </div>
  )
}
