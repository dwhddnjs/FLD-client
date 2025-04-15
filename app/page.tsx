"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import { useRouter } from "next/navigation"
import { ChangeEvent, startTransition, useState } from "react"

export default function Home() {
  const router = useRouter()
  const { setTeamName, setTeamSide, setAddMatch } = useBanpickStore()

  const [inputValue, setInputValue] = useState({
    blue: "",
    red: "",
  })

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement>,
    type: "red" | "blue"
  ) => {
    setInputValue({
      ...inputValue,
      [type]: event.target.value,
    })
  }

  const onClickStart = () => {
    setTeamName("teamA", inputValue.blue)
    setTeamName("teamB", inputValue.red)
    setTeamSide("blue", inputValue.blue)
    setTeamSide("red", inputValue.red)
    setAddMatch()
    router.push("/banpick")
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[1000px] h-[1200px] bg-card rounded-4xl px-[48px] space-y-[48px]">
        <h2 className="text-center pt-[48px] text-[32px] font-bold">
          피어리스 밴픽 시뮬레이터
        </h2>
        <div className="flex flex-col space-y-[24px]">
          <div className="space-y-[12px]">
            <p>블루팀 이름</p>
            <Input
              className="h-[48px]"
              placeholder="팀 이름을 입력해주세요"
              onChange={(e) => onChangeInput(e, "blue")}
              value={inputValue.blue}
            />
          </div>
          <div className="space-y-[12px]">
            <p>레드팀 이름</p>
            <Input
              className="h-[48px]"
              placeholder="팀 이름을 입력해주세요"
              onChange={(e) => onChangeInput(e, "red")}
              value={inputValue.red}
            />
          </div>
        </div>
        <Button onClick={() => onClickStart()} className="w-full h-[64px]">
          시작하기
        </Button>
      </div>
    </div>
  )
}
