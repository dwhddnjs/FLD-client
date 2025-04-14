import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChampionList } from "@/hooks/query/champion"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import React from "react"

export const ChampionList = () => {
  const { data } = useChampionList()
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
