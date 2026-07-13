import Navbar from "@/components/navigation/navbar";

const RooyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RooyLayout;
