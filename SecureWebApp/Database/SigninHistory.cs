﻿using System;

namespace SecureWebApp.Database
{
    public class SigninHistory
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime LoggedAt { get; set; }

        public virtual Users User { get; set; }
    }
}
