package com.sandordavid.SortingWebapp.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class SortingResponse<T extends Comparable<T>> {

    private List<T> sortedOutput;
    private Long executionTime;

}
