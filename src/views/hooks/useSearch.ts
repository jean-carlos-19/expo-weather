import { useState, useCallback, useEffect } from "react";
import { Weather_Service } from '@/services'
import { debounce } from 'lodash'

const service: Weather_Service = Weather_Service.get_service();

const useSearch = () => {
  const [loading, set_loading] = useState(false);
  const [search, set_search] = useState();
  const [show_search, set_show_search] = useState(false);

  const toogle_search = () => {
    set_show_search(!show_search);
  };

  return { show_search, search, loading, toogle_search,set_loading, };
};
export { useSearch };
