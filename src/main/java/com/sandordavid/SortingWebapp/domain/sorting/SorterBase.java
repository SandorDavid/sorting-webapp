package com.sandordavid.SortingWebapp.domain.sorting;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public abstract class SorterBase<T extends Comparable<T>> implements Sorter<T> {

    private long executionTime;

    public List<T> sort(List<T> unsortedList){
        // Important to copy the incoming list due to modification exception on AbstractLists
        List<T> returnList = new ArrayList<>(unsortedList);

        long then = System.nanoTime();
        this.doSort(returnList);
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

    protected abstract void doSort(List<T> unsortedList);
}
