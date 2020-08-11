﻿using System.Threading.Tasks;
using System.Collections.Generic;
using SecureWebApp.Models.Views;

namespace SecureWebApp.Logic
{

    public interface IRepository
    {

        /// <summary>
        /// Return list of all available countries.
        /// </summary>
        /// <returns></returns>
        Task<List<CountryList>> ReturnCountryList();

        /// <summary>
        /// Return list of cities for given Country Id.
        /// </summary>
        /// <param name="AId"></param>
        /// <returns></returns>
        Task<List<CityList>> ReturnCityList(int AId);

    }

}
