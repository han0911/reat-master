import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "../atoms";
function Main() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutes = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoustchange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value)
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={onMinutes}
      ></input>
      <input type="number" placeholder="Hours" value={hours} onChange={onHoustchange}></input>
    </div>
  );
}

export default Main;
