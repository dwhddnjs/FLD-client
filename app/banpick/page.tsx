"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChampionList } from "@/hooks/query/champion"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

import React from "react"
import { ChampionList } from "./_components/champion-list"
import { PickChampion } from "./_components/picked-champion"
import { BannedChampion } from "./_components/banned-champion"
import { FearlessBannedChampion } from "./_components/fearless-banned-champion"
import { PickCountTimmer } from "./_components/pick-count-timmer"

function BanpickPage() {
  const { data } = useChampionList()
  const pickedChampions1 = data && [...data?.data].slice(0, 5)
  const pickedChampions2 = data && [...data?.data].slice(5, 10)
  const banedChampions1 = data && [...data?.data].slice(10, 15)
  const banedChampions2 = data && [...data?.data].slice(15, 20)
  const banedChampions3 = data && [...data?.data].slice(20, 25)
  const banedChampions4 = data && [...data?.data].slice(25, 30)

  if (!data) {
    return null
  }

  return (
    <div className="h-full bg-background relative">
      {/* header */}
      <div className="w-full h-[280px]  flex absolute top-[0] flex-row justify-between">
        {/*  블루 밴된 챔피언 */}
        <BannedChampion championList={banedChampions1} />
        {/* 세트 헤더 */}
        <div className="flex flex-2">
          <FearlessBannedChampion type="blue" championList={banedChampions3} />
          <PickCountTimmer />
          <FearlessBannedChampion type="red" championList={banedChampions4} />
        </div>
        {/*  레드 밴된 챔피언 */}
        <BannedChampion championList={banedChampions2} />
      </div>
      {/* center */}
      <div className="w-full  flex absolute left-0 right-0 top-[280px] bottom-[0]">
        {/* left */}
        <PickChampion pickedChampions={pickedChampions1} />
        {/* main */}
        <ChampionList />
        {/* right */}
        <PickChampion pickedChampions={pickedChampions2} type="right" />
      </div>
    </div>
  )
}

export default BanpickPage
