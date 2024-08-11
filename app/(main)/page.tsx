import { Hero } from "@/components/Hero";

const HomePage = () => {
  return (
    <div className="h-screen flex w-full items-center justify-center p-4">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl text-center font-extrabold">USELESS INFO</h1>
          <h2 className="text-muted-foreground">
            The most useless league infos
          </h2>
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
