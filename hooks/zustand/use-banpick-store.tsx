"use client"

import { create } from "zustand"
import { ChampionTypes } from "../query/champion"

type BanpickStoreTypes = {
  match: number
  status: "ban" | "pick"
  step: "red" | "blue" | "result"
  selectedCurrentChampion: ChampionTypes | null
  teamA: {
    name: string
    score: number
    fearlessBannedList: Array<ChampionTypes & { id: number }>
  }
  teamB: {
    name: string
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
  setTeamSide: (type: "red" | "blue", name: string) => void
  setTeamName: (type: "teamA" | "teamB", name: string) => void
  setSelectChampion: (type: "red" | "blue", champion: ChampionTypes) => void
  setAddMatch: () => void
  setStep: (type: "red" | "blue" | "result") => void
  setStatus: (type: "ban" | "pick") => void
  setSelectedCurrentChampion: (champion: ChampionTypes | null) => void
}

export const useBanpickStore = create<BanpickStoreTypes>((set) => ({
  match: 0,
  step: "blue",
  status: "ban",
  selectedCurrentChampion: null,
  teamA: {
    name: "",
    score: 0,
    fearlessBannedList: [],
  },
  teamB: {
    name: "",
    score: 0,
    fearlessBannedList: [],
  },
  blue: {
    team: "",
    bannedChampionList: [],
    pickedChampionList: [],
  },
  red: {
    team: "",
    bannedChampionList: [],
    pickedChampionList: [],
  },

  setSelectedCurrentChampion: (champion) =>
    set((prev) => ({
      ...prev,
      selectedCurrentChampion: champion,
    })),

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
          pickedChampionList: [...prev[type].pickedChampionList, champion],
        },
      }
    }),

  setTeamSide: (type, name) =>
    set((prev) => {
      return {
        ...prev,
        [type]: {
          ...prev[type],
          team: name,
        },
      }
    }),

  setAddMatch: () =>
    set((prev) => ({
      ...prev,
      match: prev.match + 1,
    })),

  setTeamName: (type, name) =>
    set((prev) => {
      return {
        ...prev,
        [type]: {
          ...prev[type],
          name,
        },
      }
    }),

  setStep: (type: "red" | "blue" | "result") =>
    set((prev) => ({
      ...prev,
      step: type,
    })),

  setStatus: (type) =>
    set((prev) => {
      return {
        ...prev,
        status: type,
      }
    }),
}))
