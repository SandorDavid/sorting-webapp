package com.sandordavid.SortingWebapp.domain.dto;

import lombok.*;

import java.io.Serializable;

@Getter @Setter @RequiredArgsConstructor @NoArgsConstructor
public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;

    @NonNull
    private String token;

}