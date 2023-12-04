
type ComponentProp = {
    name: string;
    messages?: number; // this means this prop is optional and typescript d'not throw error if it is missing.
    loggedIn: boolean 
}


export default function OptionalProp(props: ComponentProp) {
    const {name , messages = 23 , loggedIn} = props
  return (
    <div>
      <h1>Welcome {name} ! you have {messages} messages unread and you are currently
        {loggedIn ? 'login' : 'logout'}
      </h1>
    </div>
  );
}
