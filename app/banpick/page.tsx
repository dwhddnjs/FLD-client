"use client"

import { useChampionList } from "@/hooks/query/champion"
import React, { useState } from "react"
import { ChampionList } from "./_components/champion-list"
import { PickChampion } from "./_components/picked-champion"
import { BannedChampion } from "./_components/banned-champion"
import { FearlessBannedChampion } from "./_components/fearless-banned-champion"
import { PickCountTimmer } from "./_components/pick-count-timmer"
import { useBanpickFlow } from "@/hooks/hook/use-banpick-flow"
import { ResultModal } from "./_components/result-modal"


function BanpickPage() {
  const { data } = useChampionList()

  useBanpickFlow()

  
  if (!data) {
    return null
  }
  
  return (
    <div className="h-full bg-background relative">
      {/* header */}
      <div className="w-full h-[280px]  flex absolute top-[0] flex-row justify-between">
        {/*  블루 밴된 챔피언 */}
        <BannedChampion type="blue" />
        {/* 세트 헤더 */}
        <div className="flex flex-3 border-b-4 border-card">
          <FearlessBannedChampion type="blue" />
          <PickCountTimmer />
          <FearlessBannedChampion type="red" />
        </div>
        {/*  레드 밴된 챔피언 */}
        <BannedChampion type="red" />
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
      <ResultModal />

    </div>
  )
}

export default BanpickPage
