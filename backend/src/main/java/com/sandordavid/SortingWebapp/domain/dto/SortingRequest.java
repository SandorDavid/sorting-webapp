package com.sandordavid.SortingWebapp.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @NoArgsConstructor
public class SortingRequest {

    private String algorithm;
    private String toSort;

}
