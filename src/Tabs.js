export default function Tabs(props) {
  return (
    <div className="flex p-2 gap-2 justify-center items-center hover:bg-reddit-hover ">
      {props.img}
      <h1 className="text-white text-md hover:rounded-full ">{props.name}</h1>
    </div>
  );
}
