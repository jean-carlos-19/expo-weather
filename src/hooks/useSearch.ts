import { useState, useCallback, useEffect } from 'react';
import { Weather_Service } from '@/services';
import { debounce } from 'lodash';

const service: Weather_Service = Weather_Service.get_service();

const useSearch = () => {
 const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState();
 const [showSearch, setShowSearch] = useState(false);

 const toogleSearch = () => {
  setShowSearch(!showSearch);
 };

 return { showSearch, search, loading, toogleSearch, setLoading };
};
export { useSearch };
