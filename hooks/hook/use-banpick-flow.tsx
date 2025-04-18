"use client"

import { useEffect } from "react"
import { useBanpickStore } from "../zustand/use-banpick-store"

export const useBanpickFlow = () => {
  const { step, status, blue, red, setStep, setStatus } = useBanpickStore()

  console.log(
    "blue: ",
    blue.bannedChampionList.length,
    blue.pickedChampionList.length
  )
  console.log(
    "red: ",
    red.bannedChampionList.length,
    red.pickedChampionList.length
  )
  console.log("step: ", step)
  console.log("status: ", status)

  useEffect(() => {
    // 1페이즈 밴픽 3개 밴
    if (
      status === "ban" &&
      blue.bannedChampionList.length === 3 &&
      red.bannedChampionList.length === 3
    ) {
      setStatus("pick")
    }
    // 1페이즈 블루 1개 선택
    if (
      status === "pick" &&
      blue.pickedChampionList.length === 1 &&
      red.pickedChampionList.length === 0
    ) {
      setStep("red")
    }
    //1페이즈 레드 2개 선택
    if (
      status === "pick" &&
      blue.pickedChampionList.length === 1 &&
      red.pickedChampionList.length === 2
    ) {
      setStep("blue")
    }
    // 1페이즈 블루 2개 선택
    if (
      status === "pick" &&
      blue.pickedChampionList.length === 3 &&
      red.pickedChampionList.length === 2
    ) {
      setStep("red")
    }
    // 1페이즈 레드 1개 선택
    if (
      status === "pick" &&
      blue.pickedChampionList.length === 3 &&
      red.pickedChampionList.length === 3
    ) {
      setStatus("ban")
      setStep("red")
    }
    // 2페이즈 밴
    if (
      status === "ban" &&
      blue.bannedChampionList.length === 5 &&
      red.bannedChampionList.length === 5
    ) {
      setStatus("pick")
    }
    //  2페이즈 레드 1개 선택
    if (
      status === "pick" &&
      blue.pickedChampionList.length === 3 &&
      red.pickedChampionList.length === 4
    ) {
      setStep("blue")
    }
    // 2페이즈 레드 1개 선택
    if (
      status === "pick" &&
      blue.pickedChampionList.length === 5 &&
      red.pickedChampionList.length === 4
    ) {
      setStep("red")
    }
    // 끝
    if (
      status === "pick" &&
      blue.pickedChampionList.length === 5 &&
      red.pickedChampionList.length === 5
    ) {
      setStep("result")
    }
  }, [
    blue.bannedChampionList.length,
    red.bannedChampionList.length,
    blue.pickedChampionList.length,
    red.pickedChampionList.length,
    status,
    step,
    setStatus,
    setStep
  ])
}
