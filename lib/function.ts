export const getInitialConsonant = (str: string) => {
    const firstChar = str.charCodeAt(0)
    if (firstChar < 0xAC00 || firstChar > 0xD7A3) return str[0]
    const firstConsonant = Math.floor((firstChar - 0xAC00) / 28 / 21)
    const initialConsonants = [
      'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ]
    return initialConsonants[firstConsonant]
  }
  
  // 초성 검색 함수
  export const searchByInitial = (name: string, search: string) => {
    const initial = getInitialConsonant(name)
    return initial === search
  }