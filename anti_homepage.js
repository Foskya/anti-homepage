// ==UserScript==
// @name         Redirects to Google
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects to Google when on a specific website
// @author       Foskya
// @match        https://[ORGANIZATIONS_DOMAIN].sharepoint.com/sites/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = "https://www.google.com";
})();
