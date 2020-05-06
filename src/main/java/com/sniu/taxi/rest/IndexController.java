package com.sniu.taxi.rest;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping(value = {"/", "/order", "/employee", "/orderemployee", "/car", "/client", "/position"})
    public String index() {
        return "index.html";
    }

}
