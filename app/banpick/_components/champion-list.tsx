import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChampionTypes, useChampionList } from "@/hooks/query/champion"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import React from "react"

export const ChampionList = () => {
  const { data } = useChampionList()
  const {
    step,
    status,
    setBanChampion,
    setSelectChampion,
    blue,
    red,

    setStep,
    setStatus,
  } = useBanpickStore()

  console.log("blue: ", blue)
  console.log("red: ", red)
  console.log("step: ", step)
  console.log("status: ", status)

  const onClickChampion = (item: ChampionTypes) => {
    // 1페이즈 밴픽 3개 밴
    if (
      blue.bannedChampionList.length === 3 &&
      red.bannedChampionList.length === 3
    ) {
      setStatus("pick")
    }
    // 1페이즈 블루 1개 선택
    if (
      blue.pickedChampionList.length === 1 &&
      red.pickedChampionList.length === 0
    ) {
      setStep("red")
    }
    // 1페이즈 레드 2개 선택
    if (
      blue.pickedChampionList.length === 1 &&
      red.pickedChampionList.length === 2
    ) {
      setStep("blue")
    }
    // 1페이즈 블루 2개 선택
    if (
      blue.pickedChampionList.length === 3 &&
      red.pickedChampionList.length === 2
    ) {
      setStep("blue")
    }
    // 1페이즈 레드 1개 선택
    if (
      blue.pickedChampionList.length === 3 &&
      red.pickedChampionList.length === 3
    ) {
      setStatus("ban")
      setStep("red")
    }

    // 2페이즈 밴
    if (
      blue.bannedChampionList.length === 5 &&
      red.bannedChampionList.length === 5
    ) {
      setStatus("pick")
    }

    // 2페이즈 레드 1개 선택
    if (
      blue.pickedChampionList.length === 3 &&
      red.pickedChampionList.length === 4
    ) {
      setStep("blue")
    }

    // 2페이즈 레드 1개 선택
    if (
      blue.pickedChampionList.length === 5 &&
      red.pickedChampionList.length === 4
    ) {
      setStep("red")
    }

    // 끝
    if (
      blue.pickedChampionList.length === 5 &&
      red.pickedChampionList.length === 5
    ) {
      setStep("result")
    }

    if (status === "ban") {
      if (step === "blue") {
        setStep("red")
        setBanChampion("blue", item)
      }
      if (step === "red") {
        setBanChampion("red", item)
        setStep("blue")
      }
    }
    if (status === "pick") {
      if (step === "blue") {
        setSelectChampion("blue", item)
      }
      if (step === "red") {
        setSelectChampion("red", item)
      }
    }
  }

  const onClickBanpick = (item: ChampionTypes) => {}

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
            className="w-fit min-w-[120px] min-h-[120px]  flex flex-col items-center "
          >
            <Image
              src={item.icon_image}
              width={100}
              height={100}
              alt="champion icon"
              className="border-4"
            />
            <p className="font-semiboldbold">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="pb-[24px] pt-[12px] flex justify-center">
        <Button className="w-[420px] h-[56px] text-xl font-extrabold rounded-4xl">
          챔피언 선택
        </Button>
      </div>
    </div>
  )
}
