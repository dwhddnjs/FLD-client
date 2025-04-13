// export type ErrorMessageTypes = {
//   message: string
//   error: string
// }

export type ResponseSuccessTypes<T> = {
  success: boolean
  status: number
  data: T
  path?: string
  message?: Error
}
