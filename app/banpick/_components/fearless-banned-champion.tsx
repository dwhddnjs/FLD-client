'use client'

import { ChampionTypes } from "@/hooks/query/champion"
import Image from "next/image"
import React from "react"
import { twMerge } from "tailwind-merge"

interface FearlessBannedChampionProps {
  type: "blue" | "red"
  championList?: ChampionTypes[]
}

export const FearlessBannedChampion = ({
  type,
  championList,
}: FearlessBannedChampionProps) => {
  return (
    <div className="flex flex-4 flex-col">
      <div
        className={twMerge(
          "flex-1 bg-blue-500 flex items-center justify-between px-[32px]",
          type === "red" && "bg-red-500"
        )}
      >
        {type === "red" ? (
          <>
            <p className="text-[32px] font-extrabold">0</p>
            <p className="text-[36px] font-extrabold">RED TEAM</p>
          </>
        ) : (
          <>
            <p className="text-[32px] font-extrabold">BLUE TEAM</p>
            <p className="text-[36px] font-extrabold">0</p>
          </>
        )}
      </div>
      <div className={"flex-2 flex justify-center items-center flex-col gap-y-[8px] "}>
        <div className="flex gap-x-[12px] w-full justify-center">
          <div className="flex gap-x-[8px] flex-col gap-y-[4px]">
            <p className="font-bold">1SET</p>
            <div className="flex flex-row  gap-x-[8px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-[48px] h-[48px] flex items-center justify-center"
                >
                  {championList && championList[i] ? (
                    <Image
                      src={championList[i].icon_image}
                      width={48}
                      height={48}
                      alt=""
                    />
                  ) : (
                    <div className="w-[48px] h-[48px] bg-card " />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-[8px] flex-col gap-y-[4px]">
            <p className="font-bold">2SET</p>
            <div className="flex flex-row  gap-x-[8px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-[48px] h-[48px] flex items-center justify-center"
                >
                  {championList && championList[i] ? (
                    <Image
                      src={championList[i].icon_image}
                      width={48}
                      height={48}
                      alt=""
                    />
                  ) : (
                    <div className="w-[48px] h-[48px] bg-card " />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-x-[12px] w-full justify-center">
          <div className="flex gap-x-[8px] flex-col gap-y-[4px]">
            <p className="font-bold">3SET</p>
            <div className="flex flex-row  gap-x-[8px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-[48px] h-[48px] flex items-center justify-center"
                >
                  {championList && championList[i] ? (
                    <Image
                      src={championList[i].icon_image}
                      width={48}
                      height={48}
                      alt=""
                    />
                  ) : (
                    <div className="w-[48px] h-[48px] bg-card " />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-[8px] flex-col gap-y-[4px]">
            <p className="font-bold">4SET</p>
            <div className="flex flex-row  gap-x-[8px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-[48px] h-[48px] flex items-center justify-center"
                >
                  {championList && championList[i] ? (
                    <Image
                      src={championList[i].icon_image}
                      width={48}
                      height={48}
                      alt=""
                    />
                  ) : (
                    <div className="w-[48px] h-[48px] bg-card " />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
