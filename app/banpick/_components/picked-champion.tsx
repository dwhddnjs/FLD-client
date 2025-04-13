import { ChampionTypes } from "@/hooks/query/champion"
import Image from "next/image"
import React from "react"
import { twMerge } from "tailwind-merge"

interface PickChampionProps {
  pickedChampions?: ChampionTypes[]
  type?: "left" | "right"
}

export const PickChampion = ({
  pickedChampions,
  type = "left",
}: PickChampionProps) => {
  return (
    <div className="flex flex-1 flex-col">
      {pickedChampions?.map((item) => (
        <div className="flex-1  relative overflow-hidden" key={item.id}>
          <Image
            src={item.splash_image}
            fill
            className="object-cover object-top scale-120 "
            alt="pick champion"
          />
          <p
            className={twMerge(
              "z-10 absolute text-2xl font-extrabold bottom-4 right-4",
              type === "right" && "left-4"
            )}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  )
}
