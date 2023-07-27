import { FC } from "react";

interface GreetProps {
  name?: string;
}

const Greet: FC<GreetProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello there {name}</h1>
    </div>
  );
};
export default Greet;
