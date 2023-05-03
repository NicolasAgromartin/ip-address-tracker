import { createContext, useState, useEffect, useContext } from 'react';
import { childrenProps, ipInterface, ipContextType } from './contextTypes.ts';
import { getLocation } from '../services/ipify.service.ts';

const initialValue:ipContextType = { 
  dataIp:{ 
    ip:'', 
    lat:0,
    lon:0,
    location:'',
    timezone:'',
    isp:'',
  }
}

const IpContext = createContext<ipContextType>(initialValue);

export function IpContextProvider({children}:childrenProps) {

  const [ dataIp, setIp ] = useState<ipInterface>(initialValue.dataIp);

  // first load
  useEffect(() => {
    fetch(`https://api.ipify.org?format=json`)
      .then( res => res.json() )
      .then( data => getLocation(setIp, data.ip) )
  },[]);

  // function used when form is submited
  function searchIp(entry:string) {
    entry && getLocation(setIp, entry);
  }


  return (
    <IpContext.Provider value={{dataIp, searchIp}}>
      { children }  
    </IpContext.Provider>
  )
}

export function useIpContext(){
  return useContext(IpContext)
}