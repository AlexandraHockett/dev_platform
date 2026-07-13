import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

const Home = async () => {
  const session = await auth();

  console.log("Session:", session);
  return (
    <div>
      <h1>Create a Next.js App</h1>

      <form
        className="px-10 pt-25"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit" variant="glow" size="lg">
          Log out
        </Button>
      </form>
    </div>
  );
};

export default Home;
