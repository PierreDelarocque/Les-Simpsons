import { useState } from "react";
function Avatar({ image, firstName, lastName }) {
  const [count, setCount] =
    useState(0);
    const handleClick = () => {
      
      setCount(count + 1)
    }

  return (
    <section>
      {image}
      <figcaption>
        {firstName} {lastName}
      </figcaption>
      <p>{count}</p>
      <button onClick={handleClick}>🍩</button>
    

    </section>
  );
}
export default Avatar;

/*function Avatar(props) {
  return (
    <section>
      {props.image}
      <h1>
        {props.firstName} {props.lastName}
      </h1>
    </section>
  );
}
export default Avatar;*/
