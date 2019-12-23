package com.sandordavid.SortingWebapp.domain.sorting;

import java.util.List;

public abstract class SorterBase<T extends Comparable<T>> implements Sorter<T> {

    private long executionTime;

    public void sort(List<T> unsortedList){
        long then = System.nanoTime();
        this.doSort(unsortedList);
        long now = System.nanoTime();
        this.executionTime = now - then;
    }

    public long lastExecutionTime(){
        if (executionTime == 0){
            throw new NoExecutionException("No sorting has been executed with this instance!");
        }
        return executionTime;
    }

    protected abstract void doSort(List<T> unsortedList);
}
