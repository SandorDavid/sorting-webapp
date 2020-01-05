package com.sandordavid.SortingWebapp.controller.rest;

import com.sandordavid.SortingWebapp.domain.dto.JwtResponse;

import com.sandordavid.SortingWebapp.domain.model.User_;
import com.sandordavid.SortingWebapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@CrossOrigin
@RequestMapping("/auth")
public class JwtAuthenticationController {

    @Autowired
    private UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<JwtResponse> signUp(@Valid @RequestBody User_ newUser) {
        userService.saveUser(newUser);

        String token = userService.provideJwtToken(newUser.getUsername());

        return ResponseEntity.ok(new JwtResponse(token));
    }

    @PostMapping("/sign-in")
    public ResponseEntity<JwtResponse> signIn(@Valid @RequestBody User_ registeredUser) {
        userService.authenticate(registeredUser.getUsername(), registeredUser.getPassword());

        String token = userService.provideJwtToken(registeredUser.getUsername());

        return ResponseEntity.ok(new JwtResponse(token));
    }

}