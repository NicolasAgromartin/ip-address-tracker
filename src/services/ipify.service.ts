const apiKey = 'at_xbDovPsT5zKRv91kUNNRZAf5MIHi9';
import { Dispatch, SetStateAction } from "react";
import { ipInterface } from "../context/contextTypes.ts";

export async function getLocation(setIp:Dispatch<SetStateAction<ipInterface>>, entry:string) {

  await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}&ipAddress=${entry}`)
    .then(res => res.json())
    .then(data => setIp(createAddaptedData(data)))

}
// adapter that set the api call response in a ordenate way
function createAddaptedData(data:any) {
  const addaptedData:ipInterface = {
    ip:data.ip,
    lat:data.location.lat,
    lon:data.location.lng,
    location:`${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
    timezone:data.location.timezone,
    isp:data.isp,
  }
  return addaptedData
}