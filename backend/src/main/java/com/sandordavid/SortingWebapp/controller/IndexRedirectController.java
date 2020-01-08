package com.sandordavid.SortingWebapp.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexRedirectController implements ErrorController {

    final static String PATH = "/error";

    @RequestMapping(PATH)
    public String handleError(){
        return "forward:/index.html";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}
