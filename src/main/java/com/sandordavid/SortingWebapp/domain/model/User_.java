package com.sandordavid.SortingWebapp.domain.model;

import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter @Setter @NoArgsConstructor @RequiredArgsConstructor
@Entity
@Table(name="user_")
public class User_ {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @NotBlank(message = "Username can't be blank!")
    @Length(min = 3, max = 31, message = "Username has to contain between 3 and 31 characters!")
    @Column(unique = true)
    private String username;

    @NonNull
    @NotBlank(message = "Password can't be blank!")
    @Length(min = 3, message = "Password has to be at least 3 characters long!")
    private String password;

    public void encodePlainPassword(PasswordEncoder passwordEncoder) {
        password = passwordEncoder.encode(password);
    }
}
