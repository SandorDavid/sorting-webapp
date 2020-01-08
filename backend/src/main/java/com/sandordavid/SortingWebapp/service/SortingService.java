package com.sandordavid.SortingWebapp.service;

import com.sandordavid.SortingWebapp.domain.dto.SortingRequest;
import com.sandordavid.SortingWebapp.domain.dto.SortingResponse;

import java.util.List;

public interface SortingService {

    List<String> getAlgorithmNames();

    <T extends Comparable<T>> SortingResponse<T> splitAndSort(SortingRequest sortingRequest) throws Exception;
}
