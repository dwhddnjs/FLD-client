'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useBanpickFlow } from "@/hooks/hook/use-banpick-flow"
import { ChampionTypes, useChampionList } from "@/hooks/query/champion"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import { positionChampionList } from "@/lib/constant"
import { searchByInitial } from "@/lib/function"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"


export const ChampionList = () => {
  const { data } = useChampionList()
  const { step, status, setBanChampion, selectedCurrentChampion, setSelectChampion, setSelectedCurrentChampion, setStep, red, blue } =
    useBanpickStore()
  const [searchQuery, setSearchQuery] = useState("")
  const currentSelectedChampionList = [...red.bannedChampionList, ...blue.bannedChampionList, ...red.pickedChampionList, ...blue.pickedChampionList]
  const [tab, setTab] = useState<"top" | "jgl" | "mid" | "ad" | "spt" | "all">("all")

  

  const findChampion = (item: ChampionTypes) => {
    return currentSelectedChampionList.find((champion) => champion.id === item.id)
  }

  const onClickTab = (newTab: "top" | "jgl" | "mid" | "ad" | "spt" | "all") => {
    
    if(tab === newTab) {
      setTab("all")
      return
    }
    setTab(newTab)
  }

  const filteredChampions = data?.data?.filter((champion) => {
    const searchLower = searchQuery.toLowerCase()
    const nameLower = champion.name.toLowerCase()
    
    if (tab === "top") {
      return positionChampionList.top.includes(champion.name)
    }
    if (tab === "jgl") {
      return positionChampionList.jgl.includes(champion.name)
    } 
    if (tab === "mid") {
      return positionChampionList.mid.includes(champion.name)
    }
    if (tab === "ad") {
      return positionChampionList.ad.includes(champion.name)
    } 
    if (tab === "spt") {
      return positionChampionList.spt.includes(champion.name)
    }

    if (searchQuery.length === 1 && /[ㄱ-ㅎ]/.test(searchQuery)) {
    
      return searchByInitial(champion.name, searchQuery)
    }
    
    return nameLower.includes(searchLower)
  }) || []

  const onClickBanpick = () => {
    if (!selectedCurrentChampion) {
      return
    }
    if (status === "ban") {
      if (step === "blue") {
        setStep("red")
        setBanChampion("blue", selectedCurrentChampion)
      }
      if (step === "red") {
        setStep("blue")
        setBanChampion("red", selectedCurrentChampion)
      }
    }
    if (status === "pick") {
      if (step === "blue") {
        setSelectChampion("blue", selectedCurrentChampion)
      }
      if (step === "red") {
        setSelectChampion("red", selectedCurrentChampion)
      }
    }
    setSelectedCurrentChampion(null)
    setSearchQuery("")
  }

  const onClickChampion = (item: ChampionTypes) => {
    const findChampion = currentSelectedChampionList.find((champion) => champion.id === item.id)
    if (findChampion) {
      return
    }

    setSelectedCurrentChampion(item)
  }

  return (
    <div className="flex-3 flex justify-center flex-col h-full">
      <div className="p-[24px] flex justify-between">
        <div className="space-x-[18px] flex-row flex ">
          <div className="w-fit">
          <Button size="icon" variant="ghost" onClick={() => onClickTab("top")}>
            <Image
              src="/images/top_icon_p.svg"
              width={64}
              height={64}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <div className={twMerge(tab === "top" && "w-full h-[4px] bg-primary ")} />
          </div>
          <div className="w-fit">
          <Button size="icon" variant="ghost" onClick={()=> onClickTab("jgl")}>
            <Image  
              src="/images/jgl_icon_p.svg"
              width={64}
              height={64}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <div className={twMerge(tab === "jgl" && "w-full h-[4px] bg-primary ")} />
          </div>
          <div className="w-fit">
          <Button size="icon" variant="ghost" onClick={()=> onClickTab("mid")}>
            <Image
              src="/images/mid_icon_p.svg"
              width={64}
              height={64}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <div className={twMerge(tab === "mid" && "w-full h-[4px] bg-primary ")} />
          </div>
          <div className="w-fit">
          <Button size="icon" variant="ghost" onClick={()=> onClickTab("ad")}>
            <Image
              src="/images/ad_icon_p.svg"
              width={64}
              height={64}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <div className={twMerge(tab === "ad" && "w-full h-[4px] bg-primary ")} />
          </div>
          <div className="w-fit">
          <Button size="icon" variant="ghost" onClick={()=> onClickTab("spt")}>
            <Image
              src="/images/spt_icon_p.svg"
              width={64}
              height={64}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <div className={twMerge(tab === "spt" && "w-full h-[4px] bg-primary ")} />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="p-3 bg-accent rounded-tl-sm rounded-bl-sm">
            <SearchIcon size={18} className="" color="#c4c4c4" />
          </div>
          <Input
            placeholder="챔피언을 검색해주세요"
            className="w-[280px] bg-background border-0 rounded-[0] rounded-br-sm rounded-tr-sm h-full !text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setTab("all")}
          />
        </div>
      </div>
      <div className="px-[24px] grid auto-rows-min grid-cols-14 overflow-y-auto justify-items-center gap-y-2 gap-x-2 h-[calc(100vh-300px)]">
        {filteredChampions.map((item) => (
          <div
            key={item.id}
            onClick={() => onClickChampion(item)}
            className={twMerge(
              "w-fit min-w-[120px] flex flex-col items-center"
            )}
          >
            <Image
              src={item.icon_image}
              width={100}
              height={100}
              alt="champion icon"
              className={twMerge(
                "border-4",
                selectedCurrentChampion?.id === item.id &&
                  (step === "red" ? "border-red-500" : "border-blue-500"),
                findChampion(item) && "grayscale"
              )}
            />
            <p className="font-semiboldbold">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="pb-[24px] pt-[12px] flex justify-center">
        <Button
          onClick={() => onClickBanpick()}
          className={twMerge(
            "w-[420px] h-[64px] text-xl font-extrabold rounded-4xl text-white",
            step === "red" && `bg-red-500 hover:bg-red-600`,
            step === "blue" && `bg-blue-500 hover:bg-blue-600`
          )}
        >
          챔피언 선택
        </Button>
      </div>
    </div>
  )
}
