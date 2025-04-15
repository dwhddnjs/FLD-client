"use client"

import { useChampionList } from "@/hooks/query/champion"
import React from "react"
import { ChampionList } from "./_components/champion-list"
import { PickChampion } from "./_components/picked-champion"
import { BannedChampion } from "./_components/banned-champion"
import { FearlessBannedChampion } from "./_components/fearless-banned-champion"
import { PickCountTimmer } from "./_components/pick-count-timmer"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"

function BanpickPage() {
  const store = useBanpickStore()
  const { data } = useChampionList()
  // const pickedChampions1 = data && [...data?.data].slice(0, 5)
  // const pickedChampions2 = data && [...data?.data].slice(5, 10)
  // const banedChampions1 = data && [...data?.data].slice(10, 15)
  // const banedChampions2 = data && [...data?.data].slice(15, 20)
  // const banedChampions3 = data && [...data?.data].slice(20, 25)
  // const banedChampions4 = data && [...data?.data].slice(25, 30)

  if (!data) {
    return null
  }

  return (
    <div className="h-full bg-background relative">
      {/* header */}
      <div className="w-full h-[280px]  flex absolute top-[0] flex-row justify-between">
        {/*  블루 밴된 챔피언 */}
        <BannedChampion />
        {/* 세트 헤더 */}
        <div className="flex flex-2">
          <FearlessBannedChampion type="blue" />
          <PickCountTimmer />
          <FearlessBannedChampion type="red" />
        </div>
        {/*  레드 밴된 챔피언 */}
        <BannedChampion />
      </div>
      {/* center */}
      <div className="w-full  flex absolute left-0 right-0 top-[280px] bottom-[0]">
        {/* left */}
        <PickChampion />
        {/* main */}
        <ChampionList />
        {/* right */}
        <PickChampion type="right" />
      </div>
    </div>
  )
}

export default BanpickPage
