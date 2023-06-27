import {Search_Dto} from '@/models'
import {Weather_Controller} from '@/controllers'
import { AxiosResponse } from 'axios';
import {Http} from './http/http'
import {REACT_API_SEARCH_WEATHER, REACT_API_FORECAST_WEATHER} from '@env'

class Weather_Service implements Weather_Controller {
    forecast = async (city: string,days:number): Promise<AxiosResponse<any, any>> => {
        return await this.http.get(
            `${REACT_API_FORECAST_WEATHER}&q=${city}&days=${days}`,
            this.http.header()
        )
    }
    search = async(city: string): Promise<AxiosResponse<Search_Dto[]>> =>{
        return await this.http.get(
            `${REACT_API_SEARCH_WEATHER}&q=${city}`,
            this.http.header()
        )
    }
  
    public static get_service():Weather_Service{
        if (this.service === undefined) this.service = new Weather_Service();
        return this.service;
    }
    
    private static service:Weather_Service;
    private http:Http = new Http();
}

export {Weather_Service}