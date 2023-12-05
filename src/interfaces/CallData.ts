export interface CallData {
  url: string
  method?: "POST" | "PUT" | "PATCH" | "DELETE" | "GET"
  data?: Object
  params?: Object
}
