"use client"

import { create } from "zustand"
import { ChampionTypes } from "../query/champion"

type BanpickStoreTypes = {
  step: "red" | "blue" | "result"
  teamA: {
    score: number
    fearlessBannedList: Array<ChampionTypes & { id: number }>
  }
  teamB: {
    score: number
    fearlessBannedList: Array<ChampionTypes & { id: number }>
  }
  blue: {
    team: string
    bannedChampionList: Array<ChampionTypes & { id: number }>
    pickedChampionList: Array<ChampionTypes & { id: number }>
  }
  red: {
    team: string
    bannedChampionList: Array<ChampionTypes & { id: number }>
    pickedChampionList: Array<ChampionTypes & { id: number }>
  }
  setBanChampion: (type: "red" | "blue", champion: ChampionTypes) => void
  setTeamName: (type: "red" | "blue", name: string) => void
  setSelectChampion: (type: "red" | "blue", champion: ChampionTypes) => void
}

export const useBanpickStore = create<BanpickStoreTypes>((set) => ({
  step: "blue",
  teamA: {
    score: 0,
    fearlessBannedList: [],
  },
  teamB: {
    score: 0,
    fearlessBannedList: [],
  },
  blue: {
    team: "TEAM_A",
    bannedChampionList: [],
    pickedChampionList: [],
  },
  red: {
    team: "TEAM_B",
    bannedChampionList: [],
    pickedChampionList: [],
  },

  setBanChampion: (type, champion) =>
    set((prev) => {
      return {
        ...prev,
        [type]: {
          ...prev[type],
          bannedChampionList: [...prev[type].bannedChampionList, champion],
        },
      }
    }),
  setSelectChampion: (type, champion) =>
    set((prev) => {
      return {
        ...prev,
        [type]: {
          ...prev[type],
          pickedChampionList: [...prev[type].bannedChampionList, champion],
        },
      }
    }),

  setTeamName: (type, name) =>
    set((prev) => {
      return {
        ...prev,
        [type]: {
          ...prev[type],
          team: name,
        },
      }
    }),
}))
