package com.sandordavid.SortingWebapp.domain.model;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="user_")
public class User_ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Username can't be blank!")
    @Length(min = 3, max = 31, message = "Username has to contain between 3 and 31 characters!")
    @Column(unique = true)
    private String username;

    @NotBlank(message = "Password can't be blank!")
    @Length(min = 3, message = "Password has to be at least 3 characters long!")
    private String password;

    public User_() {
    }

    public User_(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void encodePlainPassword(PasswordEncoder passwordEncoder) {
        password = passwordEncoder.encode(password);
    }
}
