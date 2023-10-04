import ListingsSaved from "./ListingsSaved";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const SavedListings = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center pt-20">
        <ListingsSaved />
      </div>
      <Footer />
    </>
  );
};

export default SavedListings;
