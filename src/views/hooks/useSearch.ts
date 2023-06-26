import { useState } from "react";

const useSearch = () => {
  const [search, set_search] = useState();
  const [show_search, set_show_search] = useState(false);

  const toogle_search = () => {
    set_show_search(!show_search);
  };

  const hand_location = (location: string) => {
    console.log("Location: " + location);
  };

  return { show_search, search, toogle_search, hand_location };
};
export { useSearch };
