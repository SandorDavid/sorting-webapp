package com.sandordavid.SortingWebapp.domain.sorting;

import java.util.List;

public interface Sorter<T extends Comparable<T>> {

    public void sort(List<T> unsortedList);

    public long lastExecutionTime();
}
