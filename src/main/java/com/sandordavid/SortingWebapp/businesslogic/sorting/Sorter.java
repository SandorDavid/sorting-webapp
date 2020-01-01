package com.sandordavid.SortingWebapp.businesslogic.sorting;

import java.util.List;

public interface Sorter<T extends Comparable<T>> {

    List<T> sort(List<T> unsortedList);

    long lastExecutionTime();
}
