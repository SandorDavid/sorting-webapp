package com.sandordavid.SortingWebapp.core.sorting;

import com.sandordavid.SortingWebapp.domain.exception.NoExecutionException;

import java.util.List;

public abstract class SorterBase<T extends Comparable<T>> implements Sorter<T> {

    private long executionTime;

    public List<T> sort(List<T> unsortedList){
        long then = System.nanoTime();
        List<T> returnList = doSort(unsortedList);
        long now = System.nanoTime();
        this.executionTime = now - then;

        return returnList;
    }

    public long lastExecutionTime(){
        if (executionTime == 0){
            throw new NoExecutionException("No sorting has been executed with this instance!");
        }
        return executionTime;
    }

    protected abstract List<T> doSort(List<T> unsortedList);
}
