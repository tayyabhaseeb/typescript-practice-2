type ComponentProp = {
  array: {
    name: string;
    age: number;
  }[];
  
};

export default function ArrayProp(props: ComponentProp) {
  const { array } = props;
  return (
    <div>
      {array.map((obj) => (
        <>
          <span>{obj.name}</span>
          <span>{obj.age}</span>
        </>
      ))}
    </div>
  );
}
