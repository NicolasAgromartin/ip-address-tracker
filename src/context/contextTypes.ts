export type childrenProps = {
  children: React.ReactNode
}

export type ipInterface = {
  ip:string,
  lat:number,
  lon:number,
  location?:string,
  timezone?:string,
  isp?:string,
}

export type ipContextType = {
  dataIp:ipInterface,
  searchIp?: (entry:string) => void
}

