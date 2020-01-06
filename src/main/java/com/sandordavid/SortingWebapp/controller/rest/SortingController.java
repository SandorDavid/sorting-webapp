package com.sandordavid.SortingWebapp.controller.rest;

import com.sandordavid.SortingWebapp.domain.dto.SortingRequest;
import com.sandordavid.SortingWebapp.domain.dto.SortingResponse;
import com.sandordavid.SortingWebapp.service.SortingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/sorting")
public class SortingController {

    @Autowired
    private SortingService sortingService;

    @GetMapping("/get-algorithm-names")
    public ResponseEntity<List<String>> getAlgorithmNames() {
        List<String> algos = sortingService.getAlgorithmNames();
        return ResponseEntity.ok(algos);
    }

    @PostMapping("/sort")
    public ResponseEntity<SortingResponse> sort(@RequestBody SortingRequest sortingRequest) throws Exception {
        return ResponseEntity.ok(sortingService.splitAndSort(sortingRequest));
    }
}
