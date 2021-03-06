﻿// View module to manipulate Virtual DOM
"use strict";

import Cookies from "../functions/cookies";
import LoginButtons from "../components/loginButtons";

export default class IndexPage
{
    constructor(AContainer, ANavButtons)
    {
        this.Container  = AContainer;
        this.NavButtons = ANavButtons;
    }

    Initialize()
    {
        if (this.Container === null) return null;

        this.BindDom();
        this.Cookies = new Cookies();
        let SessionState = this.Cookies.GetCookie("user_session");

        this.MoveToRegisterPage = function () 
        { 
            window.location.replace(`${window.location.origin}/register`) 
        };
        
        this.MoveToLoginPage = function () 
        { 
            window.location.replace(`${window.location.origin}/login`) 
        };
        
        this.LogoutUser = function () 
        {
            window.location.replace(`${window.location.origin}/logout`) 
        };

        if (SessionState != "alive")
        {
            this.LoginButtons = new LoginButtons(
                this.NavButtons, 
                "Signup_Login", 
                this.MoveToRegisterPage, 
                this.MoveToLoginPage, 
                null
            );
            
            this.LoginButtons.Show();
            return void 0;
        }
    
        this.LoginButtons = new LoginButtons(
            this.NavButtons, 
            "Logout", 
            null, 
            null, 
            this.LogoutUser
        );
        
        this.LoginButtons.Show();
    }

    BindDom()
    {
        this.ModalWindowHandle = this.Container.querySelector("#Handle_Modal");
    }
}
