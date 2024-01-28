import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layouts/Home";

import Footer from "./components/Footer";
import Profile from "./profile/Profile";
import Listings from "./components/Listings";
import CreateItem from "./layouts/CreateItem";
import SingleBid from "./layouts/SingleBid";

export default function Index() {
  return (
    <div>
      <body class="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/auctions" element={<Listings />} />
              <Route path="/create" element={<CreateItem />} />
              <Route path="/item/:id" element={<SingleBid />} />

            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </body>
    </div>
  );
}
