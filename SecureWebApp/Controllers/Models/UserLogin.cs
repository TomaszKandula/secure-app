﻿using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace SecureWebApp.Controllers.Models
{

    public class UserLogin
    {

        [JsonPropertyName("EmailAddr")]
        [Required]
        [StringLength(255)]
        [RegularExpression(@"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]
        public string EmailAddr { get; set; }

        [JsonPropertyName("Password")]
        [Required]
        [StringLength(255)]
        public string Password { get; set; }

    }

}
