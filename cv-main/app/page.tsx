import Image from "next/image";

export default function Home() {
  return (
    <div>
      Hello world!
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  return (
    <div>
      This is the child component! YAAAAAAAAAAAAAAAAAAAAAY
    </div>
  )
}