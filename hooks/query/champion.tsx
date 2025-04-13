"use client"

import { ResponseSuccessTypes } from "@/types/api-response-types"
import { useQuery } from "@tanstack/react-query"

export type ChampionTypes = {
  id: number
  champion_id: string
  key: string
  version: string
  name: string
  splash_image: string
  icon_image: string
  tags: string[]
}

export const useChampionList = () => {
  const { data, isLoading, isError, isPending } = useQuery<
    ResponseSuccessTypes<ChampionTypes[]>,
    Error
  >({
    queryKey: ["championList"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URI}/champion`!,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        const data = await response.json()
        return data
      } catch (error) {
        console.log("error: ", error)
        throw error
      }
    },
  })

  return {
    data,
    isLoading,
    isError,
    isPending,
  }
}
