package com.sandordavid.SortingWebapp.service.impl;

import com.sandordavid.SortingWebapp.core.sorting.Sorter;
import com.sandordavid.SortingWebapp.domain.dto.SortingRequest;
import com.sandordavid.SortingWebapp.domain.dto.SortingResponse;
import com.sandordavid.SortingWebapp.service.SortingService;
import org.reflections.Reflections;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SortingServiceImpl implements SortingService {

    @Override
    public List<String> getAlgorithmNames() {
        Set<Class<? extends Sorter>> classes = getAllAlgorithms();
        return classes
                .stream()
                .map(Class::getSimpleName)
                .collect(Collectors.toList());
    }

    @Override
    public SortingResponse<? extends Comparable<?>> splitAndSort(SortingRequest sortingRequest) throws Exception {
        Class<? extends Sorter> sorterClass = getAllAlgorithms()
                .stream()
                .filter(c -> c.getSimpleName().equals(sortingRequest.getAlgorithm()))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid algorithm name!"));

        Sorter sorter = sorterClass.getDeclaredConstructor().newInstance();
        List<String> unsortedStringList = Arrays.asList(sortingRequest.getToSort().trim().split("\\s+"));
        List<? extends Comparable<?>> unsortedList = parseList(unsortedStringList);

        return new SortingResponse(sorter.sort(unsortedList), sorter.lastExecutionTime());
    }

    private Set<Class<? extends Sorter>> getAllAlgorithms() {
        Reflections reflections = new Reflections("com.sandordavid.SortingWebapp.core.sorting.impls");
        //Prefix doesn't work in the current version, so I do a manual check here
        return reflections
                .getSubTypesOf(Sorter.class)
                .stream()
                .filter(c -> c.getPackage().getName().equals("com.sandordavid.SortingWebapp.core.sorting.impls"))
                .collect(Collectors.toSet());
    }

    private List<? extends Comparable<?>> parseList(List<String> unsortedStringList) {
            try {
                return unsortedStringList
                        .stream()
                        .map(Integer::parseInt)
                        .collect(Collectors.toList());
            } catch (NumberFormatException e) {
                try {
                    return unsortedStringList
                            .stream()
                            .map(BigDecimal::new)
                            .collect(Collectors.toList());
                } catch (NumberFormatException ne) {
                    return unsortedStringList;
                }
            }
    }
}
