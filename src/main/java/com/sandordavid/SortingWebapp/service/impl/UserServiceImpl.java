package com.sandordavid.SortingWebapp.service.impl;

import com.sandordavid.SortingWebapp.auth.JwtTokenUtil;
import com.sandordavid.SortingWebapp.auth.JwtUserDetailsService;
import com.sandordavid.SortingWebapp.domain.model.User_;
import com.sandordavid.SortingWebapp.repository.UserRepository;
import com.sandordavid.SortingWebapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Override
    public void saveUser(User_ newUser) {

        User_ existingUserUsingThisUsername = findByUsername(newUser.getUsername());

        if (existingUserUsingThisUsername == null){
            newUser.encodePlainPassword(bCryptPasswordEncoder);
            userRepository.save(newUser);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This username is already in use!");
        }

    }

    @Override
    public User_ findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public String provideJwtToken(String username){
        final UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        return jwtTokenUtil.generateToken(userDetails);
    }

    @Override
    public void authenticate(String username, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This username/password combination doesn't exist!");
        }
    }
}
