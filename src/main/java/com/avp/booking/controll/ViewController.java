package com.avp.booking.controll;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
public class ViewController
{
    private static final String INDEX_VIEW = "index";

    @GetMapping(value = {"/", "/login"})
    public ModelAndView index(ModelAndView view, Principal principal)
    {
        view.setViewName(INDEX_VIEW);
        view.addObject("isLogged", principal != null);
        view.addObject("username",
                (principal != null) ? principal.getName() : "");

        return view;
    }
}
