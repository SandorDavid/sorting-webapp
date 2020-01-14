package com.sandordavid.SortingWebapp.service;

import com.sandordavid.SortingWebapp.domain.dto.SortingRequest;
import com.sandordavid.SortingWebapp.domain.dto.SortingResponse;

import java.util.List;

public interface SortingService {

    List<String> getAlgorithmNames();

    SortingResponse<? extends Comparable<?>> splitAndSort(SortingRequest sortingRequest) throws Exception;
}
