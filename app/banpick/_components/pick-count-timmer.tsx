'use client'

import { useBanpickStore } from "@/hooks/zustand/use-banpick-store"
import React from "react"

export const PickCountTimmer = () => {
  const { match } = useBanpickStore()
  return (
    <div className="flex-2 flex flex-col justify-center items-center pt-[24px]">
      <p className="text-[32px] font-bold">{`Match ${match}`}</p>
      <p className="text-[120px] font-bold">60</p>
    </div>
  )
}
