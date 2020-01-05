package com.sandordavid.SortingWebapp.service;

import com.sandordavid.SortingWebapp.domain.model.User_;

public interface UserService {

    void saveUser(User_ newUser);

    User_ findByUsername(String username);

    String provideJwtToken(String username);

    void authenticate(String username, String password);

}
