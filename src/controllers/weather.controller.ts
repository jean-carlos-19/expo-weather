import { AxiosResponse } from 'axios';
import { Search_Dto, Forecast_Dto } from 'src/models/dto';

interface Weather_Controller {
 search(city: string): Promise<AxiosResponse<Search_Dto[]>>;
 forecast(city: string, days: number): Promise<AxiosResponse<any>>;
}
export type { Weather_Controller };
