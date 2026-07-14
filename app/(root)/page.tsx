import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log("Session:", session);
  return (
    <div>
      <h1>Create a Next.js App</h1>
    </div>
  );
};

export default Home;
