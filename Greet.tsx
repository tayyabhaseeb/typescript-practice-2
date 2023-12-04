import React from "react";

// use type when building application and interface when building libraries
type GreetProp = {
  name: string;
};

// export default function Greet(props: GreetProp) {
//   return (
//     <div>
//       <h1>Hello {props.name} nice to meet you</h1>
//     </div>
//   );
// }

export default function Greet(props: GreetProp) {
  const { name } = props;
  return (
    <div>
      <h1>Hello {name} nice to meet you</h1>
    </div>
  );
}
