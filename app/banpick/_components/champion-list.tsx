import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useBanpickFlow } from "@/hooks/hook/use-banpick-flow"
import { ChampionTypes, useChampionList } from "@/hooks/query/champion"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

export const ChampionList = () => {
  const { data } = useChampionList()

  const { step, status, setBanChampion, setSelectChampion, setStep } =
    useBanpickStore()
  const [selectedChampion, setSelectedChampion] =
    useState<ChampionTypes | null>(null)

  console.log("selectedChampion: ", selectedChampion)

  const onClickBanpick = () => {
    if (!selectedChampion) {
      return
    }
    if (status === "ban") {
      if (step === "blue") {
        setStep("red")
        setBanChampion("blue", selectedChampion)
      }
      if (step === "red") {
        setStep("blue")
        setBanChampion("red", selectedChampion)
      }
    }
    if (status === "pick") {
      if (step === "blue") {
        setSelectChampion("blue", selectedChampion)
      }
      if (step === "red") {
        setSelectChampion("red", selectedChampion)
      }
    }
    setSelectedChampion(null)
  }

  const onClickChampion = (item: ChampionTypes) => {
    setSelectedChampion(item)
  }

  useBanpickFlow()

  return (
    <div className="flex-2 flex justify-center flex-col ">
      <div className="p-[24px] flex justify-between">
        <div className="space-x-[12px]">
          <Button size="icon" variant="ghost">
            <Image
              src="/images/top_icon_p.svg"
              width={48}
              height={48}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <Button size="icon" variant="ghost">
            <Image
              src="/images/jgl_icon_p.svg"
              width={48}
              height={48}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <Button size="icon" variant="ghost">
            <Image
              src="/images/mid_icon_p.svg"
              width={48}
              height={48}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <Button size="icon" variant="ghost">
            <Image
              src="/images/ad_icon_p.svg"
              width={48}
              height={48}
              alt="roster101 position_ad_icon"
            />
          </Button>
          <Button size="icon" variant="ghost">
            <Image
              src="/images/spt_icon_p.svg"
              width={48}
              height={48}
              alt="roster101 position_ad_icon"
            />
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="p-3  bg-accent rounded-tl-sm rounded-bl-sm">
            <SearchIcon size={18} className="" color="#c4c4c4" />
          </div>
          <Input
            placeholder="챔피언을 검색해주세요"
            className="w-[280px] bg-background border-0 rounded-[0] rounded-br-sm rounded-tr-sm h-full !text-lg"
          />
        </div>
      </div>
      <div className="px-[24px] grid grid-flow-row grid-cols-10 overflow-y-auto justify-items-center items-center gap-2">
        {data?.data?.map((item) => (
          <div
            key={item.id}
            onClick={() => onClickChampion(item)}
            className={twMerge(
              "w-fit min-w-[120px] min-h-[120px]  flex flex-col items-center"
            )}
          >
            <Image
              src={item.icon_image}
              width={100}
              height={100}
              alt="champion icon"
              className={twMerge(
                "border-4",
                selectedChampion?.id === item.id &&
                  (step === "red" ? "border-red-500" : "border-blue-500")
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
