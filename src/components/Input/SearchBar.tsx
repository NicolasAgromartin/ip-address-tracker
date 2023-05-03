// css
import './css/search-bar.css';
// icon
import arrow from './icons/icon-arrow.svg';
// context
import { useIpContext } from '../../context/IpContextProvider.tsx';
import { useRef } from 'react';

export default function SearchBar() {

  const { searchIp } = useIpContext();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const entry = inputRef.current?.value ?? '';
    searchIp&& searchIp(entry);
  }

  
  return (
    <form className='search-bar' onSubmit={(e) => handleSubmit(e)}>
      <input className='input' placeholder="Search for any IP address or domain" ref={inputRef} />
      <button type='submit' title='search' className='submit-button'>
        <img src={arrow} alt="" />
      </button> 
    </form>
  )
}
