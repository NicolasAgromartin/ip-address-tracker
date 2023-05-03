// css
import './css/display.css';
// context
import { useIpContext } from '../../context/IpContextProvider.tsx';

export default function Display() {

  const { dataIp } = useIpContext();

  return (
    <div className="display">
      <div>
        <h4>Ip address</h4>
        <p> { dataIp && dataIp.ip } </p>
      </div>
      <div>
        <h4>Location</h4>
        <p> {dataIp && dataIp.location} </p>
      </div>
      <div>
        <h4>Timezone</h4>
        <p> {dataIp && dataIp.timezone} </p>
      </div>
      <div>
        <h4>Isp</h4>
        <p> {dataIp && dataIp.isp} </p>
      </div>
    </div>
  )
}
