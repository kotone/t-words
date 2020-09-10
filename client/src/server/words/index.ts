import http from '../../utils/http'

export const addWords = (words: string) => {
  return http('api_words_save', {
    words
  })
}
