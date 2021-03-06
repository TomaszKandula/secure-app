﻿using System;
using System.Globalization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using RazorWebApp.Logger;
using RazorWebApp.Shared;
using RazorWebApp.Exceptions;
using RazorWebApp.Shared.Dto;
using RazorWebApp.LogicContext;
using RazorWebApp.Shared.Resources;

namespace RazorWebApp.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [ResponseCache(CacheProfileName = "ResponseCache")]
    public class AjaxController : Controller
    {
        private readonly ILogicContext FLogicContext;
        
        private readonly IAppLogger FAppLogger;

        public AjaxController(ILogicContext ALogicContext, IAppLogger AAppLogger) 
        {
            FLogicContext = ALogicContext;
            FAppLogger = AAppLogger;
        }

        /// <summary>
        /// Endpoint validating supplied email address. It checks format and email domain, and if it is already registered in database.
        /// </summary>
        /// <param name="AEmailAddress"></param>
        /// <returns></returns>
        // GET api/v1/ajax/validation/{aemailaddress}/
        [ValidateAntiForgeryToken]
        [HttpGet("validation/{aemailaddress}")]
        public async Task<IActionResult> CheckEmailAsync([FromRoute] string AEmailAddress)
        {
            try 
            {
                if (!FLogicContext.Emails.IsEmailAddressCorrect(AEmailAddress)) 
                {
                    FAppLogger.LogWarn(ErrorCodes.EMAIL_ADDRESS_MALFORMED);
                    return StatusCode(400, new ErrorHandlerDto 
                    {
                        ErrorCode = nameof(ErrorCodes.EMAIL_ADDRESS_MALFORMED),
                        ErrorDesc = ErrorCodes.EMAIL_ADDRESS_MALFORMED
                    });
                }
               
                if (await FLogicContext.Emails.IsEmailAddressExist(AEmailAddress)) 
                {
                    FAppLogger.LogWarn(ErrorCodes.EMAIL_ALREADY_EXISTS);
                    return StatusCode(400, new ErrorHandlerDto 
                    {
                        ErrorCode = nameof(ErrorCodes.EMAIL_ALREADY_EXISTS),
                        ErrorDesc = ErrorCodes.EMAIL_ALREADY_EXISTS
                    });
                }

                if (await FLogicContext.Emails.IsEmailDomainExist(AEmailAddress)) 
                    return StatusCode(204);
                
                FAppLogger.LogWarn(ErrorCodes.EMAIL_DOMAIN_NOT_EXISTS);
                return StatusCode(400, new ErrorHandlerDto 
                {
                    ErrorCode = nameof(ErrorCodes.EMAIL_DOMAIN_NOT_EXISTS),
                    ErrorDesc = ErrorCodes.EMAIL_DOMAIN_NOT_EXISTS
                });
            } 
            catch (Exception LException)
            {
                FAppLogger.LogFatality(ControllerException.Handle(LException).ErrorDesc);
                return StatusCode(500, ControllerException.Handle(LException));
            }
        }

        /// <summary>
        /// Endpoint returning list of countries in JSON format.
        /// </summary>
        /// <returns></returns>
        // GET api/v1/ajax/countries/
        [ValidateAntiForgeryToken]
        [HttpGet("countries")]
        public async Task<IActionResult> ReturnCountryAsync()
        {
            try
            {
                return StatusCode(200, new ReturnCountryListDto 
                { 
                    Countries = await FLogicContext.Repository.ReturnCountryList() 
                });
            }
            catch (Exception LException)
            {
                FAppLogger.LogFatality(ControllerException.Handle(LException).ErrorDesc);
                return StatusCode(500, ControllerException.Handle(LException));
            }
        }

        /// <summary>
        /// Endpoint returning list of cities for given Country Id in JSON format.
        /// </summary>
        /// <param name="CountryId"></param>
        /// <returns></returns>
        // GET api/v1/ajax/cities/?countryid={id}
        [ValidateAntiForgeryToken]
        [HttpGet("cities")]
        // ReSharper disable once InconsistentNaming for query string
        public async Task<IActionResult> ReturnCityAsync([FromQuery] int CountryId) 
        {
            try 
            {
                return StatusCode(200, new ReturnCityListDto 
                { 
                    Cities = await FLogicContext.Repository.ReturnCityList(CountryId) 
                });
            } 
            catch (Exception LException)
            {
                FAppLogger.LogFatality(ControllerException.Handle(LException).ErrorDesc);
                return StatusCode(500, ControllerException.Handle(LException));
            }
        }

        /// <summary>
        /// Endpoint adding new user to the database.
        /// </summary>
        /// <param name="APayLoad"></param>
        /// <returns></returns>
        // POST api/v1/ajax/users/signup/
        [ValidateAntiForgeryToken]
        [HttpPost("users/signup")]
        public async Task<IActionResult> CreateAccountAsync([FromBody] UserCreateDto APayLoad) 
        {
            try
            {
                if (!ModelState.IsValid) 
                {
                    FAppLogger.LogError(ErrorCodes.INVALID_PAYLOAD);
                    return StatusCode(400, new ErrorHandlerDto 
                    {
                        ErrorCode = nameof(ErrorCodes.INVALID_PAYLOAD),
                        ErrorDesc = ErrorCodes.INVALID_PAYLOAD
                    });
                }

                if (await FLogicContext.Emails.IsEmailAddressExist(APayLoad.EmailAddress))
                {
                    FAppLogger.LogWarn(ErrorCodes.EMAIL_ALREADY_EXISTS);
                    return StatusCode(400, new ErrorHandlerDto 
                    {
                        ErrorCode = nameof(ErrorCodes.EMAIL_ALREADY_EXISTS),
                        ErrorDesc = ErrorCodes.EMAIL_ALREADY_EXISTS
                    });
                }

                var LUserId = await FLogicContext.Accounts.SignUp(APayLoad, 12);
                if (LUserId == 0) 
                {
                    FAppLogger.LogWarn(ErrorCodes.UNEXPECTED_ERROR);
                    return StatusCode(400, new ErrorHandlerDto
                    {
                        ErrorCode = nameof(ErrorCodes.UNEXPECTED_ERROR),
                        ErrorDesc = ErrorCodes.UNEXPECTED_ERROR
                    });
                }

                FAppLogger.LogInfo($"New user '{APayLoad.EmailAddress}' has been successfully registered.");               
                return StatusCode(204);
            }
            catch (Exception LException)
            {
                FAppLogger.LogFatality(ControllerException.Handle(LException).ErrorDesc);
                return StatusCode(500, ControllerException.Handle(LException));
            }
        }

        /// <summary>
        /// Endpoint allowing sign-in to the website.
        /// </summary>
        /// <param name="APayLoad"></param>
        /// <returns></returns>
        // POST api/v1/ajax/users/signin/
        [ValidateAntiForgeryToken]
        [HttpPost("users/signin")]
        public async Task<IActionResult> LogToAccountAsync([FromBody] UserLoginDto APayLoad) 
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    FAppLogger.LogError(ErrorCodes.INVALID_PAYLOAD);
                    return StatusCode(400, new ErrorHandlerDto 
                    {
                        ErrorCode = nameof(ErrorCodes.INVALID_PAYLOAD),
                        ErrorDesc = ErrorCodes.INVALID_PAYLOAD
                    });
                }

                var (LSessionId, LIsSignedIn, LIsExisting) = await FLogicContext.Accounts.SignIn(APayLoad.EmailAddr, APayLoad.Password);

                if (!LIsExisting)
                {
                    FAppLogger.LogError(ErrorCodes.EMAIL_DOES_NOT_EXIST);
                    return StatusCode(400, new ErrorHandlerDto
                    {
                        ErrorCode = nameof(ErrorCodes.EMAIL_DOES_NOT_EXIST),
                        ErrorDesc = ErrorCodes.EMAIL_DOES_NOT_EXIST
                    });
                }

                if (LSessionId == Guid.Empty && LIsSignedIn) 
                {
                    FAppLogger.LogError(ErrorCodes.INVALID_CREDENTIALS);
                    return StatusCode(400, new ErrorHandlerDto 
                    {
                        ErrorCode = nameof(ErrorCodes.INVALID_CREDENTIALS),
                        ErrorDesc = ErrorCodes.INVALID_CREDENTIALS
                    });
                }

                if (!LIsSignedIn) 
                {
                    FAppLogger.LogError(ErrorCodes.ACCOUNT_NOT_ACTIVATED);
                    return StatusCode(400, new ErrorHandlerDto 
                    {
                        ErrorCode = nameof(ErrorCodes.ACCOUNT_NOT_ACTIVATED),
                        ErrorDesc = ErrorCodes.ACCOUNT_NOT_ACTIVATED
                    });
                }

                HttpContext.Session.SetString(Constants.Sessions.KeyNames.SESSION_ID, LSessionId.ToString());
                HttpContext.Session.SetString(Constants.Sessions.KeyNames.EMAIL_ADDRESS, APayLoad.EmailAddr);
                HttpContext.Session.SetString(Constants.Sessions.KeyNames.EXPIRES_AT, DateTime.Now
                    .AddMinutes(Constants.Sessions.IDLE_TIMEOUT)
                    .ToString(CultureInfo.InvariantCulture));

                return StatusCode(204);
            }
            catch (Exception LException)
            {
                FAppLogger.LogFatality(ControllerException.Handle(LException).ErrorDesc);
                return StatusCode(500, ControllerException.Handle(LException));
            }
        }      
    }
}
