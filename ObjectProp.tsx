type ComponentProp = {
  bio: {
    name: string;
    age: number;
    location: string;
  };
};
export default function ObjectProp(props: ComponentProp) {
  const { name, age, location } = props.bio;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h4>{location}</h4>
    </div>
  );
}
