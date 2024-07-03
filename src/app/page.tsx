import Image from "next/image";
import Login from "./(auth)/Login";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Login />
    </main>
  );
}
