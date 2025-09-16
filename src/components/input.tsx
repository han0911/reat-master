import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const V = event.currentTarget.value;
    setValue(V);
  };
  const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('hello')
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          value={value}
          onChange={onChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
export default Input;
