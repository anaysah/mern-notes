import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8 w-full h-min">
      <NoteCard
        title="The Magical Bow"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        date="24/03/2023"
      />
      <NoteCard
        title="The Power"
        content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        date="24/03/2023"
      />
    </div>
  );
};

export default Home;
